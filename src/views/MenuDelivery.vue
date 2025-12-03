<script setup lang="ts">
import { ref, computed } from 'vue';

// --- 1. CONFIGURACIÓN DE ALÉRGENOS ---
const allergenIcons: Record<string, string> = {
  'Gluten': '🌾', 'Crustáceos': '🦀', 'Huevos': '🥚', 'Pescado': '🐟',
  'Cacahuetes': '🥜', 'Soja': '🫘', 'Leche': '🥛', 'Frutos de cáscara': '🌰',
  'Apio': '🥬', 'Mostaza': '🍯', 'Sésamo': '🌱', 'Sulfitos': '🧪',
  'Altramuces': '🌼', 'Moluscos': '🐚'
};

// --- 2. FUNCIÓN PARA LAS FOTOS (¡IMPORTANTE!) ---
const resolveImage = (imgName: string) => {
  // Si la imagen es una URL de internet (empieza por http), la devolvemos tal cual
  if (imgName.startsWith('http')) {
    return imgName;
  }

  // Si es un archivo local, Vite necesita calcular la ruta.
  // NOTA: '../assets' asume que este archivo está en 'src/components/'
  // Si tu archivo está en 'src/', cambia '../assets' por './assets'
  return new URL(`../assets/comida/${imgName}`, import.meta.url).href;
};

// --- 3. DATOS DE CATEGORÍAS ---
const categories = [
  { id: 'all', name: 'Todo' },
  { id: 'Entrantes', name: 'Entrantes' },
  { id: 'hosomaki', name: 'Hosomaki' },
  { id: 'nigiris', name: 'Nigiris' },
  { id: 'futomakis', name: 'Futomakis' },
  { id: 'uramakis', name: 'Uramakis' },
  { id: 'pokes', name: 'Pokes' },
  { id: 'combos', name: 'Combos' },
  { id: 'variados_ukiyo', name: 'Variados Ukiyo' },
  { id: 'dessert', name: 'Postres' },
  { id: 'bebidas', name: 'Bebidas' },
];

const selectedCategory = ref('Entrantes');

// --- 4. PRODUCTOS (Asegúrate de que los nombres de archivo .jpg sean exactos) ---
const products = [
  // --- ENTRANTES (Fotos locales) ---
  {
    id: 1,
    name: 'Edamame',
    description: 'Tiernas vainas de soja al vapor, con un toque salado y picante.',
    price: 4.50,
    image: 'edamame.jpg', // Nombre exacto en src/assets/comida/
    category: 'Entrantes',
    ingredients: 'Edamame, sal marina, picante japonés.',
    allergens: ['Soja']
  },
  {
    id: 2,
    name: 'Ensalada Wakame',
    description: 'Alga marina aliñada al estilo japonés, fresca y ligera.',
    price: 4.00,
    image: 'wakame.jpg',
    category: 'Entrantes',
    ingredients: 'Alga wakame, sésamo, vinagre, soja.',
    allergens: ['Pescado', 'Soja', 'Sésamo']
  },
  {
    id: 3,
    name: 'Gyozas Cerdo (5 Uds)',
    description: 'Empanadillas a la plancha rellenas de cerdo.',
    price: 5.50,
    image: 'gyozas_cerdo.jpg',
    category: 'Entrantes',
    ingredients: 'Harina, cerdo, soja, jengibre.',
    allergens: ['Gluten', 'Huevos', 'Soja', 'Apio', 'Sésamo']
  },
  {
    id: 4,
    name: 'Gyozas Pollo (5 Uds)',
    description: 'Empanadillas a la plancha rellenas de pollo.',
    price: 5.50,
    image: 'gyozas_pollo.jpg',
    category: 'Entrantes',
    ingredients: 'Harina, pollo, soja, jengibre.',
    allergens: ['Gluten', 'Huevos', 'Soja', 'Apio', 'Sésamo']
  },
  {
    id: 5,
    name: 'Xiaolongbao (5 Uds)',
    description: 'Raviolis chinos al vapor con relleno jugoso.',
    price: 6.00,
    image: 'xiaolongbao.jpg',
    category: 'Entrantes',
    ingredients: 'Harina, cerdo, caldo, jengibre.',
    allergens: ['Gluten', 'Soja', 'Apio', 'Sésamo']
  },

  // --- EJEMPLOS OTRAS CATEGORÍAS (Fotos de internet para que no den error) ---
  {
    id: 30,
    name: 'Nigiri Salmón',
    description: 'Salmón noruego flambeado.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80',
    category: 'nigiris'
  },
  {
    id: 50,
    name: 'Dragon Roll',
    description: 'Langostino en tempura y aguacate.',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80',
    category: 'uramakis'
  },
  {
    id: 90,
    name: 'Mochi Matcha',
    description: 'Postre tradicional.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1623596732263-06b03568e022?q=80',
    category: 'dessert'
  },
];

// --- 5. LÓGICA DE FILTRADO ---
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') return products;
  return products.filter(p => p.category === selectedCategory.value);
});

const addToCart = (product: any) => {
  console.log(`Añadido: ${product.name}`);
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-ukiyo-dark transition-colors duration-300 pb-20">

    <div class="pt-12 pb-8 text-center px-4">
      <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-widest">
        Carta <span class="text-ukiyo-gold">Ukiyo</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400">Selección de platos tradicionales.</p>
    </div>

    <div class="sticky top-20 z-40 bg-gray-50/95 dark:bg-ukiyo-dark/95 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800 mb-8 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar pb-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="whitespace-nowrap px-6 py-2 rounded-full border-2 font-bold transition-all duration-300 text-sm"
          :class="selectedCategory === cat.id
            ? 'bg-ukiyo-gold border-ukiyo-gold text-black shadow-lg shadow-ukiyo-gold/20'
            : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-ukiyo-gold hover:text-ukiyo-gold'"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="group bg-white dark:bg-ukiyo-nav rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:-translate-y-2"
      >
        <div class="relative h-56 overflow-hidden">
          <img
            :src="resolveImage(product.image)"
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-ukiyo-gold font-bold px-3 py-1 rounded-full border border-ukiyo-gold text-sm shadow-lg">
            {{ product.price.toFixed(2) }} €
          </div>
        </div>

        <div class="p-5 flex flex-col flex-grow">
          <div class="mb-3">
             <span class="text-xs font-bold text-ukiyo-gold uppercase tracking-wider mb-1 block">
                {{ categories.find(c => c.id === product.category)?.name }}
            </span>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-ukiyo-gold transition-colors duration-300">
              {{ product.name }}
            </h3>
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {{ product.description }}
          </p>

          <div v-if="product.ingredients" class="mb-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
            <p class="text-xs text-gray-500 dark:text-gray-400">
              <span class="font-bold text-gray-700 dark:text-gray-300">Ing:</span>
              {{ product.ingredients }}
            </p>
          </div>

          <div v-if="product.allergens && product.allergens.length > 0" class="mb-6">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="allergen in product.allergens"
                :key="allergen"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200"
                :title="allergen"
              >
                <span>{{ allergenIcons[allergen] }}</span>
                <span>{{ allergen }}</span>
              </span>
            </div>
          </div>

          <div class="flex-grow"></div>

          <button
            @click="addToCart(product)"
            class="w-full py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-ukiyo-gold group-hover:border-ukiyo-gold group-hover:text-black group-hover:shadow-lg mt-auto"
          >
            <span>Añadir</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
