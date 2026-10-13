<script setup>
import { ref } from 'vue'

const selectedJam = ref('mango')
const selectedToppings = ref(['bananas', 'stars'])
const isCelebrated = ref(false)

const jams = [
  { id: 'guayaba', name: 'Guayaba Rosa', icon: '🍓', color: '#E63956', spreadBg: '#FFE4E8' },
  { id: 'mango', name: 'Mango Dorado', icon: '🥭', color: '#F59E0B', spreadBg: '#FEF3C7' },
  { id: 'mandarina', name: 'Mandarina Chispa', icon: '🍊', color: '#EA580C', spreadBg: '#FFEDD5' }
]

const availableToppings = [
  { id: 'bananas', name: 'Bananitas', icon: '🍌' },
  { id: 'stars', name: 'Estrellas Kiwi', icon: '⭐' },
  { id: 'berries', name: 'Arándanos', icon: '🫐' },
  { id: 'sparkles', name: 'Chispitas', icon: '✨' }
]

const toggleTopping = (id) => {
  if (selectedToppings.value.includes(id)) {
    selectedToppings.value = selectedToppings.value.filter(t => t !== id)
  } else {
    selectedToppings.value.push(id)
  }
}

const celebrateToast = () => {
  isCelebrated.value = true
  setTimeout(() => {
    isCelebrated.value = false
  }, 4000)
}
</script>

