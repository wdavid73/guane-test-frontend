import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from "../views/Details.vue"
import Episode from "../views/Episode.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/episode/:id',
    name: 'Episode',
    component: Episode
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
