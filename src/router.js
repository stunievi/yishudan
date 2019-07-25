import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
// import Shudan from './views/other/Shudan.vue'
import HomeTitleView from './views/frameworks/HomeTitleView.vue'
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
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
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
          name: 'adv',
          path: 'adv',
          component: () => import('./views/home/Advertisement.vue')
        },
        {
          name: 'downLoad_azw',
          path: 'downLoad_azw/:cateId',
          component: () => import('./views/home/DownLoadAZW.vue')
        },
        //   ]
        // },
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
        },
        {
          name: 'articledetail',
          path: '/articledetail/:articleId',
          component: () => import('./views/article/ArticleDetail.vue')
        },
        {
          name: 'bookdetail',
          path: '/bookdetail/:bookId',
          component: () => import('./views/other/BookInfo.vue')
        }
      ]
    },
    {
      // 登陆检查
      path: '/login',
      name: 'login',
      component: () => import('./views/user/Login.vue')
    },
    {
      // 登陆检查
      path: '/register',
      name: 'register',
      component: () => import('./views/user/Register.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('./views/frameworks/UserLoginStatu.vue'),
      children: [
        {
          // 用户中心
          path: 'center',
          meta: { requiresAuth: true },
          component: () => import('./views/frameworks/UserTitleView.vue'),
          children: [
            {
              path: '/',
              redirect: 'userinfo'
            },
            {
              path: 'userinfo',
              name: 'userinfo',
              meta: { requiresAuth: true },
              component: () => import('./views/user/UserInfo.vue')
            },
            {
              path: 'Collage',
              name: 'Collage',
              meta: { requiresAuth: true },
              component: () => import('./views/user/Collage.vue')
            },
            {
              path: 'ArtiManage',
              name: 'ArtiManage',
              meta: { requiresAuth: true },
              component: () => import('./views/user/ArtiManage.vue')
            },
            {
              path: 'Publish',
              name: 'Publish',
              meta: { requiresAuth: true },
              component: () => import('./views/user/Publish.vue')
            }
          ]
        }
        // {
        //   // 登陆检查
        //   path: 'center',
        //   name: 'home',
        //   component: () => import('./views/frameworks/UserTitleView.vue'),
        //   children: [
        //     {
        //       path: '/',
        //       component: () => import('./views/frameworks/UserContentView.vue'),
        //       // 用户后台子页面
        //       children: [
        //         {
        //           path: '/',
        //           redirect: '/userinfo'
        //         },
        //         {
        //           path: '/userinfo',
        //           component: () => import('./views/user/UserInfo.vue')
        //         },
        //         {
        //           path: '/Collage',
        //           component: () => import('./views/user/Collage.vue')
        //         },
        //         {
        //           path: '/ArtiManage',
        //           component: () => import('./views/user/ArtiManage.vue')
        //         },
        //         {
        //           path: '/Publish',
        //           component: () => import('./views/user/Publish.vue')
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  ]
})
