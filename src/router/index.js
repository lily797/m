import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/shouye',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/shouye.vue')
      },
      {
        path:'/huodong',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/huodong.vue')
      },
      {
        path: '/guanli',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/guanli.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
