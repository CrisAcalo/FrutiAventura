<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'La Cajita', href: '#la-cajita' },
  { name: 'Trío de Sabores', href: '#sabores' },
  { name: 'Nutrición', href: '#nutricion' },
  { name: 'Aventura Niños', href: '#aventura-ninos' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Pedir', href: '#pedir' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="header" 
    :class="{ 'header--scrolled': isScrolled, 'header--menu-open': isMobileMenuOpen }"
  >
    <!-- BARRA PROMOCIONAL INTEGRADA EN EL HEADER (SIN SOLAPAMIENTO) -->
    <aside class="announcement-bar" :class="{ 'announcement-bar--hidden': isScrolled }" aria-label="Aviso promocional">
      <div class="container announcement-bar__inner">
        <span class="announcement-bar__text">
          🎉 <strong>¡Pack Degustación FrutiAventura!</strong> 3 mini mermeladas de 40g en una sola caja
        </span>
        <a href="#pedir" class="announcement-bar__link" @click="closeMobileMenu">Pedir Ahora &rarr;</a>
      </div>
    </aside>

    <!-- BARRA PRINCIPAL DE NAVEGACIÓN -->
    <div class="nav-bar">
      <div class="container header__container">
        <!-- LOGO DE MARCA -->
        <a href="#inicio" class="logo" @click="closeMobileMenu" aria-label="Ir al inicio de FrutiAventura">
          <span class="logo__icon" aria-hidden="true">
            <svg viewBox="0 0 36 36" width="32" height="32" fill="none">
              <path d="M18 6C11 6 6 12 6 20C6 27.5 11.5 32 18 32C24.5 32 30 27.5 30 20C30 12 25 6 18 6Z" fill="#FBB024" />
              <path d="M18 10C13 10 9 14.5 9 20C9 25 13 28.5 18 28.5C23 28.5 27 25 27 20C27 14.5 23 10 18 10Z" fill="#E63956" opacity="0.85" />
              <path d="M18 6C18 3 21 2 24 2C24 4.5 22 6 18 6Z" fill="#2D6A4F" />
            </svg>
          </span>
          <div class="logo__text-group">
            <span class="logo__title">FrutiAventura</span>
            <span class="logo__tagline">Mini mermeladas naturales</span>
          </div>
        </a>

        <!-- NAVEGACIÓN DE ESCRITORIO -->
        <nav class="nav-desktop" aria-label="Navegación principal">
          <ul class="nav-desktop__list">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="nav-desktop__link">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- BOTÓN CTA HEADER -->
        <div class="header__cta">
          <a href="#pedir" class="btn btn-primary btn-header">
            <span>Pedir Cajita</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <!-- BOTÓN HAMBURGUESA MÓVIL -->
        <button 
          class="menu-toggle"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Abrir menú de navegación"
          @click="toggleMobileMenu"
        >
          <span class="menu-toggle__line"></span>
          <span class="menu-toggle__line"></span>
          <span class="menu-toggle__line"></span>
        </button>
      </div>
    </div>

    <!-- MENÚ MÓVIL DESPLEGABLE CON SCROLL ACCESIBLE -->
    <div 
      id="mobile-nav"
      class="nav-mobile"
      :class="{ 'nav-mobile--active': isMobileMenuOpen }"
      aria-label="Menú móvil"
    >
      <div class="container nav-mobile__inner">
        <ul class="nav-mobile__list">
          <li v-for="link in navLinks" :key="link.href">
            <a 
              :href="link.href" 
              class="nav-mobile__link"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <div class="nav-mobile__footer">
          <a href="#pedir" class="btn btn-primary btn-block" @click="closeMobileMenu">
            Pedir mi Cajita de 3 Sabores
          </a>
          <p class="nav-mobile__note">¡Pequeños frascos, grandes sabores!</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(250, 246, 238, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(19, 62, 43, 0.08);
  transition: box-shadow var(--transition-normal);
}

.header--scrolled {
  box-shadow: 0 4px 20px rgba(19, 62, 43, 0.08);
}

/* BARRA PROMOCIONAL */
.announcement-bar {
  background-color: var(--brand-green);
  color: #FFFFFF;
  font-size: var(--text-xs);
  padding: 0.4rem 0;
  text-align: center;
  transition: max-height 300ms ease, opacity 250ms ease, padding 300ms ease;
  max-height: 80px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.announcement-bar--hidden {
  max-height: 0;
  opacity: 0;
  padding: 0;
  border-bottom: none;
}

.announcement-bar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.announcement-bar__text {
  line-height: 1.3;
}

.announcement-bar__link {
  color: var(--brand-yellow);
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
}

/* NAV-BAR */
.nav-bar {
  padding: 0.75rem 0;
  transition: padding var(--transition-fast);
}

.header--scrolled .nav-bar {
  padding: 0.5rem 0;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}

.logo__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3));
}

