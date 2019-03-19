import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Shudan from './views/other/Shudan.vue'
import HomeTitleView from './views/frameworks/HomeTitleView.vue'
import HomeContentView from './views/frameworks/HomeContentView.vue'
// import Login from './views/Login.vue'
// import Loginstate from './views/Loginstate.vue'
Vue.use(Router)
// const rview = { template:
//   `<div >
//     qwe
//     <Title />
//     <router-view />
//   </div>`
// }
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomeTitleView,
      children: [
        {
          path: '/',
          component: HomeContentView,
          children: [
            {
              path: '/',
              component: Home
            }
          ]
        },
        {
          name: 'recommendationlist',
          path: 'recommendationlist',
          component: () => import('./views/home/RecommendationList.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/other/About.vue')
    },
    {
      path: '/shudan',
      name: 'shudan',
      component: Shudan
    },
    // 登陆检查
    {
      path: '/user',
      component: () => import('./views/frameworks/AllView.vue'),
      children: [
        {
          // 登陆检查
          path: 'login',
          name: 'login',
          component: () => import('./views/user/Login.vue')
        }
      ]
    }
  ]
})
