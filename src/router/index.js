import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import product from '@/components/product/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/product',
      component: product
    }
  ]
})