.logo__text-group {
  display: flex;
  flex-direction: column;
}

.logo__title {
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3.5vw, 1.55rem);
  font-weight: var(--font-weight-black);
  color: var(--brand-green);
  line-height: 1;
  letter-spacing: -0.02em;
}

.logo__tagline {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: var(--font-weight-bold);
  color: var(--brand-pink-badge);
  line-height: 1.1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* NAVEGACIÓN DESKTOP */
.nav-desktop {
  display: none;
}

@media (min-width: 900px) {
  .nav-desktop {
    display: block;
  }
}

.nav-desktop__list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-desktop__link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--brand-text-dark);
  padding: 0.4rem 0.2rem;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-desktop__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2.5px;
  background-color: var(--brand-yellow);
  border-radius: var(--radius-pill);
  transition: width var(--transition-normal);
}

.nav-desktop__link:hover {
  color: var(--brand-green);
}

.nav-desktop__link:hover::after {
  width: 100%;
}

/* CTA */
.header__cta {
  display: none;
}

@media (min-width: 600px) {
  .header__cta {
    display: block;
  }
}

.btn-header {
  padding: 0.55rem 1.25rem;
  font-size: var(--text-sm);
}

/* BOTÓN HAMBURGUESA */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 42px;
  height: 42px;
  background: var(--brand-cream-dark);
  border: 1px solid rgba(19, 62, 43, 0.12);
  border-radius: var(--radius-sm);
  padding: 9px;
  z-index: 1001;
  transition: background-color var(--transition-fast);
}

@media (min-width: 900px) {
  .menu-toggle {
    display: none;
  }
}

.menu-toggle__line {
  width: 100%;
  height: 2.5px;
  background-color: var(--brand-green);
  border-radius: var(--radius-pill);
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.header--menu-open .menu-toggle__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.header--menu-open .menu-toggle__line:nth-child(2) {
  opacity: 0;
}
.header--menu-open .menu-toggle__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* MENÚ MÓVIL DESPLEGABLE CON ALTURA DINÁMICA */
.nav-mobile {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--brand-cream-card);
  border-bottom: 2px solid var(--brand-cream-dark);
  box-shadow: var(--shadow-lg);
  max-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition: max-height 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms ease;
  opacity: 0;
}

.nav-mobile--active {
  max-height: calc(100vh - 75px);
  opacity: 1;
}

.nav-mobile__inner {
  padding-top: var(--space-md);
  padding-bottom: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.nav-mobile__list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.nav-mobile__link {
  display: block;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: var(--font-weight-semibold);
  color: var(--brand-green);
  padding: 0.6rem 0.5rem;
  border-radius: var(--radius-xs);
  transition: background-color var(--transition-fast), padding-left var(--transition-fast);
}

.nav-mobile__link:hover,
.nav-mobile__link:active {
  background-color: var(--brand-cream);
  padding-left: 0.85rem;
}

.nav-mobile__footer {
  border-top: 1px solid var(--brand-cream-dark);
  padding-top: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.btn-block {
  width: 100%;
}

.nav-mobile__note {
  font-size: 0.82rem;
  color: var(--brand-text-muted);
  font-style: italic;
}
</style>
