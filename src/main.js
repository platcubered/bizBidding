import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/routes/index.js'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
