import Vue from 'vue'
import router from 'vue-router'
import HomeView from '@/views/Home.vue'
import FilterView from '@/views/Filter.vue'

Vue.use(router);

export default new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filter',
      name: 'filter',
      component: FilterView
    }
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


