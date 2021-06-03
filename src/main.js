import Vue from 'vue'
import App from './App.vue'
import { store } from './components/store/store.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
