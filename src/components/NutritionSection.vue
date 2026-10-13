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
  <section id="nutricion" class="nutrition-section">
    <!-- BLOQUE 1: SEMÁFORO NUTRICIONAL OFICIAL (100% FULL-WIDTH WHITE) -->
    <div class="nutrition-block-white">
      <div class="container">
        <!-- TÍTULO DE LA SECCIÓN -->
        <div class="section-title-wrap">
          <span class="section-badge section-badge--green anim-wiggle">
            🥗 Semáforo & Nutrición Infantil
          </span>
          <h2 class="section-title">¡Energía Natural para Pequeños Exploradores!</h2>
          <p class="section-subtitle">
            En FrutiAventura cuidamos lo que comen tus hijos. Solo fruta real cosechada en Ecuador, sin conservantes químicos, sin grasa y sin sal.
          </p>
        </div>

        <!-- BANNER ILUSTRADO DE NUTRICIÓN (ANCHO COMPLETO EN EL CONTENEDOR, SIN CAJA EXTERNA) -->
        <div class="nutrition-banner-img-wrap">
          <img 
            src="/assets/fruit-nutrition-banner.jpg" 
            alt="Personajes de frutas felices de FrutiAventura sosteniendo el cartel 100% natural en el campo"
            class="nutrition-banner-img"
            width="1200"
            height="675"
            loading="lazy"
          />
        </div>

        <!-- ENCABEZADO Y TARJETAS DEL SEMÁFORO (FULL WIDTH WHITE) -->
        <div class="nutrition-semaforo-wrap">
          <div class="banner-pill">
            <span>🌟 100% Fruta Natural Ecuatoriana</span>
          </div>
          <h3 class="semaforo-main-title">El Semáforo Nutricional Oficial de la Cajita</h3>
          <p class="semaforo-main-subtitle">
            Certificado transparente para que los padres elijan con total confianza y tranquilidad.
          </p>

          <!-- LAS 3 TARJETAS DEL SEMÁFORO CON BORDES INTERACTIVOS NÍTIDOS -->
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

      <!-- ONDA ORGÁNICA ENTRE BLOQUE BLANCO Y BLOQUE MENTA -->
      <div class="wave-divider wave-white-to-mint" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#EBF8F0"></path>
        </svg>
      </div>
    </div>

    <!-- BLOQUE 2: SÚPER PODERES FRUTALES (100% FULL-WIDTH MENTA BOTÁNICO, SIN CARD BLANCA EXTERIOR) -->
    <div class="nutrition-block-mint">
      <div class="container">
        <!-- CONTENEDOR TRANSPARENTE: SIN FONDO BLANCO, FLUYE DIRECTO EN EL MENTA -->
        <div class="superpowers-wrap">
          <div class="superpowers-header">
            <span class="superpowers-tag">⚡ Conoce los Súper Poderes</span>
            <h3>¿Qué poder te da cada fruta de FrutiAventura?</h3>
            <p>Toca a cada personaje para descubrir sus vitaminas secretas:</p>
          </div>

          <!-- BOTONES CON BORDES VISIBLES POR SER OPCIONES DE INTERACCIÓN -->
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

      <!-- ONDA ORGÁNICA INFERIOR HACIA AVENTURA NIÑOS (CÁLIDO AMANECER) -->
      <div class="wave-divider nutrition-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#FFF5EB"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nutrition-section {
  position: relative;
  overflow: hidden;
  padding: 0;
}

/* ==========================================================================
   BLOQUE 1: SEMÁFORO 100% FULL-WIDTH WHITE
   ========================================================================== */
.nutrition-block-white {
  background-color: #FFFFFF;
  width: 100%;
  padding-top: clamp(2.5rem, 5vw, 4.5rem);
  position: relative;
}

.nutrition-banner-img-wrap {
  width: 100%;
  max-height: 480px;
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: 0 16px 40px rgba(19, 62, 43, 0.08);
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.nutrition-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nutrition-semaforo-wrap {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
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

.semaforo-main-title {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  margin-bottom: 0.5rem;
}

.semaforo-main-subtitle {
  color: var(--brand-text-muted);
  max-width: 650px;
  margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);
  font-size: var(--text-base);
}

.semaforo-cards-trio {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
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
  padding: 1.35rem 1.25rem;
  border-radius: var(--radius-lg);
  border: 2px solid;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.semaforo-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.semaforo-card--yellow {
  background-color: #FEFCE8;
  border-color: #FACC15;
}

.semaforo-card--green {
  background-color: #F0FDF4;
  border-color: #86EFAC;
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

.wave-white-to-mint {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  line-height: 0;
}

.wave-white-to-mint svg {
  display: block;
  width: 100%;
  height: clamp(40px, 6vw, 75px);
}

/* ==========================================================================
   BLOQUE 2: SÚPER PODERES 100% FULL-WIDTH MENTA BOTÁNICO
   ========================================================================== */
.nutrition-block-mint {
  background: linear-gradient(165deg, #EBF8F0 0%, #D8F2E4 50%, #C8ECDA 100%);
  width: 100%;
  padding-top: clamp(1rem, 3vw, 2.5rem);
  padding-bottom: 0;
  position: relative;
}

/* CONTENEDOR TRANSPARENTE: SIN FONDO BLANCO NI SOMBRA ARTIFICIAL */
.superpowers-wrap {
  background: transparent;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  border: none;
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
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

/* BOTONES DE OPCIONES CON BORDES DEFINIDOS POR SER ELEMENTOS DE INTERACCIÓN */
.superpower-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.4rem;
  border-radius: var(--radius-pill);
  background-color: #FFFFFF;
  border: 2px solid rgba(19, 62, 43, 0.18);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.superpower-btn:hover {
  transform: translateY(-2px);
  border-color: var(--btn-accent);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.superpower-btn--active {
  background-color: var(--btn-bg);
  border: 2.5px solid var(--btn-accent);
  box-shadow: 0 8px 22px rgba(19, 62, 43, 0.12);
  transform: translateY(-2px);
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

/* DETALLE DEL SÚPER PODER - TARJETA INDIVIDUAL ELEGANTE */
.superpower-detail-card {
  background-color: var(--power-bg);
  border: 2px solid var(--power-border);
  border-radius: var(--radius-xl);
  padding: clamp(1.25rem, 4vw, 2.5rem);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.06);
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
  border: 1px solid var(--power-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
  background-color: #FFFFFF;
  padding: 0.9rem 1.15rem;
  border-radius: var(--radius-md);
  border: 1.5px solid rgba(19, 62, 43, 0.1);
  font-size: 0.9rem;
  color: var(--brand-green);
  line-height: 1.35;
  flex: 1;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
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

.nutrition-wave-bottom {
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0;
}

.nutrition-wave-bottom svg {
  display: block;
  width: 100%;
  height: clamp(40px, 6vw, 75px);
}
</style>
