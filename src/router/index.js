import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Reservation from '../views/Reservation.vue'
import Cancel from '../views/Cancel.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
