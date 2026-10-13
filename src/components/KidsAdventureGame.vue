<script setup>
import { ref, computed } from 'vue'

const selectedJam = ref('mango')
const selectedToppings = ref(['bananas', 'stars', 'berries'])
const isCelebrated = ref(false)

const jams = [
  { 
    id: 'guayaba', 
    name: 'Guayaba', 
    badge: 'Dulce Tropical',
    mascotName: 'Gia', 
    icon: '🍓', 
    color: '#E63956',
    activeBg: 'linear-gradient(135deg, #FF1E56 0%, #D80032 60%, #900020 100%)',
    activeShadow: 'rgba(230, 57, 86, 0.45)',
    crustColor: '#B91C1C',
    // Color de mermelada SUPER FUERTE Y SATURADO
    jamGradient: 'linear-gradient(145deg, #FF1E56 0%, #E60039 45%, #9E0025 100%)',
    jamBorder: '#880020'
  },
  { 
    id: 'mango', 
    name: 'Mango & Toronjil', 
    badge: 'Dorado Solar',
    mascotName: 'Monty', 
    icon: '🥭', 
    color: '#F59E0B',
    activeBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 60%, #92400E 100%)',
    activeShadow: 'rgba(245, 158, 11, 0.45)',
    crustColor: '#92400E',
    // Color de mermelada SUPER FUERTE Y SATURADO
    jamGradient: 'linear-gradient(145deg, #FFB703 0%, #FB8500 48%, #C05600 100%)',
    jamBorder: '#9A3412'
  },
  { 
    id: 'mandarina', 
    name: 'Mandarina', 
    badge: 'Cítrico Chispa',
    mascotName: 'Max', 
    icon: '🍊', 
    color: '#EA580C',
    activeBg: 'linear-gradient(135deg, #EA580C 0%, #C2410C 60%, #7C2D12 100%)',
    activeShadow: 'rgba(234, 88, 12, 0.45)',
    crustColor: '#7C2D12',
    // Color de mermelada SUPER FUERTE Y SATURADO
    jamGradient: 'linear-gradient(145deg, #FF5400 0%, #E63900 48%, #9D0208 100%)',
    jamBorder: '#781504'
  }
]

const availableToppings = [
  { id: 'bananas', name: 'Bananitas', icon: '🍌', count: 6 },
  { id: 'berries', name: 'Arándanos', icon: '🫐', count: 8 },
  { id: 'stars', name: 'Estrellas Kiwi', icon: '⭐', count: 6 },
  { id: 'sparkles', name: 'Chispitas', icon: '✨', count: 10 }
]

const activeJamObj = computed(() => {
  return jams.find(j => j.id === selectedJam.value) || jams[0]
})

const toggleTopping = (id) => {
  if (selectedToppings.value.includes(id)) {
    selectedToppings.value = selectedToppings.value.filter(t => t !== id)
  } else {
    selectedToppings.value.push(id)
  }
}

const resetToppings = () => {
  selectedToppings.value = []
}

const celebrateToast = () => {
  isCelebrated.value = true
  setTimeout(() => {
    isCelebrated.value = false
  }, 4500)
}

const mascotAdvice = computed(() => {
  const jam = activeJamObj.value
  const count = selectedToppings.value.length
  if (count === 0) {
    return `¡Mermelada de ${jam.name} untada! Ahora añade varios toppings para que tu tostada quede llena de vida.`
  } else if (count >= 3) {
    return `¡Increíble banquete! ${jam.mascotName} dice: ¡Esta tostada súper decorada tiene todo el sabor y nutrición de FrutiAventura!`
  } else {
    return `${jam.mascotName} dice: ¡Qué combinación tan rica! Frutas frescas desordenadas para un desayuno inolvidable.`
  }
})
</script>

