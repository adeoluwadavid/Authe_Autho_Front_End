import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // lazy-loaded
    component: () => import('../views/AdminPage.vue')
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: () => import('../views/UserPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router