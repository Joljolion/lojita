import Contato from '@/views/Contato.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Sobre from '@/views/Sobre.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path:'/sobre-nos',
      name:'Sobre',
      component: Sobre
    },
    {
      path:'/contato',
      name: 'Contato',
      component: Contato
    }
  ],
})

export default router
