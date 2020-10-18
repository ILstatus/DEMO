import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home')
const List = () => import('../views/List')
const User = () => import('../views/User')
const Add = () => import('../views/Add')

const routes = [
  // {
  //   path: '/',
  //   redirect:'/'
  // },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: List,
      },
      {
        path: 'user',
        name: 'user',
        component: User
      },
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // 这个样式在链接被激活的时候才会显示（router-link自带）
  linkActiveClass: 'active',
  routes
})

export default router
