<template>
  <section id="inicio" class="hero">
    <!-- Elementos decorativos de fondo -->
    <div class="hero__bg-decor" aria-hidden="true">
      <div class="hero__blob hero__blob--yellow"></div>
      <div class="hero__blob hero__blob--pink"></div>
      <div class="hero__blob hero__blob--green"></div>
    </div>

    <div class="container hero__container">
      <!-- COLUMNA DE TEXTO -->
      <div class="hero__content">
        <div class="hero__badges">
          <div class="hero__badge-art hero__badge-art--pink">
            <span class="badge-art__icon" aria-hidden="true">🍓</span>
            <div class="badge-art__text">
              <span class="badge-art__tag">100% ARTESANAL</span>
              <span class="badge-art__title">Mini mermeladas naturales</span>
            </div>
            <span class="badge-art__sparkle" aria-hidden="true">✨</span>
          </div>

          <div class="hero__badge-art hero__badge-art--green">
            <span class="badge-art__icon" aria-hidden="true">🇪🇨</span>
            <div class="badge-art__text">
              <span class="badge-art__tag">ORIGEN ECUATORIANO</span>
              <span class="badge-art__title">Elaborado en Ecuador</span>
            </div>
            <span class="badge-art__sparkle" aria-hidden="true">🌿</span>
          </div>
        </div>

        <h1 class="hero__title">
          ¡Una aventura de sabor en <span class="hero__title-highlight">cada cucharada!</span>
        </h1>

        <p class="hero__lead">
          ¿Por qué quedarte con un solo sabor cuando puedes disfrutar tres? Descubre nuestra caja con mini mermeladas de <strong>Guayaba, Mango y Mandarina</strong>, elaboradas artesanalmente con fruta natural y sin conservantes.
        </p>

        <!-- Puntos clave rápidos -->
        <div class="hero__features-list">
          <div class="hero__feature-item">
            <span class="hero__feature-icon" aria-hidden="true">📦</span>
            <div class="hero__feature-text">
              <strong>120g Peso Neto</strong>
              <small>3 frascos individuales de 40g</small>
            </div>
          </div>
          <div class="hero__feature-item">
            <span class="hero__feature-icon" aria-hidden="true">🌿</span>
            <div class="hero__feature-text">
              <strong>100% Natural</strong>
              <small>Pura pulpa y pectina</small>
            </div>
          </div>
          <div class="hero__feature-item">
            <span class="hero__feature-icon" aria-hidden="true">👨‍👩‍👧‍👦</span>
            <div class="hero__feature-text">
              <strong>Para toda la familia</strong>
              <small>Fácil y práctico de llevar</small>
            </div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="hero__actions">
          <a href="#la-cajita" class="btn btn-primary btn-hero">
            <span>Conocer la Cajita</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <a href="#sabores" class="btn btn-outline btn-hero">
            <span>Explorar los 3 Sabores</span>
          </a>
        </div>

        <!-- Acceso directo a las mascotas para niños -->
        <a href="#aventura-ninos" class="hero__mascots-link">
          <div class="mascots-mini-avatar anim-bounce">
            <img 
              src="/assets/mascots-explorers.jpg" 
              alt="Mascotas exploradoras Gia, Monty y Max"
              width="44"
              height="44"
              loading="lazy"
            />
          </div>
          <div class="mascots-mini-text">
            <strong>🎒 ¡Conoce a Gia, Monty y Max!</strong>
            <small>Taller interactivo de desayunos divertidos &rarr;</small>
          </div>
        </a>
      </div>

      <!-- COLUMNA VISUAL: PRODUCTO REAL + STICKERS -->
      <div class="hero__visual">
        <div class="hero__image-wrapper">
          <!-- Stickers animados flotantes -->
          <span class="hero__sticker hero__sticker--mango anim-wiggle" title="Mango jugoso">🥭</span>
          <span class="hero__sticker hero__sticker--guayaba anim-float" title="Guayaba dulce">🍓</span>
          <span class="hero__sticker hero__sticker--mandarina anim-bounce" title="Mandarina fresca">🍊</span>

          <img 
            src="/assets/frutiaventura-box-mockup.jpg" 
            alt="Caja de FrutiAventura con sus tres mini mermeladas naturales: Guayaba, Mango y Mandarina" 
            class="hero__image"
            width="600"
            height="400"
            loading="eager"
            fetchpriority="high"
          />

          <!-- Badge flotante sobre la imagen -->
          <div class="hero__floating-card">
            <span class="hero__floating-icon" aria-hidden="true">✨</span>
            <div>
              <p class="hero__floating-title">Pequeños frascos</p>
              <p class="hero__floating-subtitle">¡Grandes sabores!</p>
            </div>
          </div>

          <!-- Píldoras de sabores visibles -->
          <div class="hero__jars-strip" aria-label="Sabores incluidos en la caja">
            <span class="jar-pill jar-pill--guayaba">🍓 Guayaba 40g</span>
            <span class="jar-pill jar-pill--mango">🥭 Mango 40g</span>
            <span class="jar-pill jar-pill--mandarina">🍊 Mandarina 40g</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Onda orgánica hacia la siguiente sección oscura -->
    <div class="wave-divider hero-wave-bottom" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" fill="#133E2B"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: clamp(4.5rem, 8vw, 6.5rem);
  padding-bottom: 0;
  background: linear-gradient(175deg, #FFFDF8 0%, #FFF3D6 50%, #FFE9B8 100%);
  overflow: hidden;
}

