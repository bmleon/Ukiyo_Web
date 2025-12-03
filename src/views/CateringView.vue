<script setup lang="ts">
import { ref } from 'vue';

// Definimos la interfaz para el formulario (Buenas prácticas TS)
interface CateringForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string | number;
  eventType: string;
  message: string;
}

// Estado reactivo con tipado
const cateringForm = ref<CateringForm>({
  name: '',
  email: '',
  phone: '',
  date: '',
  guests: '',
  eventType: 'corporate',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitCatering = () => {
  isSubmitting.value = true;
  // Simulación de envío
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
    // Resetear tras 5 segundos
    setTimeout(() => showSuccess.value = false, 5000);
    // Limpiar formulario
    cateringForm.value = {
      name: '', email: '', phone: '', date: '', guests: '',
      eventType: 'corporate', message: ''
    };
  }, 1500);
};

// Datos de servicios
const services = [
  {
    title: 'Eventos Corporativos',
    desc: 'Impresiona a tus clientes y socios con una experiencia gastronómica de alto nivel. Coffee breaks, almuerzos ejecutivos y cenas de gala.',
    icon: '🏢'
  },
  {
    title: 'Bodas y Celebraciones',
    desc: 'El día más especial merece el mejor sabor. Estaciones de sushi en vivo (Showcooking) y bandejas premium para cócteles.',
    icon: '💍'
  },
  {
    title: 'Fiestas Privadas',
    desc: 'Lleva la experiencia Ukiyo a tu casa. Bandejas personalizadas y chefs a domicilio para cumpleaños y reuniones exclusivas.',
    icon: '🎉'
  }
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-ukiyo-dark transition-colors duration-300 font-sans pb-20">

    <!-- 1. HERO SECTION -->
    <div class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Imagen de fondo -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop"
          alt="Catering Ukiyo"
          class="w-full h-full object-cover opacity-90 dark:opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-ukiyo-dark via-black/40 to-black/60"></div>
      </div>

      <div class="relative z-10 text-center px-4 mt-10">
        <p class="text-white/90 text-sm md:text-lg uppercase tracking-[0.3em] mb-4 font-light">Experiencias Exclusivas</p>
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6">
          UKIYO <span class="text-ukiyo-gold">EVENTS</span>
        </h1>
        <p class="text-gray-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Más que comida, creamos atmósferas. Lleva la sofisticación de la alta cocina japonesa a tu próximo evento.
        </p>
      </div>
    </div>

    <!-- 2. SERVICIOS -->
    <div class="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white dark:bg-ukiyo-nav p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
        >
          <div class="text-4xl mb-4 bg-ukiyo-gold/10 w-16 h-16 flex items-center justify-center rounded-full">
            {{ service.icon }}
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- 3. GALERÍA / SHOWCASE -->
    <div class="max-w-7xl mx-auto px-4 mb-24">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="w-full md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
            El Arte del <span class="text-ukiyo-gold">Detalle</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Nuestras bandejas de catering no son solo comida, son piezas de arte diseñadas para impactar visualmente antes del primer bocado. Utilizamos flores comestibles, cortes precisos y una presentación minimalista que respeta la filosofía japonesa.
          </p>
          <ul class="space-y-3 text-gray-700 dark:text-gray-400 mb-8">
            <li class="flex items-center gap-2">
              <span class="text-ukiyo-gold">✓</span> Pescado fresco cortado el mismo día del evento.
            </li>
            <li class="flex items-center gap-2">
              <span class="text-ukiyo-gold">✓</span> Opciones veganas y sin gluten disponibles.
            </li>
            <li class="flex items-center gap-2">
              <span class="text-ukiyo-gold">✓</span> Vajilla y presentación premium incluida.
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 relative">
          <div class="absolute -inset-4 border-2 border-ukiyo-gold rounded-2xl transform translate-x-4 translate-y-4 z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1583623025817-d180a2158d79?q=80&w=800&auto=format&fit=crop"
            alt="Bandeja Sushi Catering"
            class="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </div>

    <!-- 4. FORMULARIO DE SOLICITUD -->
    <div class="max-w-3xl mx-auto px-4">
      <div class="bg-white dark:bg-ukiyo-nav rounded-2xl shadow-xl border-t-4 border-ukiyo-gold p-8 md:p-12">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Solicita tu Presupuesto</h2>
          <p class="text-gray-500 dark:text-gray-400">Cuéntanos sobre tu evento y diseñaremos una propuesta a medida.</p>
        </div>

        <form @submit.prevent="submitCatering" class="space-y-6">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nombre -->
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nombre / Empresa</label>
              <input v-model="cateringForm.name" type="text" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all">
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email de contacto</label>
              <input v-model="cateringForm.email" type="email" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all">
            </div>

            <!-- Fecha -->
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Fecha del Evento</label>
              <input v-model="cateringForm.date" type="date" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all">
            </div>

            <!-- Invitados -->
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nº Invitados (Aprox)</label>
              <input v-model="cateringForm.guests" type="number" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all">
            </div>
          </div>

          <!-- Tipo Evento -->
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Tipo de Evento</label>
            <select v-model="cateringForm.eventType" class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all">
              <option value="corporate">Evento Corporativo</option>
              <option value="wedding">Boda / Comunión</option>
              <option value="birthday">Cumpleaños / Fiesta Privada</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <!-- Mensaje -->
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Detalles adicionales</label>
            <textarea v-model="cateringForm.message" rows="4" class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-ukiyo-gold focus:border-transparent outline-none transition-all" placeholder="Cuéntanos qué necesitas..."></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 bg-ukiyo-gold hover:bg-yellow-600 text-black font-black tracking-wide uppercase rounded-lg shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50"
          >
            <span v-if="isSubmitting">Enviando solicitud...</span>
            <span v-else>Enviar Solicitud de Presupuesto</span>
          </button>

          <!-- Feedback -->
          <div v-if="showSuccess" class="p-4 bg-green-100 text-green-700 rounded-lg text-center font-bold animate-pulse">
            ¡Solicitud recibida! Nos pondremos en contacto contigo muy pronto.
          </div>

        </form>
      </div>
    </div>

  </div>
</template>
