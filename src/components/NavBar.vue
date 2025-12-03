<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'; // Importante para usar los enlaces

const isMenuOpen = ref(false);
const isDarkMode = ref(false);
const cartCount = ref(0);
const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const userPref = localStorage.getItem('theme');
  const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userPref === 'dark' || (!userPref && systemPrefDark)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="sticky top-0 z-50 w-full bg-white dark:bg-ukiyo-nav border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">

        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center gap-2 group no-underline" @click="isMenuOpen = false">
          <div class="h-12 w-auto flex items-center">
             <img src="@/assets/logo.png" alt="Logo Ukiyo" class="h-full w-auto object-contain" />
          </div>
          <span class="font-bold text-2xl tracking-widest flex flex-col leading-none text-gray-900 dark:text-white">
            UKIYO
            <small class="text-xs text-ukiyo-gold font-normal">浮世</small>
          </span>
        </RouterLink>

        <!-- ENLACES ESCRITORIO -->
        <div class="hidden md:flex space-x-8 items-center">
          <RouterLink to="/" class="text-gray-900 dark:text-gray-100 font-medium hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors duration-200">Inicio</RouterLink>

          <!-- AQUÍ ESTÁ EL ENLACE AL MENÚ -->
          <RouterLink to="/delivery" class="text-gray-900 dark:text-gray-100 font-medium hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors duration-200">Menú</RouterLink>

          <RouterLink to="/ofertas" class="text-gray-900 dark:text-gray-100 font-medium hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors duration-200">Ofertas</RouterLink>

          <RouterLink to="/catering" class="text-ukiyo-gold font-bold border-b-2 border-ukiyo-gold">Catering</RouterLink>

          <RouterLink to="/contacto" class="text-gray-900 dark:text-gray-100 font-medium hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors duration-200">Contacto</RouterLink>
        </div>

        <!-- ACCIONES DERECHA -->
        <div class="flex items-center gap-4">
          <button @click="toggleTheme" class="p-2 text-gray-700 dark:text-gray-200 hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition duration-300">
            <span v-if="isDarkMode">☀️</span>
            <span v-else>🌙</span>
          </button>

          <RouterLink to="/cart" class="hidden md:flex items-center gap-2 bg-ukiyo-gold text-black px-5 py-2.5 rounded-full font-bold shadow-lg shadow-ukiyo-gold/20 hover:-translate-y-0.5 transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span v-if="cartCount === 0">Hacer Pedido</span>
            <span v-else>Tu Pedido ({{ cartCount }})</span>
          </RouterLink>

          <RouterLink to="/cart" class="md:hidden p-2 bg-ukiyo-gold text-black rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </RouterLink>

          <button @click="toggleMenu" class="md:hidden p-2 text-gray-900 dark:text-white hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors">
            <div class="w-6 h-0.5 bg-current mb-1 transition-all" :class="{'rotate-45 translate-y-1.5': isMenuOpen}"></div>
            <div class="w-6 h-0.5 bg-current mb-1 transition-all" :class="{'opacity-0': isMenuOpen}"></div>
            <div class="w-6 h-0.5 bg-current transition-all" :class="{'-rotate-45 -translate-y-1.5': isMenuOpen}"></div>
          </button>
        </div>
      </div>
    </div>

    <!-- MENÚ MÓVIL -->
    <div v-show="isMenuOpen" class="md:hidden bg-white dark:bg-ukiyo-nav border-b dark:border-gray-800 absolute w-full left-0 shadow-xl">
      <div class="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
        <RouterLink to="/" class="block px-3 py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors" @click="isMenuOpen = false">Inicio</RouterLink>
        <RouterLink to="/delivery" class="block px-3 py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors" @click="isMenuOpen = false">Menú</RouterLink>
        <RouterLink to="/ofertas" class="block px-3 py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors" @click="isMenuOpen = false">Ofertas</RouterLink>
        <RouterLink to="/catering" class="block px-3 py-2 text-lg font-bold text-ukiyo-gold border-b-2 border-ukiyo-gold" @click="isMenuOpen = false">Catering</RouterLink>
        <RouterLink to="/contacto" class="block px-3 py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-ukiyo-gold dark:hover:text-ukiyo-gold transition-colors" @click="isMenuOpen = false">Contacto</RouterLink>
      </div>
    </div>

    <button v-if="showScrollButton" @click="scrollToTop" class="fixed bottom-8 right-8 w-12 h-12 bg-ukiyo-gold text-black rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-white transition-all animate-bounce cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    </button>
  </nav>
</template>
