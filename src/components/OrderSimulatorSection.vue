<script setup>
import { ref, computed } from 'vue'

const boxPrice = 3.50 // Precio referencial por cajita de 3 frascos (120g)
const quantity = ref(1)
const selectedCity = ref('Quito')
const customerName = ref('')
const customNote = ref('')
const isCopied = ref(false)

const cities = [
  'Quito',
  'Guayaquil',
  'Cuenca',
  'Ambato',
  'Manta',
  'Otra ciudad (Ecuador)'
]

const totalJars = computed(() => quantity.value * 3)
const totalGrams = computed(() => quantity.value * 120)
const totalPrice = computed(() => (quantity.value * boxPrice).toFixed(2))

const incrementQty = () => {
  if (quantity.value < 20) quantity.value++
}

const decrementQty = () => {
  if (quantity.value > 1) quantity.value--
}

const setQty = (num) => {
  quantity.value = num
}

// Generador de mensaje para WhatsApp
const whatsappMessage = computed(() => {
  const namePart = customerName.value ? `Hola, soy ${customerName.value}. ` : '¡Hola FrutiAventura! '
  const notePart = customNote.value ? ` Nota adicional: "${customNote.value}".` : ''
  return `${namePart}Deseo solicitar ${quantity.value} cajita(s) de FrutiAventura (total ${totalJars.value} mini frascos de 40g: Guayaba, Mango y Mandarina). Ciudad: ${selectedCity.value}.${notePart} ¿Me pueden brindar información de entrega? ¡Gracias!`
})

