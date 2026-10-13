<script setup>
import { ref } from 'vue'

const activeSuperFruit = ref('guayaba')

const superFruits = [
  {
    id: 'guayaba',
    name: 'Guayaba',
    heroName: 'Gia la Exploradora',
    power: '¡Súper Defensas & Vitamina C!',
    icon: '🍓',
    color: 'var(--flavor-guayaba-primary)',
    bg: 'var(--flavor-guayaba-bg)',
    border: 'var(--flavor-guayaba-border)',
    badge: '4x más Vitamina C que la naranja',
    desc: 'La guayaba natural es una fruta tropical increíble llena de antioxidantes y fibra natural que ayuda al sistema digestivo y fortalece las defensas de los pequeños exploradores.'
  },
  {
    id: 'mango',
    name: 'Mango & Toronjil',
    heroName: 'Monty el Aventurero',
    power: '¡Súper Visión & Energía Solar!',
    icon: '🥭',
    color: 'var(--flavor-mango-primary)',
    bg: 'var(--flavor-mango-bg)',
    border: 'var(--flavor-mango-border)',
    badge: 'Rico en Vitamina A y Toronjil Calmante',
    desc: 'El mango maduro aporta betacarotenos esenciales para la vista y la piel, mientras que el toque de toronjil natural proporciona bienestar estomacal después de cada merienda.'
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    heroName: 'Max el Chispeante',
    power: '¡Explosión de Energía & Vitalidad!',
    icon: '🍊',
    color: 'var(--flavor-mandarina-primary)',
    bg: 'var(--flavor-mandarina-bg)',
    border: 'var(--flavor-mandarina-border)',
    badge: 'Hidratación y Vitalidad Diaria',
    desc: 'Cargada de frescura cítrica y flavonoides naturales. Ayuda a despertar con ánimo en las mañanas de colegio y recarga energías tras el recreo.'
  }
]
</script>

