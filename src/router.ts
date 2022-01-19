import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
const About = { template: '<div>About</div>' }

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