<template>
  <section id="aventura-ninos" class="section kids-section">
    <div class="container">
      <!-- ENCABEZADO DE LA SECCIÓN -->
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

      <!-- TALLER INTERACTIVO: DISEÑO TEMÁTICO DE COCINA INFANTIL SIN ESPACIO EN BLANCO -->
      <div class="toast-workshop-card">
        <div class="workshop-header">
          <div class="workshop-badge-row">
            <span class="workshop-tag">👨‍🍳 Taller de Cocina Infantil</span>
            <span class="workshop-toppings-count">
              🍓 {{ activeJamObj.name }} + {{ selectedToppings.length }} Topping{{ selectedToppings.length === 1 ? '' : 's' }}
            </span>
          </div>
          <h3>¡Arma tu Tostada Sonriente FrutiAventura!</h3>
          <p>Unta una capa generosa de mermelada frutal, esparce toppings abundantes y mira cómo cobra vida en el plato.</p>
        </div>

        <div class="workshop-grid">
          <!-- COLUMNA 1: ESTACIÓN DEL CHEF (CON FOCUS CLARO EN SELECCIONADOS) -->
          <div class="chef-prep-station">
            <!-- PASO 1: MERMELADA BASE -->
            <div class="control-group">
              <div class="control-label-row">
                <span class="step-badge">1</span>
                <div>
                  <strong class="control-label">Elige la mermelada (Color intenso):</strong>
                  <span class="control-hint">Haz clic para cambiar el color de la tostada</span>
                </div>
              </div>
              <div class="jam-grid">
                <button
                  v-for="jam in jams"
                  :key="jam.id"
                  type="button"
                  class="jam-card-btn"
                  :class="{ 'jam-card-btn--selected': selectedJam === jam.id }"
                  :style="{ 
                    '--jam-theme': jam.color,
                    '--jam-bg': jam.activeBg
                  }"
                  @click="selectedJam = jam.id"
                >
                  <span class="jam-card-icon">{{ jam.icon }}</span>
                  <div class="jam-card-info">
                    <strong>{{ jam.name }}</strong>
                    <small>{{ jam.badge }}</small>
                  </div>
                  <span v-if="selectedJam === jam.id" class="jam-selected-tag">
                    ✓ Untada
                  </span>
                  <span v-else class="jam-unselected-tag">
                    Elegir
                  </span>
                </button>
              </div>
            </div>

            <!-- PASO 2: TOPPINGS ABUNDANTES -->
            <div class="control-group">
              <div class="control-label-row">
                <span class="step-badge">2</span>
                <div>
                  <strong class="control-label">Añade toppings abundantes y desordenados:</strong>
                  <span class="control-hint">Activa o desactiva para esparcirlos por toda la tostada</span>
                </div>
              </div>
              <div class="toppings-grid">
                <button
                  v-for="top in availableToppings"
                  :key="top.id"
                  type="button"
                  class="topping-card-btn"
                  :class="{ 'topping-card-btn--selected': selectedToppings.includes(top.id) }"
                  @click="toggleTopping(top.id)"
                >
                  <span class="topping-icon">{{ top.icon }}</span>
                  <span class="topping-name">{{ top.name }}</span>
                  <span class="topping-badge">
                    {{ selectedToppings.includes(top.id) ? '✓' : '+' }}
                  </span>
                </button>
              </div>
            </div>

            <!-- CONSEJO EN VIVO DE LA MASCOTA ACTIVA -->
            <div class="mascot-live-balloon">
              <div class="mascot-live-avatar anim-bounce">
                <span>{{ activeJamObj.icon }}</span>
              </div>
              <div class="mascot-live-speech">
                <strong>Consejo de {{ activeJamObj.mascotName }}:</strong>
                <p>“{{ mascotAdvice }}”</p>
              </div>
            </div>

            <!-- BOTONES DE ACCIÓN -->
            <div class="workshop-actions">
              <button 
                type="button" 
                class="btn btn-celebrate anim-wiggle"
                @click="celebrateToast"
              >
                <span>🎉 ¡Celebrar y Servir Desayuno!</span>
              </button>

              <button 
                v-if="selectedToppings.length > 0"
                type="button" 
                class="btn-reset-toppings"
                @click="resetToppings"
              >
                🔄 Quitar todos los toppings
              </button>
            </div>
          </div>

          <!-- COLUMNA 2: MANTEL DE PICNIC Y PLATO CERÁMICO -->
          <div class="chef-plate-station">
            <div class="picnic-mat">
              <!-- PLATO CERÁMICO CON SOMBRA 3D -->
              <div class="ceramic-plate" :class="{ 'ceramic-plate--celebrate': isCelebrated }">
                <!-- Lluvia de confeti festivo -->
                <div v-if="isCelebrated" class="confetti-shower" aria-hidden="true">
                  <span class="confetti-dot c1">🍓</span>
                  <span class="confetti-dot c2">🥭</span>
                  <span class="confetti-dot c3">🍊</span>
                  <span class="confetti-dot c4">✨</span>
                  <span class="confetti-dot c5">🌟</span>
                  <span class="confetti-dot c6">🍌</span>
                  <span class="confetti-dot c7">🎉</span>
                </div>

                <!-- TOSTADA CON CORTEZA Y MERMELADA DE COLOR FUERTE -->
                <div class="kawaii-toast" :class="{ 'kawaii-toast--bounce': isCelebrated }">
                  <!-- Corteza horneada -->
                  <div class="toast-crust" :style="{ borderColor: activeJamObj.crustColor }">
                    <div class="toast-crumb">
                      <!-- MERMELADA DE COLOR INTENSO Y SATURADO -->
                      <div 
                        class="jam-spread"
                        :style="{ 
                          background: activeJamObj.jamGradient,
                          borderColor: activeJamObj.jamBorder
                        }"
                      >
                        <!-- Brillo y reflejo de jalea fresca -->
                        <div class="jam-shine" aria-hidden="true"></div>

                        <!-- ROSTRO KAWAII CENTRADO -->
                        <div class="kawaii-face" :class="{ 'kawaii-face--cheer': isCelebrated }">
                          <div class="kawaii-eyes">
                            <div class="kawaii-eye eye-left">
                              <span v-if="!isCelebrated" class="eye-pupil"><span class="eye-sparkle"></span></span>
                              <span v-else class="eye-happy">◠</span>
                            </div>
                            <div class="kawaii-eye eye-right">
                              <span v-if="!isCelebrated" class="eye-pupil"><span class="eye-sparkle"></span></span>
                              <span v-else class="eye-happy">◠</span>
                            </div>
                          </div>

                          <div class="kawaii-cheeks" aria-hidden="true">
                            <span class="blush blush-left"></span>
                            <span class="blush blush-right"></span>
                          </div>

                          <div class="kawaii-mouth" :class="{ 'mouth-open': isCelebrated || selectedToppings.length >= 2 }">
                            <span class="mouth-shape"></span>
                            <span class="mouth-tongue"></span>
                          </div>
                        </div>

                        <!-- TOPPINGS ABUNDANTES, DESORDENADOS Y DISTRIBUIDOS POR TODA LA TOSTADA -->
                        <div class="toppings-scatter-layer" aria-label="Toppings decorativos">
                          <!-- 6 BANANITAS ESPARCIDAS CON ROTACIÓN REALISTA -->
                          <template v-if="selectedToppings.includes('bananas')">
                            <span class="scatter-item banana-1 anim-bounce">🍌</span>
                            <span class="scatter-item banana-2 anim-wiggle">🍌</span>
                            <span class="scatter-item banana-3">🍌</span>
                            <span class="scatter-item banana-4 anim-bounce">🍌</span>
                            <span class="scatter-item banana-5">🍌</span>
                            <span class="scatter-item banana-6 anim-wiggle">🍌</span>
                          </template>

                          <!-- 8 ARÁNDANOS ESPARCIDOS POR TODO EL PAN -->
                          <template v-if="selectedToppings.includes('berries')">
                            <span class="scatter-item berry-1">🫐</span>
                            <span class="scatter-item berry-2 anim-float">🫐</span>
                            <span class="scatter-item berry-3">🫐</span>
                            <span class="scatter-item berry-4">🫐</span>
                            <span class="scatter-item berry-5 anim-float">🫐</span>
                            <span class="scatter-item berry-6">🫐</span>
                            <span class="scatter-item berry-7">🫐</span>
                            <span class="scatter-item berry-8 anim-float">🫐</span>
                          </template>

                          <!-- 6 ESTRELLAS KIWI SALPICADAS -->
                          <template v-if="selectedToppings.includes('stars')">
                            <span class="scatter-item star-1 anim-float">⭐</span>
                            <span class="scatter-item star-2 anim-bounce">⭐</span>
                            <span class="scatter-item star-3">⭐</span>
                            <span class="scatter-item star-4 anim-float">⭐</span>
                            <span class="scatter-item star-5">⭐</span>
                            <span class="scatter-item star-6 anim-bounce">⭐</span>
                          </template>

                          <!-- 10 CHISPITAS MÁGICAS SALPICADAS -->
                          <template v-if="selectedToppings.includes('sparkles')">
                            <span class="scatter-item sparkle-1">✨</span>
                            <span class="scatter-item sparkle-2 anim-bounce">✨</span>
                            <span class="scatter-item sparkle-3">✨</span>
                            <span class="scatter-item sparkle-4 anim-float">✨</span>
                            <span class="scatter-item sparkle-5">✨</span>
                            <span class="scatter-item sparkle-6">✨</span>
                            <span class="scatter-item sparkle-7 anim-bounce">✨</span>
                            <span class="scatter-item sparkle-8">✨</span>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Cinta de felicitación al celebrar -->
                  <div v-if="isCelebrated" class="celebrate-ribbon anim-bounce">
                    <span>🏆 ¡Chef Estrella FrutiAventura! ❤️</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- TIRA COMPACTA: RESULTADO REAL EN LA MESA -->
            <div class="real-breakfast-compact-strip">
              <img 
                src="/assets/kids-breakfast-fun.jpg" 
                alt="Desayuno infantil real preparado con mermelada FrutiAventura"
                class="compact-strip-img"
                width="96"
                height="72"
                loading="lazy"
              />
              <div class="compact-strip-text">
                <span class="compact-strip-badge">📸 En la Vida Real</span>
                <strong>¡Así de alegre y fácil luce en tu mesa!</strong>
                <small>Frutas frescas + mermelada 100% natural ecuatoriana.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Onda orgánica hacia la siguiente sección (Beneficios) -->
    <div class="wave-divider kids-wave-bottom" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#F59E0B"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.kids-section {
  background: linear-gradient(165deg, #FFF5EB 0%, #FFE8D1 50%, #FED7AA 100%);
  position: relative;
  padding-top: clamp(2.5rem, 5vw, 4.5rem);
  padding-bottom: 0;
  overflow: hidden;
}

