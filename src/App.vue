<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProductPackSection from './components/ProductPackSection.vue'
import FlavorsSection from './components/FlavorsSection.vue'
import NutritionSection from './components/NutritionSection.vue'
import KidsAdventureGame from './components/KidsAdventureGame.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import OrderSimulatorSection from './components/OrderSimulatorSection.vue'
import IngredientsModal from './components/IngredientsModal.vue'
import AppFooter from './components/AppFooter.vue'

const isModalOpen = ref(false)
const selectedFlavorForModal = ref(null)

const openModal = (flavor) => {
  selectedFlavorForModal.value = flavor
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="app-layout">
    <!-- CABECERA -->
    <AppHeader />

    <!-- CONTENIDO PRINCIPAL -->
    <main id="main-content">
      <HeroSection />
      <ProductPackSection />
      <FlavorsSection @open-ingredients-modal="openModal" />
      <NutritionSection />
      <KidsAdventureGame />
      <BenefitsSection />
      <OrderSimulatorSection />
    </main>

    <!-- FOOTER -->
    <AppFooter />

    <!-- MODAL DE INGREDIENTES -->
    <IngredientsModal 
      :is-open="isModalOpen" 
      :flavor="selectedFlavorForModal" 
      @close="closeModal" 
    />

    <!-- BOTÓN FLOTANTE RÁPIDO DE WHATSAPP -->
    <a 
      href="#pedir" 
      class="floating-cta"
      aria-label="Ir directamente a pedir cajitas por WhatsApp"
      title="Pedir FrutiAventura"
    >
      <span class="floating-cta__icon" aria-hidden="true">🛒</span>
      <span class="floating-cta__text">Pedir</span>
    </a>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* BARRA SUPERIOR */
.announcement-bar {
  background-color: var(--brand-green);
  color: #FFFFFF;
  font-size: var(--text-xs);
  padding: 0.45rem 0;
  text-align: center;
  position: relative;
  z-index: 1002;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.announcement-bar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.announcement-bar__link {
  color: var(--brand-yellow);
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity var(--transition-fast);
}

.announcement-bar__link:hover {
  opacity: 0.85;
}

main {
  flex: 1;
}

/* BOTÓN FLOTANTE */
.floating-cta {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: var(--brand-green);
  color: var(--brand-yellow);
  border-radius: var(--radius-pill);
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: var(--font-weight-bold);
  box-shadow: 0 8px 24px rgba(19, 62, 43, 0.35);
  border: 2px solid var(--brand-yellow);
  z-index: 999;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.floating-cta:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 30px rgba(19, 62, 43, 0.45);
}

.floating-cta:active {
  transform: scale(0.96);
}

.floating-cta__icon {
  font-size: 1.15rem;
}

@media (max-width: 480px) {
  .floating-cta {
    bottom: 1rem;
    right: 1rem;
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
