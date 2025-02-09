import { createRouter, createWebHistory } from 'vue-router'
import New from '../views/New.vue'
import New2 from '../views/New2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'New',
      component: New,
    },
    {
      path: '/New2',
      name: 'New2',
      component: New2,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
