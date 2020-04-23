import Vue from 'vue'
import VueRouter from 'vue-router'
import BookMall from '../views/BookMall.vue'
import BookShelf from '../views/BookShelf.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import findPWD from '../views/ForgetPWD.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bookmall',
    component: BookMall
  },
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: BookShelf
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/findpwd',
    name: 'findpwd',
    component: findPWD
  },
  

]

const router = new VueRouter({
  routes
})

export default router