<template>
  <section id="nutricion" class="section nutrition-section">
    <!-- Divisor decorativo ondulado superior -->
    <div class="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#FFFDF9"></path>
      </svg>
    </div>

    <div class="container nutrition-container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--green anim-wiggle">
          🥗 Semáforo & Nutrición Infantil
        </span>
        <h2 class="section-title">¡Energía Natural para Pequeños Exploradores!</h2>
        <p class="section-subtitle">
          En FrutiAventura cuidamos lo que comen tus hijos. Solo fruta real cosechada en Ecuador, sin conservantes químicos, sin grasa y sin sal.
        </p>
      </div>

      <!-- BANNER ILUSTRADO DE NUTRICIÓN CON ARTE -->
      <div class="nutrition-hero-card">
        <div class="nutrition-hero-img-wrap">
          <img 
            src="/assets/fruit-nutrition-banner.jpg" 
            alt="Personajes de frutas felices de FrutiAventura sosteniendo el cartel 100% natural en el campo"
            class="nutrition-hero-img"
            width="1200"
            height="675"
            loading="lazy"
          />
        </div>
        <div class="nutrition-hero-banner">
          <div class="banner-pill">
            <span>🌟 100% Fruta Natural Ecuatoriana</span>
          </div>
          <h3>El Semáforo Nutricional Oficial de la Cajita</h3>
          <p>
            Certificado transparente para que los padres elijan con total confianza y tranquilidad.
          </p>

          <!-- SEMÁFORO INTERACTIVO DESTACADO -->
          <div class="semaforo-cards-trio">
            <div class="semaforo-card semaforo-card--yellow">
              <div class="semaforo-circle semaforo-circle--yellow">
                <span>🟡</span>
              </div>
              <div class="semaforo-info">
                <strong>AZÚCAR: MEDIO</strong>
                <p>Nivel balanceado y justo para dar energía sana sin excesos artificiales.</p>
              </div>
            </div>

            <div class="semaforo-card semaforo-card--green">
              <div class="semaforo-circle semaforo-circle--green">
                <span>🟢</span>
              </div>
              <div class="semaforo-info">
                <strong>GRASAS: NO CONTIENE</strong>
                <p>0% grasas trans ni saturadas. Pura pulpa de fruta ligera y fresca.</p>
              </div>
            </div>

            <div class="semaforo-card semaforo-card--green">
              <div class="semaforo-circle semaforo-circle--green">
                <span>🟢</span>
              </div>
              <div class="semaforo-info">
                <strong>SAL: NO CONTIENE</strong>
                <p>0% sodio añadido. Cero químicos o conservantes artificiales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SUPERPODERES DE CADA FRUTA (INTERACTIVO) -->
      <div class="superpowers-wrap">
        <div class="superpowers-header">
          <span class="superpowers-tag">⚡ Conoce los Súper Poderes</span>
          <h3>¿Qué poder te da cada fruta de FrutiAventura?</h3>
          <p>Toca a cada personaje para descubrir sus vitaminas secretas:</p>
        </div>

        <div class="superpowers-tabs" role="tablist" aria-label="Elegir fruta saludable">
          <button
            v-for="fruit in superFruits"
            :key="fruit.id"
            role="tab"
            :aria-selected="activeSuperFruit === fruit.id"
            class="superpower-btn"
            :class="{ 'superpower-btn--active': activeSuperFruit === fruit.id }"
            :style="{ '--btn-accent': fruit.color, '--btn-bg': fruit.bg }"
            @click="activeSuperFruit = fruit.id"
          >
            <span class="superpower-btn__icon">{{ fruit.icon }}</span>
            <div class="superpower-btn__text">
              <strong>{{ fruit.name }}</strong>
              <small>{{ fruit.heroName }}</small>
            </div>
          </button>
        </div>

        <!-- DETALLE DINÁMICO DEL SÚPER PODER SELECCIONADO (DISEÑO MÓVIL PERFECCIONADO) -->
        <div 
          v-for="fruit in superFruits" 
          :key="fruit.id"
          v-show="activeSuperFruit === fruit.id"
          class="superpower-detail-card"
          :style="{ '--power-color': fruit.color, '--power-bg': fruit.bg, '--power-border': fruit.border }"
        >
          <div class="superpower-detail-top">
            <div class="superpower-icon-circle anim-bounce">
              <span>{{ fruit.icon }}</span>
            </div>
            <div class="superpower-detail-text">
              <span class="superpower-badge">✨ {{ fruit.badge }}</span>
              <h4 class="superpower-title">{{ fruit.power }}</h4>
              <p class="superpower-desc">{{ fruit.desc }}</p>
            </div>
          </div>

          <div class="superpower-checklist">
            <div class="check-item">
              <span class="check-icon-badge" aria-hidden="true">✓</span>
              <span><strong>Aprobado para loncheras escolares</strong></span>
            </div>
            <div class="check-item">
              <span class="check-icon-badge" aria-hidden="true">✓</span>
              <span><strong>Frasco hermético de 40g anti-derrames</strong></span>
            </div>
            <div class="check-item">
              <span class="check-icon-badge" aria-hidden="true">✓</span>
              <span><strong>Sin conservantes químicos ni colorantes</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nutrition-section {
  background-color: #FFFDF9;
  position: relative;
  padding-top: clamp(2rem, 5vw, 4rem);
  padding-bottom: clamp(3rem, 6vw, 6rem);
}

.nutrition-container {
  position: relative;
  z-index: 1;
}

/* BANNER ILUSTRADO CON ARTE GENERADO */
.nutrition-hero-card {
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--brand-cream-dark);
  margin-bottom: var(--space-2xl);
  transition: transform var(--transition-normal);
}

.nutrition-hero-card:hover {
  transform: translateY(-4px);
}

.nutrition-hero-img-wrap {
  width: 100%;
  max-height: 440px;
  overflow: hidden;
}

.nutrition-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.nutrition-hero-card:hover .nutrition-hero-img {
  transform: scale(1.02);
}