.kids-wave-bottom {
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0;
}

.kids-wave-bottom svg {
  display: block;
  width: 100%;
  height: clamp(40px, 6vw, 75px);
}

/* ==========================================================================
   MOSTRADOR DE MASCOTAS
   ========================================================================== */
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
  box-shadow: 0 20px 48px rgba(245, 158, 11, 0.16);
  border: none;
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
  background: rgba(19, 62, 43, 0.88);
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
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  padding: 1.25rem 1.4rem;
  border-radius: var(--radius-lg);
  border: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.speech-card:hover {
  transform: translateX(6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.speech-card--guayaba {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 240, 242, 0.92) 100%);
}

.speech-card--mango {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 235, 0.92) 100%);
}

.speech-card--mandarina {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 247, 237, 0.92) 100%);
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

/* ==========================================================================
   TALLER TOSTADA (REDISEÑO TEMÁTICO DE COCINA - COMPACTO Y 100% RESPONSIVO)
   ========================================================================== */
.toast-workshop-card {
  background: linear-gradient(155deg, #FFFDF7 0%, #FFF8EE 45%, #FEF0DC 100%);
  border-radius: clamp(18px, 4vw, 32px);
  padding: clamp(0.85rem, 2.8vw, 2.25rem);
  box-shadow: 0 16px 40px rgba(217, 119, 6, 0.1);
  border: 2px solid #FCD34D;
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.workshop-header {
  text-align: center;
  margin-bottom: clamp(0.9rem, 2.2vw, 1.6rem);
}

.workshop-badge-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
}

.workshop-tag {
  display: inline-block;
  background-color: var(--brand-yellow);
  color: var(--brand-green);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 800;
  padding: 0.25rem 0.8rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.workshop-toppings-count {
  display: inline-block;
  background-color: var(--brand-green);
  color: #FFFFFF;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: 800;
  padding: 0.25rem 0.8rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.workshop-header h3 {
  font-size: clamp(1.25rem, 3vw, 1.95rem);
  color: var(--brand-green);
  margin-bottom: 0.3rem;
  line-height: 1.2;
}

.workshop-header p {
  color: var(--brand-text-muted);
  font-size: clamp(0.84rem, 2vw, 0.95rem);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.35;
}

.workshop-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2.8vw, 2rem);
  align-items: start;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;
}

@media (min-width: 920px) {
  .workshop-grid {
    grid-template-columns: 1.15fr 0.95fr;
  }
}

/* ==========================================================================
   COLUMNA 1: ESTACIÓN DE PREPARACIÓN DEL CHEF (COMPACTA Y SIN OUTLINES)
   ========================================================================== */
.chef-prep-station {
  background: #FFFFFF;
  border-radius: clamp(14px, 3vw, 22px);
  padding: clamp(0.75rem, 2.2vw, 1.5rem);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border: 1.5px solid rgba(251, 176, 36, 0.35);
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1.15rem);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
  min-width: 0;
}

