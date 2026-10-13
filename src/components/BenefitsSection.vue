<template>
  <section id="beneficios" class="section benefits-section-harvest">
    <div class="container">
      <div class="section-title-wrap section-title-wrap--gold">
        <span class="section-badge section-badge--gold anim-wiggle">
          🌟 ¿Por qué elegir FrutiAventura?
        </span>
        <h2 class="section-title section-title--gold">Pensado para las Familias y Amantes de la Fruta</h2>
        <p class="section-subtitle section-subtitle--gold">
          Creamos una alternativa diferente: deliciosa, artesanal y llena de variedad para transformar tus mañanas y meriendas en momentos especiales.
        </p>
      </div>

      <!-- GRID DE BENEFICIOS (ESTILO GLASSMORPHISM MENOS BORDES / ATMOSFÉRICO) -->
      <div class="benefits-grid">
        <div class="benefit-card-glass">
          <div class="benefit-card__icon-wrap">
            <span class="benefit-icon" aria-hidden="true">🎉</span>
          </div>
          <h3 class="benefit-card__title">3 Sabores en Una Sola Caja</h3>
          <p class="benefit-card__desc">
            No te limites a un solo sabor. Disfruta de la variedad con Guayaba, Mango y Mandarina juntos en un empaque diseñado para complacer los gustos de toda la familia.
          </p>
        </div>

        <div class="benefit-card-glass">
          <div class="benefit-card__icon-wrap">
            <span class="benefit-icon" aria-hidden="true">🌿</span>
          </div>
          <h3 class="benefit-card__title">100% Ingredientes Naturales</h3>
          <p class="benefit-card__desc">
            Elaborada con pulpa de frutas reales, jugo de limón y pectina natural. Cero conservantes artificiales, con infusión herbal de toronjil en nuestra receta de mango.
          </p>
        </div>

        <div class="benefit-card-glass">
          <div class="benefit-card__icon-wrap">
            <span class="benefit-icon" aria-hidden="true">🎒</span>
          </div>
          <h3 class="benefit-card__title">Fácil y Práctico de Llevar</h3>
          <p class="benefit-card__desc">
            Frascos individuales de 40 gramos que caben cómodamente en cualquier lonchera escolar, bolso o mochila para tus días de campo, viajes o el trabajo.
          </p>
        </div>

        <div class="benefit-card-glass">
          <div class="benefit-card__icon-wrap">
            <span class="benefit-icon" aria-hidden="true">🎨</span>
          </div>
          <h3 class="benefit-card__title">Empaque Alegre y Divertido</h3>
          <p class="benefit-card__desc">
            Un diseño lleno de vida, con dibujos de frutas y colores llamativos que despiertan el apetito y hacen de cada desayuno una experiencia divertida.
          </p>
        </div>
      </div>

      <!-- FRASE DESTACADA DEL PITCH (ESTILO VIDRIO VERDE BOSQUE) -->
      <div class="brand-banner brand-banner--forest">
        <div class="brand-banner__content">
          <span class="brand-banner__stars">⭐⭐⭐⭐⭐</span>
          <blockquote class="brand-banner__quote">
            “Con FrutiAventura no solo compras mermelada, ¡también disfrutas de tres deliciosos sabores en cada momento!”
          </blockquote>
          <p class="brand-banner__author">
            — Filosofía FrutiAventura • Hecho con amor en Ecuador
          </p>
        </div>
      </div>
    </div>

    <!-- Onda orgánica hacia el footer verde oscuro -->
    <div class="wave-divider benefits-wave-bottom" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#133E2B"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.benefits-section-harvest {
  position: relative;
  background: linear-gradient(155deg, #F59E0B 0%, #D97706 50%, #B45309 100%);
  color: #FFFFFF;
  padding-top: clamp(2.5rem, 5vw, 4.5rem);
  padding-bottom: 0;
  overflow: hidden;
}

.benefits-wave-bottom {
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0;
}

.benefits-wave-bottom svg {
  display: block;
  width: 100%;
  height: clamp(40px, 6vw, 75px);
}

.section-title-wrap--gold {
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.section-badge--gold {
  background-color: #FFFFFF;
  color: #B45309;
  font-weight: 800;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.section-title--gold {
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.section-subtitle--gold {
  color: rgba(255, 255, 255, 0.92);
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: var(--space-xl);
}

@media (min-width: 600px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* TARJETAS GLASSMORPHISM CON "LESS BORDERS" */
.benefit-card-glass {
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(14px);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 3vw, 2.2rem);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.28);
  transition: transform var(--transition-normal), background var(--transition-fast), box-shadow var(--transition-fast);
  display: flex;
  flex-direction: column;
}

.benefit-card-glass:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.24);
  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.16);
}

.benefit-card__icon-wrap {
  width: 58px;
  height: 58px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.benefit-icon {
  font-size: 1.85rem;
}

.benefit-card__title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-family: var(--font-display);
  font-weight: 700;
}

.benefit-card__desc {
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.55;
}

/* BANNER FRASE DESTACADA */
.brand-banner--forest {
  background: linear-gradient(145deg, #133E2B 0%, #0A2419 100%);
  border-radius: var(--radius-xl);
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem);
  color: #FFFFFF;
  text-align: center;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(251, 176, 36, 0.35);
  position: relative;
  overflow: hidden;
}

.brand-banner--forest::before {
  content: '🍓 🥭 🍊';
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.15;
}

.brand-banner__stars {
  font-size: 1.25rem;
  display: block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.2rem;
}

.brand-banner__quote {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 1.85rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  max-width: 800px;
  margin: 0 auto 1rem;
  color: #FFFFFF;
}

.brand-banner__author {
  font-size: var(--text-sm);
  color: var(--brand-yellow);
  font-weight: var(--font-weight-semibold);
}
</style>
