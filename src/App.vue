<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'; // <-- 1. Importamos el Footer
</script>

<template>
  <!-- flex flex-col y min-h-screen aseguran que el footer se vaya abajo del todo si hay poco contenido -->
  <div class="min-h-screen bg-gray-50 dark:bg-ukiyo-dark font-sans text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">

    <!-- Barra de Navegación -->
    <NavBar />

    <!-- Contenido de las páginas (flex-grow empuja el footer hacia abajo) -->
    <div class="flex-grow">
      <RouterView />
    </div>

    <!-- Footer (Pie de página) -->
    <Footer />

  </div>
</template>
