import { createRouter, createWebHistory } from 'vue-router'
import ProductsIndex from '@/Pages/Products/Index.vue'

const auth = () => {
  if (!localStorage.getItem('access_token')) return { name: 'login' }
}

const guest = () => {
  if (localStorage.getItem('access_token')) return { name: 'products.index' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'products.index' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/Pages/Auth/Login.vue'),
      beforeEnter: guest,
    },
    {
      path: '/products',
      name: 'products.index',
      component: ProductsIndex,
      beforeEnter: auth,
    },
    {
      path: '/categories',
      name: 'categories.index',
      component: () => import('@/Pages/Categories/Index.vue'),
      beforeEnter: auth,
    }
  ]
})

export default router