<template>
  <section id="aventura-ninos" class="section kids-section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--yellow anim-bounce">
          🎨 Rincón de Juegos & Desayunos
        </span>
        <h2 class="section-title">¡La Aventura de los Pequeños Chefs!</h2>
        <p class="section-subtitle">
          ¡A los niños les encanta crear su propia comida divertida! Conoce a nuestras tres mascotas exploradoras y diseña tu tostada mágica interactiva.
        </p>
      </div>

      <!-- ENCUENTRO CON LAS 3 MASCOTAS EXPLORADORAS -->
      <div class="mascots-showcase">
        <div class="mascots-img-card">
          <img 
            src="/assets/mascots-explorers.jpg" 
            alt="Mascotas exploradoras Gia la Guayaba, Monty el Mango y Max la Mandarina"
            class="mascots-img"
            width="600"
            height="600"
            loading="lazy"
          />
          <div class="mascots-badge-overlay">
            <span>✨ Los 3 Amigos Exploradores</span>
          </div>
        </div>

        <div class="mascots-speech-group">
          <div class="speech-card speech-card--guayaba">
            <span class="speech-avatar">🍓</span>
            <div>
              <strong>Gia la Guayaba</strong>
              <p>“¡Mi mermelada es la más dulce y perfumada! Perfecta para untar en galletas de avena.”</p>
            </div>
          </div>

          <div class="speech-card speech-card--mango">
            <span class="speech-avatar">🥭</span>
            <div>
              <strong>Monty el Mango</strong>
              <p>“¡Tengo el secreto del toronjil natural! Te doy energía brillante como el sol.”</p>
            </div>
          </div>

          <div class="speech-card speech-card--mandarina">
            <span class="speech-avatar">🍊</span>
            <div>
              <strong>Max la Mandarina</strong>
              <p>“¡Chispeante y jugoso! Conmigo nunca te aburres en la merienda del colegio.”</p>
            </div>
          </div>
        </div>
      </div>

      <!-- TALLER INTERACTIVO: DISEÑA TU TOSTADA MÁGICA -->
      <div class="toast-workshop-card">
        <div class="workshop-header">
          <span class="workshop-tag">🎮 Mini-Juego Interactivo</span>
          <h3>¡Arma tu Tostada Sonriente FrutiAventura!</h3>
          <p>Elige tu mermelada favorita, añade ingredientes y mira cómo cobra vida:</p>
        </div>

        <div class="workshop-grid">
          <!-- CONTROLES DEL JUEGO -->
          <div class="workshop-controls">
            <!-- Paso 1: Mermelada -->
            <div class="control-group">
              <label class="control-label">1. Unta tu mermelada favorita:</label>
              <div class="jam-picker">
                <button
                  v-for="jam in jams"
                  :key="jam.id"
                  type="button"
                  class="jam-btn"
                  :class="{ 'jam-btn--active': selectedJam === jam.id }"
                  :style="{ '--jam-color': jam.color }"
                  @click="selectedJam = jam.id"
                >
                  <span class="jam-btn__icon">{{ jam.icon }}</span>
                  <span>{{ jam.name }}</span>
                </button>
              </div>
            </div>

            <!-- Paso 2: Toppings -->
            <div class="control-group">
              <label class="control-label">2. Añade toppings divertidos:</label>
              <div class="topping-picker">
                <button
                  v-for="top in availableToppings"
                  :key="top.id"
                  type="button"
                  class="topping-btn"
                  :class="{ 'topping-btn--active': selectedToppings.includes(top.id) }"
                  @click="toggleTopping(top.id)"
                >
                  <span>{{ top.icon }}</span>
                  <span>{{ top.name }}</span>
                </button>
              </div>
            </div>

            <button 
              type="button" 
              class="btn btn-secondary btn-celebrate"
              @click="celebrateToast"
            >
              <span>🎉 ¡Celebrar mi Creación!</span>
            </button>
          </div>

          <!-- LIENZO DE LA TOSTADA MÁGICA INTERACTIVA -->
          <div class="toast-canvas-wrap">
            <div 
              class="interactive-toast"
              :class="{ 'interactive-toast--celebrate': isCelebrated }"
            >
              <!-- Capa de pan -->
              <div class="bread-crust">
                <div 
                  class="bread-crumb"
                  :style="{ 
                    backgroundColor: jams.find(j => j.id === selectedJam)?.spreadBg,
                    borderColor: jams.find(j => j.id === selectedJam)?.color
                  }"
                >
                  <!-- Cara sonriente de la tostada -->
                  <div class="toast-face">
                    <div class="toast-eyes">
                      <span class="eye">👀</span>
                    </div>
                    <div class="toast-smile">
                      <span>👄</span>
                    </div>
                  </div>

                  <!-- Toppings colocados -->
                  <div class="toast-toppings-layer">
                    <span 
                      v-if="selectedToppings.includes('bananas')" 
                      class="placed-topping placed-topping--1 anim-wiggle"
                    >
                      🍌🍌
                    </span>
                    <span 
                      v-if="selectedToppings.includes('stars')" 
                      class="placed-topping placed-topping--2 anim-bounce"
                    >
                      ⭐⭐
                    </span>
                    <span 
                      v-if="selectedToppings.includes('berries')" 
                      class="placed-topping placed-topping--3 anim-float"
                    >
                      🫐🫐
                    </span>
                    <span 
                      v-if="selectedToppings.includes('sparkles')" 
                      class="placed-topping placed-topping--4"
                    >
                      ✨✨
                    </span>
                  </div>
                </div>
              </div>

              <!-- Cartel de felicitación emergente -->
              <div v-if="isCelebrated" class="celebrate-banner anim-bounce">
                <span>🏆 ¡Desayuno Mágico Aprobado por FrutiAventura! ❤️</span>
              </div>
            </div>

            <!-- Foto de referencia real de desayuno infantil -->
            <div class="real-breakfast-card">
              <img 
                src="/assets/kids-breakfast-fun.jpg" 
                alt="Desayuno divertido real con caras felices de mermelada FrutiAventura"
                class="real-breakfast-img"
                width="400"
                height="300"
                loading="lazy"
              />
              <p class="real-breakfast-caption">
                🍽️ ¡Así de divertido luce en la vida real sobre tu mesa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kids-section {
  background: linear-gradient(180deg, #FFFDF9 0%, #FFF7ED 100%);
  position: relative;
  overflow: hidden;
}

/* MOSTRADOR DE MASCOTAS */
.mascots-showcase {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  margin-bottom: var(--space-2xl);
}

@media (min-width: 860px) {
  .mascots-showcase {
    grid-template-columns: 1fr 1.2fr;
  }
}

.mascots-img-card {
  position: relative;
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 3px solid var(--brand-yellow);
}

.mascots-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.mascots-img-card:hover .mascots-img {
  transform: scale(1.03);
}

.mascots-badge-overlay {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(19, 62, 43, 0.85);
  backdrop-filter: blur(8px);
  color: var(--brand-yellow);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: bold;
  text-align: center;
}

.mascots-speech-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.speech-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #FFFFFF;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 2px solid;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.speech-card:hover {
  transform: translateX(6px);
}

