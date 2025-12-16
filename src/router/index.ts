import { createRouter, createWebHistory } from 'vue-router'

// Importamos TODAS las vistas que hemos creado
import HomeView from '../views/HomeView.vue'
import MenuDelivery from '../views/MenuDelivery.vue'
import CateringView from '../views/CateringView.vue'
import OfertasView from '../views/OfertasView.vue'
import ContactoView from '../views/ContactoView.vue'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const router = createRouter({
  // Esto lee la base '/Ukiyo_Web/' de vite.config.ts automáticamente
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: MenuDelivery
    },
    {
      path: '/catering',
      name: 'catering',
      component: CateringView
    },
    {
      path: '/ofertas',
      name: 'ofertas',
      component: OfertasView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/conocenos',
      redirect: '/contacto'
    },
    {
      path: '/condiciones',
      name: 'condiciones',
      component: TermsView
    },
    {
      path: '/privacidad',
      name: 'privacidad',
      component: PrivacyView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
