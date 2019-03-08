import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
// import './static/define.scss'
import { Icon, Drawer } from 'iview'
import Title from './components/Title.vue'
Vue.component('Title', Title)
Vue.component('Icon', Icon)
Vue.component('Drawer', Drawer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
