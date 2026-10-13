<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['openIngredientsModal'])

const activeFlavorId = ref('mango') // Default to mango or guayaba

const flavors = [
  {
    id: 'guayaba',
    name: 'Guayaba',
    badge: 'Dulce & Tropical',
    weight: '40g',
    accentColor: 'var(--flavor-guayaba-primary)',
    darkColor: 'var(--flavor-guayaba-dark)',
    bgColor: 'var(--flavor-guayaba-bg)',
    borderColor: 'var(--flavor-guayaba-border)',
    icon: '🍓',
    lidColor: '#E63956',
    headline: 'Aroma Intenso y Sabor Tradicional',
    description: 'Elaborada con pulpa de guayaba fresca y seleccionada. Ofrece un perfil dulce equilibrado con un suave toque floral que combina a la perfección con galletas, panes artesanales y queso fresco.',
    ingredients: ['Pulpa de guayaba fresca', 'Azúcar', 'Jugo de limón natural', 'Pectina de frutas'],
    pairing: 'Ideal con: Pan de campo, queso suave o pancakes matutinos.',
    darkCardTag: 'GUAYABA 40g • 100% NATURAL',
    darkCardSub: 'Mermelada artesanal sin conservantes • Elaborado en Ecuador'
  },
  {
    id: 'mango',
    name: 'Mango & Toronjil',
    badge: 'Suave & Aromático',
    weight: '40g',
    accentColor: 'var(--flavor-mango-primary)',
    darkColor: 'var(--flavor-mango-dark)',
    bgColor: 'var(--flavor-mango-bg)',
    borderColor: 'var(--flavor-mango-border)',
    icon: '🥭',
    lidColor: '#FBB024',
    headline: 'Dulzura Tropical con Notas de Toronjil',
    description: 'El clásico sabor a mango maduro ecuatoriano realzado con el secreto de la casa: una sutil infusión de toronjil que aporta frescura y digestibilidad a cada cucharada.',
    ingredients: ['Pulpa de mango maduro', 'Azúcar', 'Jugo de limón natural', 'Pectina', 'Toronjil herbal'],
    pairing: 'Ideal con: Yogur griego, tostadas integrales o waffles.',
    darkCardTag: 'MANGO 40g • 100% NATURAL',
    darkCardSub: 'Mermelada artesanal sin conservantes • Elaborado en Ecuador'
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    badge: 'Cítrico & Vibrante',
    weight: '40g',
    accentColor: 'var(--flavor-mandarina-primary)',
    darkColor: 'var(--flavor-mandarina-dark)',
    bgColor: 'var(--flavor-mandarina-bg)',
    borderColor: 'var(--flavor-mandarina-border)',
    icon: '🍊',
    lidColor: '#2D6A4F', // Note: mandarin jar has green lid on box!
    headline: 'Frescura Cítrica que Despierta los Sentidos',
    description: 'Una explosión jugosa de mandarina con el balance exacto entre acidez chispeante y dulzor frutal. Su textura brillante y aroma cítrico llenan de energía cualquier desayuno.',
    ingredients: ['Pulpa de mandarina jugosa', 'Azúcar', 'Jugo de limón natural', 'Pectina de frutas'],
    pairing: 'Ideal con: Croissants, quesos maduros o repostería ligera.',
    darkCardTag: 'MANDARINA 40g • 100% NATURAL',
    darkCardSub: 'Mermelada artesanal sin conservantes • Elaborado en Ecuador'
  }
]

const currentFlavor = computed(() => {
  return flavors.find(f => f.id === activeFlavorId.value) || flavors[0]
})

const selectFlavor = (id) => {
  activeFlavorId.value = id
}
</script>

