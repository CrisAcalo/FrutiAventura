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
          <span class="hero__badge hero__badge--pink">
            <span class="hero__badge-dot"></span>
            Mini mermeladas naturales
          </span>
          <span class="hero__badge hero__badge--green">
            🇪🇨 Elaborado en Ecuador
          </span>
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
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: clamp(4.5rem, 8vw, 6.5rem);
  padding-bottom: clamp(3rem, 7vw, 5.5rem);
  overflow: hidden;
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
  gap: 0.5rem;
  margin-bottom: var(--space-md);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.03em;
}

.hero__badge--pink {
  background-color: var(--brand-pink-light);
  color: var(--brand-pink-badge);
}

.hero__badge--green {
  background-color: var(--brand-green-bg);
  color: var(--brand-green-light);
  border: 1px solid rgba(45, 106, 79, 0.2);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--brand-pink-badge);
  border-radius: 50%;
  display: inline-block;
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
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
  background: rgba(255, 255, 255, 0.7);
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(19, 62, 43, 0.08);
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
