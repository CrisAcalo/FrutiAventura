<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__brand-col">
        <a href="#inicio" class="footer__logo">
          <span class="footer__logo-title">FrutiAventura</span>
          <span class="footer__logo-sub">Mini mermeladas naturales</span>
        </a>
        <p class="footer__desc">
          ¡Una aventura de sabor en cada cucharada! La combinación perfecta de tres deliciosos sabores en una sola caja de 120g.
        </p>
        <div class="footer__badge">
          <span>🇪🇨 Producto Ecuatoriano Artesanal</span>
        </div>
      </div>

      <div class="footer__links-col">
        <h4 class="footer__heading">Navegación</h4>
        <ul class="footer__list">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#la-cajita">La Cajita de 120g</a></li>
          <li><a href="#sabores">Trío de Sabores</a></li>
          <li><a href="#nutricion">Semáforo Nutricional</a></li>
          <li><a href="#aventura-ninos">Aventura Niños</a></li>
          <li><a href="#beneficios">Beneficios</a></li>
        </ul>
      </div>

      <div class="footer__flavors-col">
        <h4 class="footer__heading">Nuestros Sabores</h4>
        <ul class="footer__list">
          <li>🍓 Guayaba (40g)</li>
          <li>🥭 Mango con Toronjil (40g)</li>
          <li>🍊 Mandarina Cítrica (40g)</li>
        </ul>
        <p class="footer__pack-note">
          Cada pack contiene los 3 sabores juntos.
        </p>
      </div>

      <div class="footer__contact-col">
        <h4 class="footer__heading">Calidad Artesanal</h4>
        <p class="footer__contact-text">
          Elaborado con amor en Ecuador a base de frutas seleccionadas. 100% natural y sin conservantes químicos.
        </p>
        <a href="#sabores" class="btn btn-secondary btn-footer-cta">
          Descubrir los Sabores
        </a>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>© 2026 FrutiAventura • Pequeños frascos, grandes sabores. Todos los derechos reservados.</p>
        <p class="footer__thanks">¡Muchas gracias por apoyar lo natural y artesanal! ❤️</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--brand-green);
  color: #FFFFFF;
  padding-top: clamp(3rem, 6vw, 4.5rem);
  border-top: 4px solid var(--brand-yellow);
}

.footer__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
}

@media (min-width: 600px) {
  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .footer__container {
    grid-template-columns: 1.4fr 0.8fr 1fr 1.2fr;
  }
}

.footer__logo {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
}

.footer__logo-title {
  font-family: var(--font-display);
  font-size: 1.85rem;
  font-weight: var(--font-weight-black);
  color: var(--brand-yellow);
  line-height: 1.1;
}

.footer__logo-sub {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--brand-pink-light);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: bold;
}

.footer__desc {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer__badge {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: bold;
}

.footer__heading {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.4rem;
}

.footer__heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background-color: var(--brand-yellow);
  border-radius: var(--radius-pill);
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.footer__list a {
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-fast), padding-left var(--transition-fast);
  display: inline-block;
}

.footer__list a:hover {
  color: var(--brand-yellow);
  padding-left: 4px;
}

.footer__list li {
  color: rgba(255, 255, 255, 0.85);
}

.footer__pack-note {
  margin-top: 0.75rem;
  font-size: 0.78rem;
  color: var(--brand-yellow);
  font-style: italic;
}

.footer__contact-text {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.btn-footer-cta {
  font-size: 0.88rem;
  padding: 0.6rem 1.1rem;
}

.footer__bottom {
  background-color: #0c2b1d;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
}

.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer__bottom-inner {
    flex-direction: row;
    text-align: left;
  }
}

.footer__thanks {
  color: var(--brand-yellow);
  font-weight: bold;
}
</style>
