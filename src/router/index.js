import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Diablo3 - Vue.js - Javier Saura',
      metaTags: [
        {
          name: 'description',
          content: 'App realializada por Javier Saura en Vue.js'
        },
        {
          property: 'og:description',
          content: 'App realializada por Javier Saura en Vue.js'
        }
      ]
    }
  },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