.control-label-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.step-badge {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--brand-green);
  color: #FFFFFF;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.control-label {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(0.82rem, 2.2vw, 0.92rem);
  font-weight: var(--font-weight-bold);
  color: var(--brand-green);
  line-height: 1.2;
}

.control-hint {
  display: block;
  font-size: clamp(0.65rem, 1.8vw, 0.72rem);
  color: var(--brand-text-muted);
}

/* SELECTOR DE MERMELADA - COMPACTO, BORDE SIMPLE DE 2px, CERO OUTLINE */
.jam-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.25rem, 1.2vw, 0.5rem);
  width: 100%;
  box-sizing: border-box;
}

.jam-card-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(0.45rem, 1.2vw, 0.65rem) 0.2rem;
  border-radius: var(--radius-md);
  background-color: #FAF5EA;
  border: 1.5px solid #E5D5BA;
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}

.jam-card-btn:hover {
  border-color: var(--jam-theme);
  background-color: #FFFFFF;
}

/* FOCUS SELECCIONADO: BORDE SIMPLE DE 2px, FONDO CON COLOR DEL SABOR (SIN OUTLINE NI SOBREBORDES) */
.jam-card-btn--selected {
  background: var(--jam-bg) !important;
  border: 2px solid var(--jam-theme) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
  transform: translateY(-2px);
}

