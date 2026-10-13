<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProductPackSection from './components/ProductPackSection.vue'
import FlavorsSection from './components/FlavorsSection.vue'
import NutritionSection from './components/NutritionSection.vue'
import KidsAdventureGame from './components/KidsAdventureGame.vue'
import BenefitsSection from './components/BenefitsSection.vue'
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
    </main>

    <!-- FOOTER -->
    <AppFooter />

    <!-- MODAL DE INGREDIENTES -->
    <IngredientsModal 
      :is-open="isModalOpen" 
      :flavor="selectedFlavorForModal" 
      @close="closeModal" 
    />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
