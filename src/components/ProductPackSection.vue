<template>
  <section id="la-cajita" class="section section-alt">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--green">
          📦 Formato Degustación 120g
        </span>
        <h2 class="section-title">La Cajita FrutiAventura</h2>
        <p class="section-subtitle">
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
              <span class="pack-visual__badge">Empaque Oficial</span>
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

          <!-- Cards de especificaciones del producto -->
          <div class="pack-specs-list">
            <div class="spec-card">
              <div class="spec-card__icon" aria-hidden="true">🍯</div>
              <div class="spec-card__content">
                <h4>3 Mini Mermeladas</h4>
                <p>Guayaba, Mango y Mandarina reunidas en una presentación exclusiva.</p>
              </div>
            </div>

            <div class="spec-card">
              <div class="spec-card__icon" aria-hidden="true">⚖️</div>
              <div class="spec-card__content">
                <h4>40g Por Frasco (120g Total)</h4>
                <p>El tamaño idóneo para degustar, llevar a la oficina o incluir en la lonchera escolar.</p>
              </div>
            </div>

            <div class="spec-card">
              <div class="spec-card__icon" aria-hidden="true">🌱</div>
              <div class="spec-card__content">
                <h4>Sin Conservantes Artificiales</h4>
                <p>Elaboración artesanal conservada de manera natural con jugo de limón y pectina.</p>
              </div>
            </div>

            <div class="spec-card">
              <div class="spec-card__icon" aria-hidden="true">❄️</div>
              <div class="spec-card__content">
                <h4>Conservación Segura</h4>
                <p>Mantener en lugar fresco y seco. Refrigerar una vez abierto para preservar su textura.</p>
              </div>
            </div>
          </div>

          <!-- Semáforo Nutricional Integrado -->
          <div class="semaforo-container">
            <div class="semaforo-box">
              <div class="semaforo-header">
                Semáforo Nutricional
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
  </section>
</template>

<style scoped>
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
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--brand-cream-dark);
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
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 0.4rem;
}

.pack-visual__caption p {
  font-size: var(--text-sm);
  color: var(--brand-text-muted);
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
  color: var(--brand-green);
  margin-bottom: 0.35rem;
}

.pack-phrase p {
  color: var(--brand-text-muted);
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

.spec-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background-color: var(--brand-cream);
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--brand-cream-dark);
}

.spec-card__icon {
  font-size: 1.5rem;
  line-height: 1;
}

.spec-card__content h4 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-green);
  margin-bottom: 0.2rem;
}

.spec-card__content p {
  font-size: 0.8rem;
  color: var(--brand-text-muted);
  line-height: 1.4;
}

/* SEMÁFORO EN LA SECCIÓN */
.semaforo-container {
  margin-top: 0.5rem;
}

.semaforo-box {
  width: 100%;
  max-width: 100%;
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