<template>
  <section 
    id="sabores" 
    class="section flavors-section"
    :style="{ backgroundColor: currentFlavor.bgColor }"
  >
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-badge section-badge--pink">
          🍓 Tres Variedades Únicas
        </span>
        <h2 class="section-title">El Trío de Sabores FrutiAventura</h2>
        <p class="section-subtitle">
          Cada frasco de 40 gramos está preparado bajo procesos artesanales para mantener los nutrientes, color y aroma auténtico de la fruta recién cosechada.
        </p>
      </div>

      <!-- BOTONES DE PESTAÑAS / SELECTOR INTERACTIVO -->
      <div class="flavor-tabs" role="tablist" aria-label="Seleccionar sabor de mermelada">
        <button
          v-for="flavor in flavors"
          :key="flavor.id"
          role="tab"
          :aria-selected="activeFlavorId === flavor.id"
          :aria-controls="`panel-${flavor.id}`"
          :id="`tab-${flavor.id}`"
          class="flavor-tab"
          :class="{ 'flavor-tab--active': activeFlavorId === flavor.id }"
          :style="{
            '--tab-accent': flavor.accentColor,
            '--tab-bg': flavor.bgColor
          }"
          @click="selectFlavor(flavor.id)"
        >
          <span class="flavor-tab__icon" aria-hidden="true">{{ flavor.icon }}</span>
          <span class="flavor-tab__name">{{ flavor.name }}</span>
          <span class="flavor-tab__badge">{{ flavor.weight }}</span>
        </button>
      </div>

      <!-- PANEL PRINCIPAL DEL SABOR SELECCIONADO -->
      <div 
        :id="`panel-${currentFlavor.id}`"
        role="tabpanel"
        :aria-labelledby="`tab-${currentFlavor.id}`"
        class="flavor-card"
        :style="{
          '--accent-color': currentFlavor.accentColor,
          '--dark-color': currentFlavor.darkColor,
          '--bg-color': currentFlavor.bgColor,
          '--border-color': currentFlavor.borderColor
        }"
      >
        <div class="flavor-card__grid">
          <!-- Columna Izquierda: Información y Maridaje -->
          <div class="flavor-card__content">
            <div class="flavor-card__header">
              <span class="flavor-card__badge">{{ currentFlavor.badge }}</span>
              <span class="flavor-card__gramaje">Frasco de {{ currentFlavor.weight }}</span>
            </div>

            <h3 class="flavor-card__title">{{ currentFlavor.headline }}</h3>
            <p class="flavor-card__desc">{{ currentFlavor.description }}</p>

            <!-- Lista de ingredientes -->
            <div class="flavor-card__ingredients">
              <h4 class="flavor-card__subheading">Ingredientes 100% Naturales:</h4>
              <ul class="ingredients-list">
                <li v-for="ing in currentFlavor.ingredients" :key="ing" class="ingredient-tag">
                  <span class="ingredient-bullet" aria-hidden="true">✓</span>
                  <span>{{ ing }}</span>
                </li>
              </ul>
            </div>

            <!-- Sugerencia de maridaje -->
            <div class="flavor-card__pairing">
              <span class="pairing-icon" aria-hidden="true">💡</span>
              <p>{{ currentFlavor.pairing }}</p>
            </div>

            <!-- Botón para ver ficha completa -->
            <div class="flavor-card__actions">
              <button 
                class="btn btn-outline btn-flavor-action"
                @click="emit('openIngredientsModal', currentFlavor)"
              >
                <span>Ver Ficha Nutricional Completa</span>
              </button>
              <a href="#nutricion" class="btn btn-primary btn-flavor-action">
                <span>Ver Propiedades Nutricionales</span>
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Tarjeta Estilo Producto (Inspirada en las tarjetas del cliente) -->
          <div class="flavor-card__visual">
            <div class="dark-product-card">
              <div class="dark-product-card__top">
                <span class="dark-product-card__pill">{{ currentFlavor.name }}</span>
                <span class="dark-product-card__brand">FRUTIAVENTURA</span>
              </div>
              <div class="dark-product-card__jar-circle">
                <span class="dark-product-card__jar-emoji">{{ currentFlavor.icon }}</span>
              </div>
              <div class="dark-product-card__body">
                <h4 class="dark-product-card__title">{{ currentFlavor.darkCardTag }}</h4>
                <p class="dark-product-card__subtitle">{{ currentFlavor.darkCardSub }}</p>
                <div class="dark-product-card__leafs">
                  <span>🍃</span>
                  <span>🌸</span>
                  <span>🍃</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GALERÍA DE TARJETAS DE LOS 3 SABORES (VISTA SIMULTÁNEA) -->
      <div class="flavors-trio-row">
        <div 
          v-for="flavor in flavors" 
          :key="flavor.id"
          class="mini-flavor-card"
          :class="{ 'mini-flavor-card--active': activeFlavorId === flavor.id }"
          @click="selectFlavor(flavor.id)"
        >
          <div class="mini-flavor-card__icon">{{ flavor.icon }}</div>
          <h4>{{ flavor.name }}</h4>
          <p>{{ flavor.weight }} • 100% Natural</p>
          <span class="mini-flavor-card__indicator">
            {{ activeFlavorId === flavor.id ? 'Seleccionado' : 'Ver detalle' }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flavors-section {
  position: relative;
  transition: background-color 350ms cubic-bezier(0.16, 1, 0.3, 1);
  border-top: 1px solid rgba(19, 62, 43, 0.08);
  border-bottom: 1px solid rgba(19, 62, 43, 0.08);
}

/* PESTAÑAS SELECTORAS */
.flavor-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}

