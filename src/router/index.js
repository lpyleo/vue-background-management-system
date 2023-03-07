import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Index.vue'
import Login from '../views/Login.vue'

import Dashboard from '../views/home/dashboard/Index.vue'
import List from '../views/home/list/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home/dashboard'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'list',
        name: 'List',
        component: List
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
