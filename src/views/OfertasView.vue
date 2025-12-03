<script setup>
// Página de Ofertas (Temporalmente vacía)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-ukiyo-dark transition-colors duration-300 font-sans pb-20">

    <!-- CABECERA -->
    <div class="pt-16 pb-10 text-center px-4">
      <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-widest">
        Ofertas <span class="text-ukiyo-gold">Especiales</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
        Mantente atento a nuestras próximas promociones exclusivas.
      </p>
    </div>

    <!-- MENSAJE DE "NO HAY OFERTAS" -->
    <div class="flex flex-col items-center justify-center py-20 text-center px-4">
      <div class="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-4xl animate-pulse">
        🎁
      </div>
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">No hay ofertas activas en este momento</h3>
      <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
        Estamos preparando nuevas experiencias gastronómicas para ti. Vuelve pronto para descubrir nuestros packs especiales.
      </p>

      <RouterLink to="/delivery" class="px-8 py-3 bg-ukiyo-gold text-black font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all border-2 border-ukiyo-gold">
        Ver Carta Habitual
      </RouterLink>
    </div>

  </div>
</template>
