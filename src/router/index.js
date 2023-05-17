import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入路由对象
import TodoView from '@/views/TodoView'
import ArticleView from '@/views/ArticleView'
// import TheCounter from '@/views/TheCounter.vue'

Vue.use(VueRouter)

const routes = [
  
  // {
  //   path: '/',
  //   name: '',
  //   component: TheCounter
  // },
  { path: '/todo', component: TodoView },
  { path: '/article', component: ArticleView },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
