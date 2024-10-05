import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News   from '../views/News.vue'
import New   from '../views/New.vue'

import Product from '../views/Product.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component:News
    },
    {
      path: '/news/:id',
      name: 'new',
      component:New
    },
    {
      path: '/product',
      name: 'product',
      component:Product
    },
  ]
})


router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  // to and from are both route objects.
  NProgress.done()
  
})
export default router
