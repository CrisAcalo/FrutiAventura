# FrutiAventura 🍓🥭🍊

> **¡Una aventura de sabor en cada cucharada!**  
> Single Page Application (SPA) publicitaria e informativa para la marca de mini mermeladas naturales **FrutiAventura**.

---

## 📖 Acerca del Proyecto

**FrutiAventura** es una propuesta artesanal y natural pensada para las familias y los amantes de la fruta. Su concepto principal es ofrecer un **pack degustación de 120 gramos** compuesto por **tres mini frascos de 40 gramos cada uno** en una sola caja colorida y fácil de llevar, reuniendo los sabores de:

1. **Guayaba:** Dulzura tropical, textura untable tradicional y aroma inconfundible.
2. **Mango con Toronjil:** Receta con mango maduro y una infusión herbal de toronjil para una experiencia digestiva y fresca.
3. **Mandarina:** Explosión cítrica, fresca y revitalizante para el desayuno o la merienda.

---

## ✨ Características Principales

- **Arquitectura Front-End Pura:** SPA desarrollada en **Vue 3** y **CSS Vanilla** sin necesidad de backend o base de datos.
- **Sistema de Tokens CSS (Variables):** 100% de la identidad visual parametrizada en variables CSS (`:root`), permitiendo modificar colores, tipografías, bordes y espaciados de forma instantánea en un solo archivo.
- **Diseño Ultra-Responsivo:** Adaptabilidad fluida garantizada desde pantallas móviles pequeñas de **320px** hasta monitores de escritorio de alta resolución, sin desbordamiento horizontal.
- **Identidad Artística & Mascotas:**
  - Personajes ilustrados: **Gia la Guayaba**, **Monty el Mango** y **Max la Mandarina**.
  - Ilustraciones de desayunos infantiles y campos frutales ecuatorianos.
- **Taller Interactivo para Niños (`#aventura-ninos`):** Mini-juego interactivo donde los más pequeños pueden "preparar" su tostada eligiendo el sabor de mermelada y decorándola con toppings animados (bananitas, estrellitas de kiwi, arándanos y chispitas).
- **Semáforo Nutricional Oficial (`#nutricion`):** Información transparente y clara:
  - 🟡 **Azúcar:** MEDIO
  - 🟢 **Grasa:** NO CONTIENE
  - 🟢 **Sal:** NO CONTIENE
- **Modal Accesible de Ficha Técnica:** Visualización completa de ingredientes puros (pulpa de fruta, jugo de limón natural, pectina) con soporte de teclado (`Escape`) y desenfoque de fondo.
- **Simulador de Pedidos con WhatsApp (`#pedir`):** Cálculo en tiempo real de cajas, frascos (40g c/u), peso neto total y valor estimado, con generación automática de mensajes pre-rellenados para concretar pedidos por WhatsApp.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Empaquetador & Servidor:** [Vite](https://vitejs.dev/)
- **Estilos:** CSS Vanilla (Mobile-first, CSS Custom Properties, animaciones con `@keyframes`)
- **Testing:** [Vitest](https://vitest.dev/) y [@vue/test-utils](https://test-utils.vuejs.org/) (17 pruebas unitarias automatizadas)

---

## 📁 Estructura del Proyecto

```text
PaginaMermeladas/
├── public/
│   └── assets/                     # Mockups 3D reales e ilustraciones de marca
├── src/
│   ├── assets/                     # Iconos y recursos estáticos
│   ├── components/
│   │   ├── AppHeader.vue           # Barra de navegación sticky y menú móvil adaptativo
│   │   ├── HeroSection.vue         # Portada con 3D mockup, eslogan y stickers animados
│   │   ├── ProductPackSection.vue  # Presentación del empaque de 120g y troquel
│   │   ├── FlavorsSection.vue      # Catálogo interactivo de los 3 sabores
│   │   ├── NutritionSection.vue    # Semáforo nutricional y súper poderes vitamínicos
│   │   ├── KidsAdventureGame.vue   # Mini-juego interactivo de la tostada mágica
│   │   ├── BenefitsSection.vue     # 4 pilares de la marca FrutiAventura
│   │   ├── OrderSimulatorSection.vue # Calculadora de pedidos y enlace WhatsApp
│   │   ├── IngredientsModal.vue    # Modal accesible con ficha técnica
│   │   └── AppFooter.vue           # Créditos, enlaces y agradecimientos
│   ├── styles/
│   │   ├── variables.css           # Tokens de diseño (colores, fuentes, sombras)
│   │   ├── reset.css               # Normalización, scrollbar de marca y foco accesible
│   │   └── main.css                # Utilidades, animaciones y clases reutilizables
│   ├── __tests__/                  # Suites de pruebas unitarias
│   ├── App.vue                     # Componente raíz y orquestación
│   └── main.js                     # Montaje de la aplicación
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación y Ejecución

### Prerrequisitos
- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/)

### 1. Clonar el repositorio e instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

### 3. Ejecutar las pruebas unitarias
```bash
npm test
```

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y listos para despliegue estático se generarán en la carpeta `dist/`.

### 5. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## 🎨 Personalización de Estilos y Marca

Para modificar la paleta de colores o tipografía del proyecto, edita únicamente el archivo [`src/styles/variables.css`](src/styles/variables.css):

```css
:root {
  /* Modifica aquí los colores de marca */
  --brand-green: #133E2B;
  --brand-yellow: #FBB024;
  --brand-cream: #FAF6EE;

  /* Modifica aquí los colores por fruta */
  --flavor-guayaba-primary: #E63956;
  --flavor-mango-primary: #F59E0B;
  --flavor-mandarina-primary: #EA580C;
}
```

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

*Hecho con amor en Ecuador 🇪🇨 • ¡Pequeños frascos, grandes sabores!*
