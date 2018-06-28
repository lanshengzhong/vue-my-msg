import Vue from 'vue'
import App from './App.vue'
import vueMyMsg from './lib/index.js'
Vue.use(vueMyMsg)

new Vue({
  el: '#app',
  render: h => h(App)
})
