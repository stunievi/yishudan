import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import getData from './components/fetch'
// import './static/define.scss'
// import { Icon, Drawer, Input, Form, FormItem, Message, Button, Alert } from 'iview'
import Title from './components/Title.vue'
import Copy from './components/Copy.vue'
import Loading from './components/Loading.vue'
import iView from 'iview'
import _Global from './components/global.vue'
Vue.component('Title', Title)
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
// fetch
Vue.prototype.getData = getData
Vue.config.productionTip = false
Vue.prototype.GLOBAL = _Global
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