.nutrition-hero-banner {
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: linear-gradient(180deg, #FFFFFF 0%, #FAF5E9 100%);
  text-align: center;
}

.banner-pill {
  display: inline-block;
  background-color: var(--brand-yellow-light);
  color: var(--brand-green);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  padding: 0.35rem 1rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.75rem;
}

.nutrition-hero-banner h3 {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  margin-bottom: 0.5rem;
}

.nutrition-hero-banner p {
  color: var(--brand-text-muted);
  max-width: 650px;
  margin: 0 auto 1.75rem;
  font-size: var(--text-base);
}

/* TARJETAS DEL SEMÁFORO NUTRICIONAL */
.semaforo-cards-trio {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: left;
}

@media (min-width: 768px) {
  .semaforo-cards-trio {
    grid-template-columns: repeat(3, 1fr);
  }
}

.semaforo-card {
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

.semaforo-card:hover {
  transform: translateY(-3px);
}

.semaforo-card--yellow {
  border-color: #FACC15;
  background-color: #FEFCE8;
}

.semaforo-card--green {
  border-color: #86EFAC;
  background-color: #F0FDF4;
}

.semaforo-circle {
  font-size: 1.75rem;
  line-height: 1;
}

.semaforo-info strong {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-green);
  margin-bottom: 0.25rem;
}

.semaforo-info p {
  font-size: 0.82rem;
  color: var(--brand-text-muted);
  line-height: 1.4;
  margin: 0;
}

/* SÚPER PODERES FRUTALES */
.superpowers-wrap {
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--brand-cream-dark);
}

.superpowers-header {
  text-align: center;
  margin-bottom: var(--space-lg);
}

.superpowers-tag {
  display: inline-block;
  background-color: var(--brand-pink-light);
  color: var(--brand-pink-badge);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.5rem;
}

.superpowers-header h3 {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  margin-bottom: 0.35rem;
}

.superpowers-header p {
  color: var(--brand-text-muted);
  font-size: var(--text-base);
}

.superpowers-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

.superpower-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-pill);
  background-color: #FFFFFF;
  border: 2px solid var(--brand-cream-dark);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.superpower-btn:hover {
  transform: translateY(-2px);
  border-color: var(--btn-accent);
}

.superpower-btn--active {
  background-color: var(--btn-bg);
  border-color: var(--btn-accent);
  box-shadow: 0 6px 20px rgba(19, 62, 43, 0.1);
}

.superpower-btn__icon {
  font-size: 1.75rem;
}

.superpower-btn__text strong {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-green);
}

.superpower-btn__text small {
  font-size: 0.75rem;
  color: var(--brand-text-muted);
}

/* DETALLE DEL SÚPER PODER - DISEÑO RESPONSIVO PERFECCIONADO */
.superpower-detail-card {
  background-color: var(--power-bg);
  border: 2.5px solid var(--power-border);
  border-radius: var(--radius-xl);
  padding: clamp(1.25rem, 4vw, 2.5rem);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
  animation: fadeIn 250ms ease-out;
}

.superpower-detail-top {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .superpower-detail-top {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

.superpower-icon-circle {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: 3.5px solid var(--power-color);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.75rem;
  flex-shrink: 0;
}

.superpower-detail-text {
  flex: 1;
}

.superpower-badge {
  display: inline-block;
  background-color: #FFFFFF;
  color: var(--power-color);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.4rem;
  border: 1.5px solid var(--power-border);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.superpower-title {
  font-size: clamp(1.35rem, 3.5vw, 1.85rem);
  color: var(--brand-green);
  margin-bottom: 0.45rem;
  line-height: 1.2;
}

.superpower-desc {
  font-size: var(--text-base);
  color: var(--brand-text-dark);
  line-height: 1.6;
}

/* CHECKLIST DE BENEFICIOS */
.superpower-checklist {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1.5px dashed var(--power-border);
  padding-top: 1.25rem;
}

@media (min-width: 768px) {
  .superpower-checklist {
    flex-direction: row;
    justify-content: space-between;
  }
}

.check-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--power-border);
  font-size: 0.9rem;
  color: var(--brand-green);
  line-height: 1.35;
  flex: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.check-icon-badge {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #22C55E;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}
</style>
