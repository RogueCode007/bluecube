import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' 
import './index.css'

localStorage.setItem('user-token', process.env.VUE_APP_CODE)
axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