.jam-card-btn--selected .jam-card-info strong,
.jam-card-btn--selected .jam-card-info small {
  color: #FFFFFF !important;
}

.jam-card-icon {
  font-size: clamp(1.15rem, 3vw, 1.45rem);
  line-height: 1;
  margin-bottom: 0.2rem;
}

.jam-card-info {
  min-width: 0;
  width: 100%;
}

.jam-card-info strong {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(0.7rem, 1.8vw, 0.8rem);
  color: var(--brand-green);
  line-height: 1.15;
  white-space: normal;
  word-break: break-word;
}

.jam-card-info small {
  display: block;
  font-size: clamp(0.56rem, 1.4vw, 0.65rem);
  color: var(--brand-text-muted);
  line-height: 1.15;
  margin-top: 0.1rem;
  white-space: normal;
}

.jam-selected-tag {
  display: inline-block;
  font-size: 0.58rem;
  font-weight: 800;
  color: #133E2B;
  background-color: #FFD166;
  padding: 0.08rem 0.4rem;
  border-radius: var(--radius-pill);
  margin-top: 0.25rem;
  line-height: 1.2;
}

.jam-unselected-tag {
  display: inline-block;
  font-size: 0.56rem;
  font-weight: 700;
  color: var(--brand-text-muted);
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.08rem 0.35rem;
  border-radius: var(--radius-pill);
  margin-top: 0.25rem;
  line-height: 1.2;
}

/* SELECTOR DE TOPPINGS - COMPACTO, BORDE SIMPLE DE 2px, CERO OUTLINE */
.toppings-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.25rem, 1.2vw, 0.45rem);
  width: 100%;
  box-sizing: border-box;
}

.topping-card-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  padding: clamp(0.35rem, 1vw, 0.48rem) clamp(0.45rem, 1.5vw, 0.65rem);
  border-radius: var(--radius-pill);
  background-color: #FAF5EA;
  border: 1.5px solid #E2D9C8;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}

.topping-card-btn:hover {
  border-color: var(--brand-green);
  background-color: #FFFFFF;
}

