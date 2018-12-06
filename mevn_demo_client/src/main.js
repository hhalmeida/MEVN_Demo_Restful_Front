import Vue from 'vue'
import router from './router'
//import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount(`#app`)