.flavor-tab {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius-pill);
  background-color: #FFFFFF;
  border: 2px solid var(--brand-cream-dark);
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  color: var(--brand-text-muted);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.flavor-tab:hover {
  border-color: var(--tab-accent);
  color: var(--brand-green);
  transform: translateY(-2px);
}

.flavor-tab--active {
  background-color: var(--tab-bg);
  border-color: var(--tab-accent);
  color: var(--brand-green);
  box-shadow: 0 4px 16px rgba(19, 62, 43, 0.08);
}

.flavor-tab__icon {
  font-size: 1.25rem;
}

.flavor-tab__badge {
  font-size: 0.72rem;
  background-color: rgba(19, 62, 43, 0.08);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-pill);
}

/* TARJETA PRINCIPAL DEL SABOR SELECCIONADO */
.flavor-card {
  background-color: #FFFFFF;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: var(--shadow-lg);
  transition: border-color var(--transition-normal);
  margin-bottom: var(--space-xl);
}

.flavor-card__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
}

@media (min-width: 860px) {
  .flavor-card__grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.flavor-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.flavor-card__badge {
  background-color: var(--bg-color);
  color: var(--dark-color);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);
}

.flavor-card__gramaje {
  font-size: var(--text-xs);
  color: var(--brand-text-muted);
  font-weight: var(--font-weight-semibold);
}

.flavor-card__title {
  font-size: var(--text-2xl);
  color: var(--brand-green);
  margin-bottom: var(--space-xs);
}

.flavor-card__desc {
  font-size: var(--text-base);
  color: var(--brand-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.flavor-card__subheading {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--brand-green);
  margin-bottom: 0.65rem;
}

.ingredients-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: var(--space-md);
}

.ingredient-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background-color: var(--bg-color);
  color: var(--dark-color);
  font-size: 0.82rem;
  font-weight: var(--font-weight-bold);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);
}

.ingredient-bullet {
  color: var(--accent-color);
}

.flavor-card__pairing {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background-color: var(--brand-cream);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-lg);
  font-size: var(--text-sm);
  color: var(--brand-text-dark);
}

.pairing-icon {
  font-size: 1.1rem;
}

.flavor-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.btn-flavor-action {
  font-size: var(--text-sm);
}

/* TARJETA VISUAL ESTILO EMPAQUE OSCURO (INSPIRADO EN LAS PIEZAS GRAFICAS) */
.dark-product-card {
  background: linear-gradient(145deg, #2A1F18 0%, #1A130E 100%);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  color: #FFFFFF;
  text-align: center;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.dark-product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background-color: var(--accent-color);
}

.dark-product-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
}

.dark-product-card__pill {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark-product-card__brand {
  letter-spacing: 0.1em;
  font-weight: var(--font-weight-bold);
  color: rgba(255, 255, 255, 0.6);
}

.dark-product-card__jar-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  border: 3px solid var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow: 0 0 25px rgba(251, 176, 36, 0.2);
}

.dark-product-card__jar-emoji {
  font-size: 2.75rem;
}

.dark-product-card__title {
  font-size: 1.15rem;
  font-family: var(--font-display);
  color: #FFFFFF;
  margin-bottom: 0.35rem;
}

.dark-product-card__subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  margin-bottom: 1rem;
}

.dark-product-card__leafs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* FILA DE LOS TRES SABORES */
.flavors-trio-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 650px) {
  .flavors-trio-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

.mini-flavor-card {
  background-color: #FFFFFF;
  border: 1px solid var(--brand-cream-dark);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.mini-flavor-card:hover {
  transform: translateY(-3px);
  border-color: var(--brand-green-light);
  box-shadow: var(--shadow-md);
}

.mini-flavor-card--active {
  border-color: var(--brand-green);
  background-color: var(--brand-green-bg);
}

.mini-flavor-card__icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.mini-flavor-card h4 {
  font-size: 1.05rem;
  color: var(--brand-green);
  margin-bottom: 0.25rem;
}

.mini-flavor-card p {
  font-size: 0.82rem;
  color: var(--brand-text-muted);
  margin-bottom: 0.65rem;
}

.mini-flavor-card__indicator {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  color: var(--brand-green-light);
}
</style>
