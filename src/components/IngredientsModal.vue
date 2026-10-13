<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  flavor: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="modal-backdrop" 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-title"
      @click.self="emit('close')"
    >
      <div class="modal-card">
        <button 
          class="modal-close-btn" 
          aria-label="Cerrar ventana de ingredientes"
          @click="emit('close')"
        >
          ✕
        </button>

        <div class="modal-header">
          <span class="modal-icon">{{ flavor?.icon || '🍯' }}</span>
          <div>
            <span class="modal-pretitle">Ficha Técnica & Nutricional</span>
            <h3 id="modal-title" class="modal-title">Mermelada de {{ flavor?.name || 'Fruta Natural' }}</h3>
          </div>
        </div>

        <div class="modal-body">
          <div class="modal-section">
            <h4>🌿 Ingredientes Naturales</h4>
            <p class="modal-text">
              FrutiAventura utiliza únicamente ingredientes puros de la huerta, sin químicos ni conservantes artificiales añadidos:
            </p>
            <ul class="modal-ingredient-list">
              <li v-for="ing in flavor?.ingredients" :key="ing">
                <span class="check-icon">✔</span>
                <span><strong>{{ ing }}</strong></span>
              </li>
            </ul>
          </div>

          <div class="modal-section">
            <h4>📊 Semáforo Nutricional</h4>
            <div class="modal-semaforo-grid">
              <div class="semaforo-cell">
                <span class="cell-label">Azúcar</span>
                <span class="semaforo-pill semaforo-pill--medio">MEDIO</span>
              </div>
              <div class="semaforo-cell">
                <span class="cell-label">Grasa</span>
                <span class="semaforo-pill semaforo-pill--nocontiene">NO CONTIENE</span>
              </div>
              <div class="semaforo-cell">
                <span class="cell-label">Sal</span>
                <span class="semaforo-pill semaforo-pill--nocontiene">NO CONTIENE</span>
              </div>
            </div>
          </div>

          <div class="modal-section modal-section--box">
            <h4>📦 Características del Frasco</h4>
            <div class="modal-meta-grid">
              <div>
                <strong>Contenido Neto:</strong>
                <p>40 gramos</p>
              </div>
              <div>
                <strong>Origen:</strong>
                <p>Elaborado en Ecuador</p>
              </div>
              <div>
                <strong>Conservación:</strong>
                <p>Lugar fresco y seco</p>
              </div>
              <div>
                <strong>Empaque:</strong>
                <p>Vidrio hermético reciclable</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary btn-block" @click="emit('close')">
            Entendido, volver a la tienda
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(19, 62, 43, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 200ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-card {
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-modal);
  border: 2px solid var(--brand-cream-dark);
  position: relative;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  animation: slideUp 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { transform: translateY(20px) scale(0.96); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--brand-cream);
  color: var(--brand-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  background-color: var(--brand-yellow);
  transform: rotate(90deg);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: var(--space-md);
  padding-right: 2rem;
}

.modal-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.modal-pretitle {
  display: block;
  font-family: var(--font-display);
  font-size: 0.75rem;
  color: var(--brand-pink-badge);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.modal-title {
  font-size: var(--text-xl);
  color: var(--brand-green);
  line-height: 1.2;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.modal-section h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--brand-green);
  margin-bottom: 0.5rem;
}

.modal-text {
  font-size: 0.88rem;
  color: var(--brand-text-muted);
  margin-bottom: 0.75rem;
}

.modal-ingredient-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.modal-ingredient-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--brand-cream);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  color: var(--brand-green);
}

.check-icon {
  color: var(--brand-green-light);
  font-weight: bold;
}

.modal-semaforo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  background-color: #FAF5E9;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--brand-cream-dark);
}

.semaforo-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
}

.cell-label {
  font-size: 0.78rem;
  font-weight: bold;
  color: var(--brand-text-dark);
}

.modal-section--box {
  background-color: var(--brand-cream);
  border-radius: var(--radius-md);
  padding: 1rem;
  border: 1px solid var(--brand-cream-dark);
}

.modal-meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  font-size: 0.82rem;
}

.modal-meta-grid strong {
  color: var(--brand-green);
  display: block;
}

.modal-meta-grid p {
  color: var(--brand-text-muted);
}

.modal-footer {
  border-top: 1px solid var(--brand-cream-dark);
  padding-top: var(--space-md);
}

.btn-block {
  width: 100%;
}
</style>
