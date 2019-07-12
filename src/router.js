import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
// import Shudan from './views/other/Shudan.vue'
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
          // pc 用户首页子页面
          children: [
            {
              path: '/',
              // name: '/',
              component: Home
            },
            {
              name: 'recommendationlist',
              path: 'recommendationlist',
              component: () => import('./views/home/RecommendationList.vue')
              // redirect: {
              //   name: 'recommendationlist'
              // }
            },
            {
              name: 'homeitemthree',
              path: 'homeitemthree',
              component: () => import('./views/home/HomeItemThree.vue')
            },
            {
              name: 'homeitemfour',
              path: 'homeitemfour',
              component: () => import('./views/home/HomeItemFour.vue')
            }
          ]
        },
        // mobile M首页
        {
          name: 'mrecommendationlist',
          path: 'mrecommendationlist',
          component: () => import('./views/home/RecommendationList.vue')
        },
        {
          name: 'mhomeitemthree',
          path: 'mhomeitemthree',
          component: () => import('./views/home/HomeItemThree.vue')
        },
        {
          name: 'mhomeitemfour',
          path: 'mhomeitemfour',
          component: () => import('./views/home/HomeItemFour.vue')
        },
        {
          name: 'articledetail',
          path: 'articledetail',
          component: () => import('./views/article/ArticleDetail.vue')
          // redirect: {
          //   name: 'recommendationlist'
          // }
        },
        {
          name: 'searchresult',
          path: 'searchresult',
          component: () => import('./views/other/SearchView.vue')
          // children: [
          //   {
          //     path: '/',
          //     redirect: '/SearchLeftItem'
          //   },
          //   {
          //     path: '/SearchLeftItem',
          //     component: () => import('./views/other/SearchLeftItem.vue')
          //   }
          // ]
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
      path: '/user',
      name: 'user',
      component: () => import('./views/frameworks/UserLoginStatu.vue'),
      children: [
        {
          // 登陆检查
          path: 'login',
          name: 'login',
          component: () => import('./views/user/Login.vue')
        },
        {
          // 登陆检查
          path: 'register',
          name: 'register',
          component: () => import('./views/user/Register.vue')
        },
        {
          // 登陆检查
          path: 'home',
          component: () => import('./views/frameworks/UserTitleView.vue'),
          children: [
            {
              path: '/',
              component: () => import('./views/frameworks/UserContentView.vue'),
              // 用户后台子页面
              children: [
                {
                  path: '/',
                  redirect: '/userinfo'
                },
                {
                  path: '/userinfo',
                  component: () => import('./views/user/UserInfo.vue')
                },
                {
                  path: '/Collage',
                  component: () => import('./views/user/Collage.vue')
                },
                {
                  path: '/ArtiManage',
                  component: () => import('./views/user/ArtiManage.vue')
                },
                {
                  path: '/Publish',
                  component: () => import('./views/user/Publish.vue')
                }
              ]
            },
            {
              path: '/MCollage',
              component: () => import('./views/user/Collage.vue')
            },
            {
              path: '/MArtiManage',
              component: () => import('./views/user/ArtiManage.vue')
            },
            {
              path: '/MPublish',
              component: () => import('./views/user/Publish.vue')
            }
          ]
        }
      ]
    }
  ]
})
