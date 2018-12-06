import Vue from 'vue'
import Vuex from 'vuex'
import App from './src/App.vue'
import router from './src/router/router'
import store from './src/store/store'
import './src/registerServiceWorker'

Vue.config.productionTip = false

router.afterEach(route => {
  if (route.name) {
    document.title = 'zzj-' + route.name
  } else {
    document.title = '个人项目'
  }
})
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
