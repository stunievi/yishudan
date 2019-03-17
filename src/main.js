import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
// import './static/define.scss'
// import { Icon, Drawer, Input, Form, FormItem, Message, Button, Alert } from 'iview'
import Title from './components/Title.vue'
import iView from 'iview'
Vue.component('Title', Title)
// Vue.component('Icon', Icon)
// Vue.component('Drawer', Drawer)
// Vue.component('Input', Input)
// Vue.component('Form', Form)
// Vue.component('FormItem', FormItem)
// Vue.component('Button', Button)
// Vue.component('Message', Message)
// Vue.component('Alert', Alert)
Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
