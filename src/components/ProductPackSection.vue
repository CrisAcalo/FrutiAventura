<template>
  <section id="la-cajita" class="section pack-section-dark">
    <div class="container pack-container">
      <div class="section-title-wrap section-title-wrap--dark">
        <span class="section-badge section-badge--gold anim-wiggle">
          📦 Formato Degustación 120g
        </span>
        <h2 class="section-title section-title--dark">La Cajita FrutiAventura</h2>
        <p class="section-subtitle section-subtitle--dark">
          Diseñada para enamorar a primera vista. Colores llamativos, divertidos dibujos de frutas y una ventana frontal para apreciar la calidad natural de cada frasco.
        </p>
      </div>

      <div class="pack-grid">
        <!-- Tarjeta Visual del Empaque -->
        <div class="pack-visual">
          <div class="pack-visual__card">
            <img 
              src="/assets/packaging-cutout.jpg" 
              alt="Troquel del empaque de FrutiAventura mostrando diseño de frutas y ventana transparente"
              class="pack-visual__img"
              width="600"
              height="350"
              loading="lazy"
            />
            <div class="pack-visual__caption">
              <span class="pack-visual__badge">Empaque Oficial Ecuatoriano</span>
              <p>Diseño con dibujos de frutas y colores alegres que llenan tu mesa de vida.</p>
            </div>
          </div>
        </div>

        <!-- Columna de Detalles y Ficha Técnica -->
        <div class="pack-details">
          <div class="pack-phrase">
            <span class="pack-phrase__quote" aria-hidden="true">“</span>
            <h3>Pequeños frascos, grandes sabores</h3>
            <p>Pensado especialmente para las familias y para quienes no quieren conformarse con un solo sabor.</p>
          </div>

          <!-- Cards de especificaciones del producto con alto contraste -->
          <div class="pack-specs-list">
            <div class="spec-card-dark">
              <div class="spec-card-dark__icon" aria-hidden="true">🍯</div>
              <div class="spec-card-dark__content">
                <h4>3 Mini Mermeladas</h4>
                <p>Guayaba, Mango y Mandarina reunidas en una presentación exclusiva.</p>
              </div>
            </div>

            <div class="spec-card-dark">
              <div class="spec-card-dark__icon" aria-hidden="true">⚖️</div>
              <div class="spec-card-dark__content">
                <h4>40g Por Frasco (120g Total)</h4>
                <p>El tamaño idóneo para degustar, llevar a la oficina o incluir en la lonchera escolar.</p>
              </div>
            </div>

            <div class="spec-card-dark">
              <div class="spec-card-dark__icon" aria-hidden="true">🌱</div>
              <div class="spec-card-dark__content">
                <h4>Sin Conservantes Artificiales</h4>
                <p>Elaboración artesanal conservada de manera natural con jugo de limón y pectina.</p>
              </div>
            </div>

            <div class="spec-card-dark">
              <div class="spec-card-dark__icon" aria-hidden="true">❄️</div>
              <div class="spec-card-dark__content">
                <h4>Conservación Segura</h4>
                <p>Mantener en lugar fresco y seco. Refrigerar una vez abierto para preservar su textura.</p>
              </div>
            </div>
          </div>

          <!-- Semáforo Nutricional Integrado -->
          <div class="semaforo-container">
            <div class="semaforo-box semaforo-box--contrast">
              <div class="semaforo-header">
                Semáforo Nutricional Oficial
              </div>
              <div class="semaforo-item">
                <span><strong>Azúcar</strong></span>
                <span class="semaforo-pill semaforo-pill--medio">MEDIO</span>
              </div>
              <div class="semaforo-item">
                <span><strong>Grasa</strong></span>
                <span class="semaforo-pill semaforo-pill--nocontiene">NO CONTIENE</span>
              </div>
              <div class="semaforo-item">
                <span><strong>Sal</strong></span>
                <span class="semaforo-pill semaforo-pill--nocontiene">NO CONTIENE</span>
              </div>
              <p class="semaforo-footer-note">
                ✨ Disfruta el sabor natural de la fruta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Onda decorativa inferior -->
    <div class="wave-divider wave-divider--flip pack-wave-bottom" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#133E2B"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.pack-section-dark {
  background: linear-gradient(155deg, #133E2B 0%, #0A2419 100%);
  color: #FFFFFF;
  position: relative;
  padding-top: clamp(2rem, 5vw, 4rem);
  padding-bottom: 0;
  overflow: hidden;
}

.pack-wave-bottom {
  margin-top: clamp(2rem, 5vw, 3.5rem);
  line-height: 0;
}

.pack-container {
  position: relative;
  z-index: 1;
}

.section-title-wrap--dark {
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.section-badge--gold {
  background-color: var(--brand-yellow);
  color: var(--brand-green);
  font-weight: bold;
}

.section-title--dark {
  color: #FFFFFF;
}

.section-subtitle--dark {
  color: rgba(255, 255, 255, 0.85);
}

.pack-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

@media (min-width: 900px) {
  .pack-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.pack-visual__card {
  background-color: #FFFFFF;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  border: 3px solid rgba(255, 255, 255, 0.2);
  transition: transform var(--transition-normal);
}

.pack-visual__card:hover {
  transform: translateY(-4px);
}

.pack-visual__img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid var(--brand-cream-dark);
}

.pack-visual__caption {
  padding: 1.25rem 1.5rem;
  background-color: #FAF5E9;
}

.pack-visual__badge {
  display: inline-block;
  background-color: var(--brand-green);
  color: #FFFFFF;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 0.4rem;
}

.pack-visual__caption p {
  font-size: var(--text-sm);
  color: var(--brand-text-dark);
}

/* DETALLES */
.pack-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.pack-phrase {
  position: relative;
  padding-left: 1.5rem;
  border-left: 4px solid var(--brand-yellow);
}

.pack-phrase__quote {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--brand-yellow);
  line-height: 0;
  display: block;
  margin-bottom: 0.5rem;
}

.pack-phrase h3 {
  font-size: var(--text-2xl);
  color: var(--brand-yellow);
  margin-bottom: 0.35rem;
}

.pack-phrase p {
  color: rgba(255, 255, 255, 0.88);
  font-size: var(--text-base);
}

.pack-specs-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

@media (min-width: 500px) {
  .pack-specs-list {
    grid-template-columns: 1fr 1fr;
  }
}

.spec-card-dark {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  padding: 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.spec-card-dark:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}

.spec-card-dark__icon {
  font-size: 1.6rem;
  line-height: 1;
}

.spec-card-dark__content h4 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-yellow);
  margin-bottom: 0.2rem;
}

.spec-card-dark__content p {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

/* SEMÁFORO EN LA SECCIÓN */
.semaforo-container {
  margin-top: 0.5rem;
}

.semaforo-box--contrast {
  width: 100%;
  max-width: 100%;
  background-color: #FFFDF8;
  border: 2px solid var(--brand-yellow);
  color: var(--brand-text-dark);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.semaforo-footer-note {
  margin-top: 0.75rem;
  text-align: center;
  font-family: var(--font-display);
  font-size: 0.82rem;
  color: var(--brand-green);
  font-weight: var(--font-weight-semibold);
}
</style>
