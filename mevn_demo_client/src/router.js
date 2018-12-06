import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
})

/*
Vue.use(VueRouter)
// Vue.use(VueI18n)

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: `home`,
      component: Home,
    },
    {
      path: `/*`,
      redirect: `/`,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
*/
