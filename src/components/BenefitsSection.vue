<template>
  <section id="beneficios" class="section section-alt benefits-section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--yellow">
          🌟 ¿Por qué elegir FrutiAventura?
        </span>
        <h2 class="section-title">Pensado para las Familias y Amantes de la Fruta</h2>
        <p class="section-subtitle">
          Creamos una alternativa diferente: deliciosa, artesanal y llena de variedad para transformar tus mañanas y meriendas en momentos especiales.
        </p>
      </div>

      <!-- GRID DE BENEFICIOS -->
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-card__icon-wrap benefit-card__icon-wrap--yellow">
            <span class="benefit-icon" aria-hidden="true">🎉</span>
          </div>
          <h3 class="benefit-card__title">3 Sabores en Una Sola Caja</h3>
          <p class="benefit-card__desc">
            No te limites a un solo sabor. Disfruta de la variedad con Guayaba, Mango y Mandarina juntos en un empaque diseñado para complacer los gustos de toda la familia.
          </p>
        </div>

        <div class="benefit-card">
          <div class="benefit-card__icon-wrap benefit-card__icon-wrap--green">
            <span class="benefit-icon" aria-hidden="true">🌿</span>
          </div>
          <h3 class="benefit-card__title">100% Ingredientes Naturales</h3>
          <p class="benefit-card__desc">
            Elaborada con pulpa de frutas reales, jugo de limón y pectina natural. Cero conservantes artificiales, con infusión herbal de toronjil en nuestra receta de mango.
          </p>
        </div>

        <div class="benefit-card">
          <div class="benefit-card__icon-wrap benefit-card__icon-wrap--pink">
            <span class="benefit-icon" aria-hidden="true">🎒</span>
          </div>
          <h3 class="benefit-card__title">Fácil y Práctico de Llevar</h3>
          <p class="benefit-card__desc">
            Frascos individuales de 40 gramos que caben cómodamente en cualquier lonchera escolar, bolso o mochila para tus días de campo, viajes o el trabajo.
          </p>
        </div>

        <div class="benefit-card">
          <div class="benefit-card__icon-wrap benefit-card__icon-wrap--orange">
            <span class="benefit-icon" aria-hidden="true">🎨</span>
          </div>
          <h3 class="benefit-card__title">Empaque Alegre y Divertido</h3>
          <p class="benefit-card__desc">
            Un diseño lleno de vida, con dibujos de frutas y colores llamativos que despiertan el apetito y hacen de cada desayuno una experiencia divertida.
          </p>
        </div>
      </div>

      <!-- FRASE DESTACADA DEL PITCH -->
      <div class="brand-banner">
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
  </section>
</template>

<style scoped>
.benefits-section {
  position: relative;
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

.benefit-card {
  background-color: #FFFFFF;
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2rem);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--brand-cream-dark);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.benefit-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--brand-green-light);
}

.benefit-card__icon-wrap {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
}

.benefit-card__icon-wrap--yellow {
  background-color: var(--brand-yellow-light);
}
.benefit-card__icon-wrap--green {
  background-color: var(--brand-green-bg);
}
.benefit-card__icon-wrap--pink {
  background-color: var(--brand-pink-light);
}
.benefit-card__icon-wrap--orange {
  background-color: var(--flavor-mandarina-bg);
}

.benefit-icon {
  font-size: 1.75rem;
}

.benefit-card__title {
  font-size: 1.2rem;
  color: var(--brand-green);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.benefit-card__desc {
  font-size: 0.92rem;
  color: var(--brand-text-muted);
  line-height: 1.5;
}

/* BANNER FRASE DESTACADA */
.brand-banner {
  background: linear-gradient(135deg, var(--brand-green) 0%, #1c523a 100%);
  border-radius: var(--radius-xl);
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem);
  color: #FFFFFF;
  text-align: center;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.brand-banner::before {
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
}

.brand-banner__author {
  font-size: var(--text-sm);
  color: var(--brand-yellow);
  font-weight: var(--font-weight-semibold);
}
</style>
