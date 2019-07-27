import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import getData from './components/fetch'
// import './static/define.scss'
// import { Icon, Drawer, Input, Form, FormItem, Message, Button, Alert } from 'iview'
import Title from './components/HomeTitle.vue'
import UserTitle from './components/UserHomeTitle.vue'
import Copy from './components/Copy.vue'
import Loading from './components/Loading.vue'
import iView from 'iview'
import _Global from './components/global.vue'
Vue.component('Title', Title)
Vue.component('UserTitle', UserTitle)
Vue.component('Copy', Copy)
Vue.component('Loading', Loading)

// Vue.component('Icon', Icon)
// Vue.component('Drawer', Drawer)
// Vue.component('Input', Input)
// Vue.component('Form', Form)
// Vue.component('FormItem', FormItem)
// Vue.component('Button', Button)
// Vue.component('Message', Message)
// Vue.component('Alert', Alert)
Vue.use(iView)
// Vue.use(VueWechatTitle)
// fetch
Vue.prototype.getData = getData
Vue.config.productionTip = false
Vue.prototype.GLOBAL = _Global
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
var isLogin = localStorage.getItem('info') == null ? 1 : 0
router.beforeEach(function (to, from, next) {
  // 更改首页标题
  // console.log(to.  meta.title)
  if (to.meta.title) {
    document.title = to.meta.title + '--壹书单'
  }
  if (to.matched.some(T => T.meta.requiresAuth)) {
    if (isLogin) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
router.onReady((to) => {
  // console.log(to)
  if (to !== undefined) {
    // 更改首页标题
    if (to.meta.title) {
      document.title = to.meta.title + '--壹书单'
    }
    if (to.matched.some(T => T.meta.requiresAuth)) {
      // console.log('需要登录')
      if (isLogin) {
        router.replace({ path: '/login' })
      }
    }
  }
})
