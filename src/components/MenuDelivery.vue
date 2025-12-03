<script setup>
import { ref, computed } from 'vue';

// 1. Categorías del Menú
const categories = [
  { id: 'all', name: 'Todo' },
  { id: 'sushi', name: 'Sushi Rolls' },
  { id: 'nigiri', name: 'Nigiri & Sashimi' },
  { id: 'hot', name: 'Platos Calientes' },
  { id: 'dessert', name: 'Postres' },
];

const selectedCategory = ref('all');

// 2. Datos Simulados (Base de Datos temporal)
// NOTA: Las imágenes son de Unsplash. Cuando tengas las tuyas, ponlas en assets.
const products = [
  {
    id: 1,
    name: 'Dragon Roll Imperial',
    description: 'Langostino en tempura, aguacate, cobertura de anguila y sésamo tostado.',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    category: 'sushi'
  },
  {
    id: 2,
    name: 'Spicy Tuna Crunch',
    description: 'Atún rojo picante, pepino, mayonesa japonesa y cebolla frita crujiente.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?q=80&w=800&auto=format&fit=crop',
    category: 'sushi'
  },
  {
    id: 3,
    name: 'Nigiri Salmón Flambeado',
    description: 'Salmón noruego flambeado con lima y sal maldon (2 piezas).',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop',
    category: 'nigiri'
  },
  {
    id: 4,
    name: 'Sashimi Toro',
    description: 'Cortes premium de ventresca de atún rojo (5 piezas).',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=800&auto=format&fit=crop',
    category: 'nigiri'
  },
  {
    id: 5,
    name: 'Ramen Tonkotsu',
    description: 'Caldo de cerdo cocinado 12h, huevo marinado, chashu y fideos artesanos.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop',
    category: 'hot'
  },
  {
    id: 6,
    name: 'Gyozas de Wagyu',
    description: 'Empanadillas japonesas rellenas de carne de Wagyu y verduras (4 uds).',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1626804475297-411dbe217567?q=80&w=800&auto=format&fit=crop',
    category: 'hot'
  },
  {
    id: 7,
    name: 'Mochi de Té Matcha',
    description: 'Pastel de arroz tradicional relleno de helado de té verde.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1623596732263-06b03568e022?q=80&w=800&auto=format&fit=crop',
    category: 'dessert'
  }
];

// 3. Lógica de Filtrado
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') return products;
  return products.filter(p => p.category === selectedCategory.value);
});

// Función simple para simular añadir (luego conectaremos con el carrito real)
const addToCart = (product) => {
  alert(`¡${product.name} añadido al pedido!`);
  // Aquí más adelante llamaremos a la tienda de Pinia
};
</script>

<template>
  <!-- Contenedor Principal -->
  <div class="min-h-screen bg-gray-50 dark:bg-ukiyo-dark transition-colors duration-300 pt-4 pb-20">

    <!-- ENCABEZADO DE PÁGINA -->
    <div class="text-center mb-8 px-4">
      <h1 class="text-4xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-widest">
        Carta <span class="text-ukiyo-gold">Ukiyo</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Selección premium para llevar a casa</p>
    </div>

    <!-- BARRA DE FILTROS (Sticky) -->
    <!-- top-20: Se pega debajo del Navbar (ajusta el número si tu navbar es más alto/bajo) -->
    <div class="sticky top-20 z-30 bg-gray-50/95 dark:bg-ukiyo-dark/95 backdrop-blur-sm py-4 mb-8 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="whitespace-nowrap px-6 py-2 rounded-full border-2 font-bold transition-all duration-300 text-sm"
          :class="selectedCategory === cat.id
            ? 'bg-ukiyo-gold border-ukiyo-gold text-black shadow-md'
            : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-ukiyo-gold hover:text-ukiyo-gold'"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <!-- GRID DE PRODUCTOS -->
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

      <!-- TARJETA DE PLATO -->
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="group bg-white dark:bg-ukiyo-nav rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
      >
        <!-- 1. FOTO DEL PLATO -->
        <div class="relative h-56 overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <!-- Etiqueta de Precio Flotante -->
          <div class="absolute top-4 right-4 bg-black/80 backdrop-blur text-ukiyo-gold font-bold px-3 py-1 rounded-full border border-ukiyo-gold text-sm shadow-lg">
            {{ product.price.toFixed(2) }} €
          </div>
        </div>

        <!-- 2. INFORMACIÓN -->
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-ukiyo-gold transition-colors">
              {{ product.name }}
            </h3>
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {{ product.description }}
          </p>

          <!-- 3. BOTÓN AÑADIR -->
          <button
            @click="addToCart(product)"
            class="w-full py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-ukiyo-gold hover:border-ukiyo-gold hover:text-black transition-all flex items-center justify-center gap-2 group-hover:border-ukiyo-gold group-hover:text-ukiyo-gold group-hover:hover:text-black"
          >
            <span>Añadir</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>

    </div>

    <!-- MENSAJE SI NO HAY PRODUCTOS -->
    <div v-if="filteredProducts.length === 0" class="text-center py-20">
      <p class="text-gray-500 dark:text-gray-400 text-xl">No hay platos en esta categoría por ahora.</p>
    </div>

  </div>
</template>

<style scoped>
/* Ocultar barra de scroll en los filtros pero permitir scroll */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
