import Vue from 'vue'
import Router from 'vue-router'
import OaDashboard from './views/oa/Dashboard.vue'
import Cars from './views/xz/Cars.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OaDashboard',
      component: OaDashboard
    },
    {
      path: '/xz/cars',
      name: 'Cars',
      component: Cars
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
