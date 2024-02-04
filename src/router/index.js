import { createRouter, createWebHistory } from 'vue-router'
import ProductsIndex from '@/Pages/Products/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'products.index' },
    },
    {
      path: '/products',
      name: 'products.index',
      component: ProductsIndex,
    },
    {
      path: '/categories',
      name: 'categories.index',
      component: () => import('@/Pages/Categories/Index.vue')
    }
  ]
})

export default router