/* FOCUS SELECCIONADO EN TOPPING: FONDO VERDE BOSQUE, BORDE SIMPLE DE 2px (SIN OUTLINE NI SOBREBORDES) */
.topping-card-btn--selected {
  background-color: var(--brand-green) !important;
  color: #FFFFFF !important;
  border: 2px solid var(--brand-green) !important;
  box-shadow: 0 3px 10px rgba(19, 62, 43, 0.18) !important;
  transform: translateY(-1px);
}

.topping-icon {
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  line-height: 1;
  flex-shrink: 0;
}

.topping-name {
  flex: 1;
  text-align: left;
  font-size: clamp(0.74rem, 1.9vw, 0.82rem);
  font-weight: bold;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.topping-badge {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0.06);
  color: var(--brand-text-muted);
  flex-shrink: 0;
}

.topping-card-btn--selected .topping-badge {
  background-color: #FFD166;
  color: #133E2B;
}

/* GLOBO DE LA MASCOTA - COMPACTO */
.mascot-live-balloon {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
  border: 1.5px solid #FCD34D;
  border-radius: var(--radius-md);
  padding: clamp(0.55rem, 1.6vw, 0.75rem) clamp(0.7rem, 2vw, 0.95rem);
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
}

.mascot-live-avatar {
  font-size: clamp(1.4rem, 3.2vw, 1.8rem);
  line-height: 1;
  flex-shrink: 0;
}

.mascot-live-speech {
  min-width: 0;
  flex: 1;
}

.mascot-live-speech strong {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(0.76rem, 1.9vw, 0.84rem);
  color: var(--brand-green);
  margin-bottom: 0.1rem;
}

.mascot-live-speech p {
  font-size: clamp(0.72rem, 1.7vw, 0.78rem);
  color: var(--brand-text-dark);
  line-height: 1.3;
  margin: 0;
  font-style: italic;
  word-break: break-word;
}

/* ACCIONES */
.workshop-actions {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  box-sizing: border-box;
}