.hero-wave-bottom {
  margin-top: clamp(2rem, 5vw, 4rem);
  line-height: 0;
}

.hero-wave-bottom svg {
  display: block;
  width: 100%;
  height: clamp(40px, 6vw, 75px);
}

/* Manchas orgánicas de fondo */
.hero__bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.45;
}

.hero__blob--yellow {
  top: 5%;
  right: -5%;
  width: 480px;
  height: 480px;
  background-color: var(--brand-yellow-light);
}

.hero__blob--pink {
  bottom: 0%;
  left: -8%;
  width: 400px;
  height: 400px;
  background-color: var(--brand-pink-light);
}

.hero__blob--green {
  top: 40%;
  left: 35%;
  width: 320px;
  height: 320px;
  background-color: var(--brand-green-bg);
}

.hero__container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 6vw, 4.5rem);
  align-items: center;
}

@media (min-width: 960px) {
  .hero__container {
    grid-template-columns: 1.15fr 1fr;
  }
}

/* TEXTO */
.hero__badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: var(--space-md);
}

.hero__badge-art {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.35rem 0.65rem 1.1rem;
  font-family: var(--font-display);
  box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  cursor: default;
  position: relative;
  backdrop-filter: blur(8px);
}

.hero__badge-art:hover {
  transform: scale(1.05) rotate(0deg) !important;
  box-shadow: 0 14px 28px -4px rgba(0, 0, 0, 0.24);
}

