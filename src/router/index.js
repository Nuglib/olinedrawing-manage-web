import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/TheLogin'
import Container from '@/container/Container'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [
        {path: 'dashboard', name: '首页', component: Dashboard, },
        {path: 'article', name: '文章', component: Article, },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