.speech-card--guayaba {
  border-color: var(--flavor-guayaba-border);
  background-color: var(--flavor-guayaba-bg);
}

.speech-card--mango {
  border-color: var(--flavor-mango-border);
  background-color: var(--flavor-mango-bg);
}

.speech-card--mandarina {
  border-color: var(--flavor-mandarina-border);
  background-color: var(--flavor-mandarina-bg);
}

.speech-avatar {
  font-size: 2.25rem;
  line-height: 1;
}

.speech-card strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--brand-green);
  margin-bottom: 0.25rem;
}

.speech-card p {
  font-size: 0.88rem;
  color: var(--brand-text-dark);
  line-height: 1.4;
  margin: 0;
}

/* TALLER TOSTADA */
.toast-workshop-card {
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: var(--shadow-lg);
  border: 3px solid var(--color-sun-deep);
}

.workshop-header {
  text-align: center;
  margin-bottom: var(--space-lg);
}

.workshop-tag {
  display: inline-block;
  background-color: var(--brand-yellow-light);
  color: var(--brand-green);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  padding: 0.3rem 0.85rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.5rem;
}

.workshop-header h3 {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  margin-bottom: 0.35rem;
}

.workshop-header p {
  color: var(--brand-text-muted);
  font-size: var(--text-base);
}

.workshop-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
}

@media (min-width: 860px) {
  .workshop-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.control-group {
  margin-bottom: 1.25rem;
}

.control-label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: var(--font-weight-bold);
  color: var(--brand-green);
  margin-bottom: 0.65rem;
}

.jam-picker,
.topping-picker {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.jam-btn,
.topping-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-pill);
  background-color: var(--brand-cream);
  border: 2px solid var(--brand-cream-dark);
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--brand-text-dark);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.jam-btn:hover,
.topping-btn:hover {
  transform: translateY(-2px);
  border-color: var(--brand-green-light);
}

.jam-btn--active {
  background-color: #FFFFFF;
  border-color: var(--jam-color);
  color: var(--brand-green);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.topping-btn--active {
  background-color: var(--brand-green);
  color: #FFFFFF;
  border-color: var(--brand-green);
}

.btn-celebrate {
  width: 100%;
  margin-top: 1rem;
  padding: 0.85rem;
  font-size: 1.05rem;
}

/* LIENZO DE LA TOSTADA */
.toast-canvas-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.interactive-toast {
  position: relative;
  width: 240px;
  height: 240px;
  transition: transform var(--transition-normal);
}

.interactive-toast--celebrate {
  animation: bounce-sm 0.6s infinite ease-in-out;
}

.bread-crust {
  width: 100%;
  height: 100%;
  background-color: #D97706;
  border-radius: 36px 36px 24px 24px;
  padding: 12px;
  box-shadow: 0 16px 30px rgba(217, 119, 6, 0.3);
}

.bread-crumb {
  width: 100%;
  height: 100%;
  border-radius: 28px 28px 18px 18px;
  border: 4px dashed;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-normal), border-color var(--transition-normal);
}

.toast-face {
  text-align: center;
  z-index: 2;
}

.toast-eyes {
  font-size: 2.25rem;
  line-height: 1;
}

.toast-smile {
  font-size: 1.5rem;
  line-height: 1;
  margin-top: 0.25rem;
}

.toast-toppings-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.placed-topping {
  position: absolute;
  font-size: 1.5rem;
}

.placed-topping--1 { top: 15px; left: 15px; }
.placed-topping--2 { top: 15px; right: 15px; }
.placed-topping--3 { bottom: 15px; left: 20px; }
.placed-topping--4 { bottom: 15px; right: 20px; }

.celebrate-banner {
  position: absolute;
  bottom: -20px;
  left: -20px;
  right: -20px;
  background: var(--brand-green);
  color: #FFFFFF;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--brand-yellow);
}

/* FOTO REAL */
.real-breakfast-card {
  width: 100%;
  max-width: 320px;
  background-color: var(--brand-cream);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--brand-cream-dark);
  text-align: center;
}

.real-breakfast-img {
  width: 100%;
  height: auto;
  display: block;
}

.real-breakfast-caption {
  font-size: 0.78rem;
  padding: 0.5rem;
  color: var(--brand-green);
  font-weight: bold;
}
</style>