.hero__badge-art--pink {
  background: linear-gradient(135deg, #FF2E63 0%, #E60045 55%, #BD0038 100%);
  color: #FFFFFF;
  /* Forma orgánica asimétrica estilo gota / salpicadura de fruta */
  border-radius: 46% 54% 68% 32% / 36% 62% 38% 64%;
  transform: rotate(-3deg);
  border: 2px solid rgba(255, 255, 255, 0.85);
}

.hero__badge-art--green {
  background: linear-gradient(135deg, #0E3E29 0%, #175B3C 55%, #0B2B1D 100%);
  color: #FFDE59;
  /* Forma abstracta de guijarro botánico */
  border-radius: 62% 38% 42% 58% / 54% 38% 62% 46%;
  transform: rotate(2.5deg);
  border: 2px solid rgba(255, 222, 89, 0.65);
}

.badge-art__icon {
  font-size: 1.4rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
}

.badge-art__text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.badge-art__tag {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero__badge-art--pink .badge-art__tag {
  color: #FFE4E8;
}

.hero__badge-art--green .badge-art__tag {
  color: #A7F3D0;
}

.badge-art__title {
  font-size: clamp(0.88rem, 1.8vw, 1.02rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
}

.badge-art__sparkle {
  font-size: 0.95rem;
  opacity: 0.9;
}

.hero__title {
  font-size: var(--text-hero);
  line-height: 1.1;
  color: var(--brand-green);
  margin-bottom: var(--space-md);
  letter-spacing: -0.02em;
}

.hero__title-highlight {
  color: var(--flavor-mandarina-primary);
  display: inline-block;
  position: relative;
}

.hero__lead {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--brand-text-muted);
  margin-bottom: var(--space-lg);
  max-width: 580px;
}

.hero__lead strong {
  color: var(--brand-green);
  font-weight: var(--font-weight-bold);
}

/* CARACTERÍSTICAS RÁPIDAS */
.hero__features-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
  margin-bottom: var(--space-xl);
}

@media (min-width: 520px) {
  .hero__features-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.hero__feature-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 0.75rem 0.95rem;
  border-radius: var(--radius-md);
  border: none;
  box-shadow: 0 8px 24px rgba(19, 62, 43, 0.06);
}

.hero__feature-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.hero__feature-text {
  display: flex;
  flex-direction: column;
}

.hero__feature-text strong {
  font-family: var(--font-display);
  font-size: 0.88rem;
  color: var(--brand-green);
  line-height: 1.2;
}

.hero__feature-text small {
  font-size: 0.75rem;
  color: var(--brand-text-muted);
  line-height: 1.2;
}

/* ACCIONES */
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: var(--space-md);
}

.btn-hero {
  padding: 0.95rem 1.85rem;
  font-size: 1.05rem;
}

@media (max-width: 480px) {
  .btn-hero {
    width: 100%;
  }
}

/* ENLACE MASCOTAS */
.hero__mascots-link {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  border: 2px dashed var(--brand-yellow);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.hero__mascots-link:hover {
  transform: translateY(-2px);
  border-color: var(--flavor-mandarina-primary);
}

.mascots-mini-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--brand-yellow);
  flex-shrink: 0;
}

.mascots-mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mascots-mini-text strong {
  display: block;
  font-family: var(--font-display);
  font-size: 0.88rem;
  color: var(--brand-green);
}

.mascots-mini-text small {
  font-size: 0.75rem;
  color: var(--flavor-mandarina-primary);
  font-weight: bold;
}

/* STICKERS FLOTANTES */
.hero__sticker {
  position: absolute;
  font-size: 2.2rem;
  z-index: 3;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  user-select: none;
  transition: transform var(--transition-fast);
}

.hero__sticker:hover {
  transform: scale(1.3) rotate(10deg);
}

.hero__sticker--mango {
  top: -20px;
  left: 20px;
}

.hero__sticker--guayaba {
  bottom: 25px;
  left: -20px;
}

.hero__sticker--mandarina {
  bottom: 40px;
  right: -15px;
}

/* VISUAL / IMAGEN */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero__image-wrapper {
  position: relative;
  width: 100%;
  max-width: 560px;
  border-radius: var(--radius-xl);
  overflow: visible;
  padding: 0.5rem;
}

.hero__image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 30px 60px -15px rgba(234, 88, 12, 0.2);
  border: 4px solid #FFFFFF;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.hero__image:hover {
  transform: translateY(-4px) scale(1.01);
}

/* TARJETA FLOTANTE */
.hero__floating-card {
  position: absolute;
  top: -15px;
  right: -10px;
  background-color: #FFFFFF;
  border-radius: var(--radius-pill);
  padding: 0.5rem 1.1rem;
  box-shadow: var(--shadow-md);
  border: 2px solid var(--brand-yellow);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: float 4s ease-in-out infinite;
  z-index: 2;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero__floating-icon {
  font-size: 1.25rem;
}

.hero__floating-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--brand-green);
  line-height: 1.1;
}

.hero__floating-subtitle {
  font-size: 0.72rem;
  color: var(--flavor-mandarina-primary);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
}

/* STRIP DE SABORES */
.hero__jars-strip {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
}

.jar-pill {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: var(--font-weight-semibold);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sm);
  background-color: #FFFFFF;
  border: 1px solid var(--brand-cream-dark);
}

.jar-pill--guayaba {
  color: var(--flavor-guayaba-dark);
  border-color: var(--flavor-guayaba-border);
}
.jar-pill--mango {
  color: var(--flavor-mango-dark);
  border-color: var(--flavor-mango-border);
}
.jar-pill--mandarina {
  color: var(--flavor-mandarina-dark);
  border-color: var(--flavor-mandarina-border);
}
</style>