const whatsappUrl = computed(() => {
  // Número comercial de ejemplo para Ecuador
  const phone = '593999999999'
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage.value)}`
})

const copyMessage = async () => {
  try {
    await navigator.clipboard.writeText(whatsappMessage.value)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (err) {
    console.error('No se pudo copiar el texto', err)
  }
}
</script>

<template>
  <section id="pedir" class="section order-section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--green">
          🛒 Pedidos & Contacto Directo
        </span>
        <h2 class="section-title">¡Pide tu FrutiAventura Hoy!</h2>
        <p class="section-subtitle">
          Elige cuántas cajitas deseas recibir. Al hacer clic en el botón, te conectamos directamente por WhatsApp con tu pedido ya preparado para coordinar la entrega.
        </p>
      </div>

      <div class="order-grid">
        <!-- FORMULARIO INTERACTIVO (SOLO FRONTEND) -->
        <div class="order-card card-base">
          <h3 class="order-card__title">Calcula tu Pedido</h3>

          <!-- Selector de Cantidad -->
          <div class="order-field">
            <label class="order-label">
              <span>Cantidad de Cajitas FrutiAventura:</span>
              <small class="order-label-sub">(Cada cajita incluye los 3 sabores: Guayaba, Mango y Mandarina)</small>
            </label>
            
            <div class="qty-control">
              <button 
                type="button" 
                class="qty-btn" 
                @click="decrementQty"
                :disabled="quantity <= 1"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <span class="qty-number" data-testid="qty-display">{{ quantity }}</span>
              <button 
                type="button" 
                class="qty-btn" 
                @click="incrementQty"
                :disabled="quantity >= 20"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            <!-- Accesos directos de cantidad -->
            <div class="qty-presets">
              <button 
                v-for="preset in [1, 2, 3, 5]" 
                :key="preset"
                type="button"
                class="preset-btn"
                :class="{ 'preset-btn--active': quantity === preset }"
                @click="setQty(preset)"
              >
                {{ preset }} {{ preset === 1 ? 'caja' : 'cajas' }}
              </button>
            </div>
          </div>

          <!-- Ciudad de Entrega -->
          <div class="order-field">
            <label for="city-select" class="order-label">
              <span>Ciudad de entrega (Ecuador):</span>
            </label>
            <div class="select-wrapper">
              <select id="city-select" v-model="selectedCity" class="order-select">
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>

          <!-- Nombre opcional -->
          <div class="order-field">
            <label for="name-input" class="order-label">
              <span>Tu Nombre (opcional):</span>
            </label>
            <input 
              id="name-input"
              type="text" 
              v-model="customerName"
              placeholder="Ej. María Pérez" 
              class="order-input"
              maxlength="50"
            />
          </div>

          <!-- Nota opcional -->
          <div class="order-field">
            <label for="note-input" class="order-label">
              <span>Mensaje o dedicatoria especial (opcional):</span>
            </label>
            <input 
              id="note-input"
              type="text" 
              v-model="customNote"
              placeholder="Ej. ¡Es para un obsequio especial!" 
              class="order-input"
              maxlength="100"
            />
          </div>
        </div>

        <!-- RESUMEN DE COMPRA & CONEXIÓN WHATSAPP -->
        <div class="summary-card">
          <div class="summary-header">
            <span class="summary-badge">Resumen de tu pedido</span>
            <h3 class="summary-title">Pack Degustación</h3>
          </div>

          <div class="summary-details">
            <div class="summary-row">
              <span>Cajas FrutiAventura:</span>
              <strong data-testid="summary-boxes">{{ quantity }} {{ quantity === 1 ? 'caja' : 'cajas' }}</strong>
            </div>
            <div class="summary-row">
              <span>Total de mini frascos:</span>
              <strong data-testid="summary-jars">{{ totalJars }} frascos (40g c/u)</strong>
            </div>
            <div class="summary-row">
              <span>Peso total de fruta:</span>
              <strong data-testid="summary-weight">{{ totalGrams }} gramos</strong>
            </div>
            <div class="summary-row">
              <span>Sabores incluidos:</span>
              <span class="summary-flavors-tag">Guayaba, Mango y Mandarina</span>
            </div>
            <div class="summary-row summary-row--destacada">
              <span>Ciudad destino:</span>
              <strong>{{ selectedCity }}</strong>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-row summary-row--total">
              <div>
                <span class="total-label">Total estimado:</span>
                <small class="total-sub">(${{ boxPrice.toFixed(2) }} por caja)</small>
              </div>
              <span class="total-amount" data-testid="summary-total">${{ totalPrice }}</span>
            </div>
          </div>

          <!-- Vista previa del mensaje -->
          <div class="message-preview">
            <span class="message-preview__title">Mensaje que se enviará:</span>
            <p class="message-preview__text">“{{ whatsappMessage }}”</p>
          </div>

          <!-- Botones de Acción -->
          <div class="summary-actions">
            <a 
              :href="whatsappUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-order-submit"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.15.11-3.69-.94-3.25-1.35-5.35-4.66-5.51-4.88-.16-.22-1.32-1.76-1.32-3.35 0-1.59.83-2.38 1.13-2.7.3-.32.65-.4 1-.4.16 0 .31 0 .45.02.39.02.58.05.84.66.31.75 1.07 2.61 1.16 2.8.09.19.15.42.03.66-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.93 1.54 2 2.49 1.38 1.23 2.54 1.61 2.9 1.79.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 2.05.97 2.4 1.14.35.17.58.26.67.41.09.15.09.87-.15 1.54z"/>
              </svg>
              <span>Pedir por WhatsApp</span>
            </a>

            <button 
              type="button" 
              class="btn btn-outline btn-copy-msg"
              @click="copyMessage"
            >
              <span>{{ isCopied ? '✓ ¡Mensaje Copiado!' : 'Copiar Texto del Mensaje' }}</span>
            </button>
          </div>

          <div class="guarantee-box">
            <span class="guarantee-icon">🛡️</span>
            <small>Atención personalizada directa de nuestro equipo artesanal. Sin pagos por adelantado en la web.</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.order-section {
  background-color: var(--brand-cream);
}

.order-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  align-items: start;
}

@media (min-width: 900px) {
  .order-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.order-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.order-card__title {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  border-bottom: 2px solid var(--brand-cream-dark);
  padding-bottom: 0.75rem;
}

.order-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.order-label {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-green);
  font-weight: var(--font-weight-bold);
}

.order-label-sub {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--brand-text-muted);
  font-weight: normal;
}

/* CONTROL DE CANTIDAD */
.qty-control {
  display: inline-flex;
  align-items: center;
  background-color: var(--brand-cream);
  border: 2px solid var(--brand-cream-dark);
  border-radius: var(--radius-pill);
  padding: 0.25rem;
  width: fit-content;
}

.qty-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: var(--brand-green);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.qty-btn:hover:not(:disabled) {
  background-color: var(--brand-yellow);
  color: var(--brand-green);
  transform: scale(1.05);
}

.qty-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.qty-number {
  min-width: 50px;
  text-align: center;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: var(--font-weight-bold);
  color: var(--brand-green);
}

.qty-presets {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.35rem;
}

.preset-btn {
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--brand-cream-dark);
  background-color: var(--brand-cream);
  font-size: 0.82rem;
  font-weight: bold;
  color: var(--brand-text-muted);
  transition: all var(--transition-fast);
}

.preset-btn:hover {
  border-color: var(--brand-green-light);
  color: var(--brand-green);
}

.preset-btn--active {
  background-color: var(--brand-green);
  color: #FFFFFF;
  border-color: var(--brand-green);
}

/* INPUTS Y SELECT */
.order-input,
.order-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--brand-cream-dark);
  background-color: #FFFFFF;
  font-size: 0.95rem;
  color: var(--brand-text-dark);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.order-input:focus,
.order-select:focus {
  outline: none;
  border-color: var(--brand-green-light);
  box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.15);
}

/* TARJETA DE RESUMEN */
.summary-card {
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 2.25rem);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--brand-yellow);
}

.summary-header {
  margin-bottom: var(--space-md);
}

.summary-badge {
  display: inline-block;
  background-color: var(--brand-yellow-light);
  color: var(--flavor-mango-dark);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.35rem;
}

.summary-title {
  font-size: var(--text-xl);
  color: var(--brand-green);
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: var(--space-md);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.92rem;
  color: var(--brand-text-dark);
}

.summary-row strong {
  color: var(--brand-green);
}

.summary-flavors-tag {
  font-size: 0.8rem;
  background-color: var(--brand-pink-light);
  color: var(--brand-pink-badge);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  font-weight: bold;
}

.summary-divider {
  height: 1px;
  background-color: var(--brand-cream-dark);
  margin: 0.5rem 0;
}

.summary-row--total {
  font-size: 1.15rem;
}

.total-label {
  font-family: var(--font-display);
  font-weight: bold;
  color: var(--brand-green);
  display: block;
}

.total-sub {
  font-size: 0.75rem;
  color: var(--brand-text-muted);
}

.total-amount {
  font-family: var(--font-display);
  font-size: 1.85rem;
  font-weight: var(--font-weight-black);
  color: var(--brand-green);
}

/* PREVIEW MENSAJE */
.message-preview {
  background-color: #FAF5E9;
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  margin-bottom: var(--space-md);
  border: 1px dashed rgba(19, 62, 43, 0.2);
}

.message-preview__title {
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--brand-green-light);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.message-preview__text {
  font-size: 0.82rem;
  color: var(--brand-text-muted);
  font-style: italic;
  line-height: 1.4;
}

.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.btn-order-submit {
  width: 100%;
  padding: 0.95rem;
  font-size: 1.1rem;
}

.btn-copy-msg {
  width: 100%;
  font-size: 0.88rem;
  padding: 0.65rem;
}

.guarantee-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--brand-text-muted);
  line-height: 1.3;
}

.guarantee-icon {
  font-size: 1.25rem;
}
</style>