.btn-celebrate {
  width: 100%;
  padding: clamp(0.65rem, 2vw, 0.85rem) 0.75rem;
  font-size: clamp(0.85rem, 2.5vw, 0.98rem);
  background: linear-gradient(135deg, var(--brand-green) 0%, #1c523a 100%);
  color: #FFFFFF;
  border: none;
  box-shadow: 0 6px 18px rgba(19, 62, 43, 0.22);
  border-radius: var(--radius-pill);
  box-sizing: border-box;
  white-space: normal;
  text-align: center;
  line-height: 1.25;
}

.btn-reset-toppings {
  background: transparent;
  border: none;
  color: var(--brand-text-muted);
  font-size: 0.76rem;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  padding: 0.2rem;
}

.btn-reset-toppings:hover {
  color: var(--brand-green);
}

/* ==========================================================================
   COLUMNA 2: EL PLATO CERÁMICO Y MANTEL DE PICNIC (FLUIDO Y RESPONSIVO)
   ========================================================================== */
.chef-plate-station {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.picnic-mat {
  width: 100%;
  max-width: 360px;
  background: radial-gradient(#FDE68A 18%, transparent 19%) 0 0 / 22px 22px, #FFFBEB;
  border-radius: clamp(16px, 3vw, 24px);
  padding: clamp(0.6rem, 2.5vw, 1.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed #FCD34D;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
}

/* PLATO CERÁMICO FLUIDO CON PROFUNDIDAD */
.ceramic-plate {
  width: min(260px, 72vw);
  height: min(260px, 72vw);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, #FFFFFF 66%, #F1F5F9 86%, #CBD5E1 100%);
  border: 6px solid #FFFFFF;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1), inset 0 3px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.ceramic-plate--celebrate {
  animation: bounce-sm 0.8s infinite ease-in-out;
}

/* CONFETTI FLOTANTE */
.confetti-shower {
  position: absolute;
  inset: -25px;
  pointer-events: none;
  z-index: 20;
}

.confetti-dot {
  position: absolute;
  font-size: 1.5rem;
  animation: float-gentle 1.8s infinite alternate ease-in-out;
}

.c1 { top: -5px; left: 10px; }
.c2 { top: -15px; right: 25px; animation-delay: 0.3s; }
.c3 { bottom: 15px; left: 5px; animation-delay: 0.6s; }
.c4 { bottom: -5px; right: 20px; animation-delay: 0.9s; }
.c5 { top: 40%; left: -18px; animation-delay: 0.4s; }
.c6 { top: 35%; right: -18px; animation-delay: 0.7s; }
.c7 { top: -20px; left: 45%; animation-delay: 0.2s; }

/* LA TOSTADA REALISTA Y FLUIDA */
.kawaii-toast {
  position: relative;
  width: min(180px, 50vw);
  height: min(180px, 50vw);
  transition: transform var(--transition-normal);
}

.kawaii-toast--bounce {
  transform: scale(1.05);
}

.toast-crust {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #D97706 0%, #B45309 60%, #78350F 100%);
  border-radius: clamp(26px, 6vw, 40px) clamp(26px, 6vw, 40px) clamp(18px, 4vw, 28px) clamp(18px, 4vw, 28px);
  padding: clamp(6px, 1.5vw, 9px);
  box-shadow: 0 12px 24px rgba(180, 83, 9, 0.28);
  position: relative;
  transition: border-color var(--transition-normal);
  box-sizing: border-box;
}

.toast-crumb {
  width: 100%;
  height: 100%;
  background: #FFF7ED;
  border-radius: clamp(20px, 5vw, 32px) clamp(20px, 5vw, 32px) clamp(14px, 3.5vw, 20px) clamp(14px, 3.5vw, 20px);
  padding: clamp(4px, 1vw, 6px);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

/* MERMELADA CON COLOR SUPER FUERTE Y SATURADO */
.jam-spread {
  width: 100%;
  height: 100%;
  border-radius: clamp(16px, 4vw, 26px) clamp(16px, 4vw, 26px) clamp(12px, 3vw, 16px) clamp(12px, 3vw, 16px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 2px 8px rgba(255, 255, 255, 0.35);
  box-sizing: border-box;
}

/* REFLEJO BRILLANTE DE JALEA */
.jam-shine {
  position: absolute;
  top: 8px;
  left: 14px;
  right: 14px;
  height: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 20px 20px 10px 10px;
  pointer-events: none;
}

/* ROSTRO KAWAII CENTRADO */
.kawaii-face {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.kawaii-eyes {
  display: flex;
  gap: clamp(26px, 7vw, 36px);
  align-items: center;
  margin-bottom: 2px;
}

.kawaii-eye {
  width: 18px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eye-pupil {
  width: 16px;
  height: 20px;
  background-color: #1A130E;
  border-radius: 50%;
  display: block;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.eye-sparkle {
  width: 6px;
  height: 6px;
  background-color: #FFFFFF;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  right: 3px;
}

.eye-happy {
  font-size: 1.75rem;
  font-weight: 900;
  color: #1A130E;
  line-height: 1;
}

.kawaii-cheeks {
  display: flex;
  justify-content: space-between;
  width: clamp(68px, 18vw, 84px);
  position: absolute;
  top: 12px;
  pointer-events: none;
}

.blush {
  width: 18px;
  height: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  filter: blur(1px);
}

.kawaii-mouth {
  position: relative;
  margin-top: 2px;
}

.kawaii-mouth .mouth-shape {
  width: 18px;
  height: 10px;
  border-bottom: 4px solid #1A130E;
  border-radius: 0 0 14px 14px;
  display: block;
  transition: all 200ms ease;
}

.kawaii-mouth.mouth-open .mouth-shape {
  width: 24px;
  height: 15px;
  background-color: #881337;
  border-bottom: none;
  border-radius: 0 0 16px 16px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.kawaii-mouth.mouth-open .mouth-tongue {
  width: 14px;
  height: 9px;
  background-color: #FDA4AF;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 5px;
  display: block;
}

/* ==========================================================================
   TOPPINGS ABUNDANTES, DESORDENADOS Y REALISTAS (DISTRIBUIDOS POR TODO EL PAN)
   ========================================================================== */
.toppings-scatter-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.scatter-item {
  position: absolute;
  font-size: clamp(1.15rem, 3.2vw, 1.4rem);
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4));
  transition: all 250ms ease;
}

/* 6 BANANITAS DESORDENADAS */
.banana-1 { top: 12px; left: 18px; transform: rotate(-24deg) scale(1.15); }
.banana-2 { top: 8px; left: 88px; transform: rotate(14deg) scale(0.95); }
.banana-3 { top: 14px; right: 18px; transform: rotate(35deg) scale(1.1); }
.banana-4 { bottom: 18px; left: 16px; transform: rotate(18deg) scale(1.05); }
.banana-5 { bottom: 8px; left: 86px; transform: rotate(-12deg) scale(1.1); }
.banana-6 { bottom: 16px; right: 20px; transform: rotate(-30deg) scale(1); }

/* 8 ARÁNDANOS ESPARCIDOS */
.berry-1 { top: 28px; left: 56px; transform: rotate(12deg) scale(1.05); }
.berry-2 { top: 30px; right: 54px; transform: rotate(-15deg) scale(0.95); }
.berry-3 { top: 68px; left: 10px; transform: rotate(20deg) scale(1.1); }
.berry-4 { top: 72px; right: 10px; transform: rotate(-22deg) scale(1); }
.berry-5 { bottom: 38px; left: 14px; transform: rotate(8deg) scale(0.9); }
.berry-6 { bottom: 42px; right: 14px; transform: rotate(-18deg) scale(1.05); }
.berry-7 { bottom: 24px; left: 54px; transform: rotate(16deg) scale(1); }
.berry-8 { bottom: 22px; right: 58px; transform: rotate(-8deg) scale(0.95); }

/* 6 ESTRELLAS KIWI SALPICADAS */
.star-1 { top: 14px; left: 52px; transform: rotate(18deg) scale(1.2); }
.star-2 { top: 18px; right: 28px; transform: rotate(-32deg) scale(1); }
.star-3 { top: 78px; left: 12px; transform: rotate(38deg) scale(1.1); }
.star-4 { top: 82px; right: 12px; transform: rotate(-15deg) scale(1.05); }
.star-5 { bottom: 16px; left: 38px; transform: rotate(25deg) scale(0.95); }
.star-6 { bottom: 20px; right: 42px; transform: rotate(-20deg) scale(1.15); }

/* 10 CHISPITAS MÁGICAS SALPICADAS */
.sparkle-1 { top: 14px; left: 45px; font-size: 1.15rem; transform: rotate(15deg); }
.sparkle-2 { top: 22px; right: 38px; font-size: 1.35rem; transform: rotate(-25deg); }
.sparkle-3 { top: 60px; left: 16px; font-size: 1.25rem; transform: rotate(30deg); }
.sparkle-4 { top: 65px; right: 18px; font-size: 1.2rem; transform: rotate(-18deg); }
.sparkle-5 { bottom: 40px; left: 24px; font-size: 1.1rem; transform: rotate(12deg); }
.sparkle-6 { bottom: 38px; right: 26px; font-size: 1.3rem; transform: rotate(-30deg); }
.sparkle-7 { bottom: 14px; left: 70px; font-size: 1.2rem; transform: rotate(20deg); }
.sparkle-8 { bottom: 16px; right: 75px; font-size: 1.15rem; transform: rotate(-14deg); }

/* CINTA DE FELICITACIÓN */
.celebrate-ribbon {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #133E2B;
  color: #FFD166;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: clamp(0.72rem, 2vw, 0.82rem);
  font-weight: 800;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  border: 1.5px solid #FFD166;
  z-index: 10;
}

/* TIRA COMPACTA: RESULTADO REAL EN LA MESA */
.real-breakfast-compact-strip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 340px;
  background-color: #FFFFFF;
  border-radius: var(--radius-md);
  padding: 0.5rem 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1.5px solid rgba(19, 62, 43, 0.12);
  box-sizing: border-box;
}

.compact-strip-img {
  width: 76px;
  height: 58px;
  border-radius: var(--radius-md);
  object-fit: cover;
  flex-shrink: 0;
}

.compact-strip-text {
  display: flex;
  flex-direction: column;
}

.compact-strip-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #B45309;
  background-color: #FEF3C7;
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.2rem;
  align-self: flex-start;
}

.compact-strip-text strong {
  font-size: 0.78rem;
  color: var(--brand-green);
  line-height: 1.2;
}

.compact-strip-text small {
  font-size: 0.68rem;
  color: var(--brand-text-muted);
  line-height: 1.2;
}
</style>
