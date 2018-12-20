import Vue from 'vue'
import Vuex from 'vuex'
import App from './src/App.vue'
import router from './src/router/router'
import store from './src/store/store'
import './src/registerServiceWorker'

// import MuseUI from 'muse-ui'
import VueLazyload from 'vue-lazyload'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false
// Vue.use(MuseUI)
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1424326754,4004839403&fm=26&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545295540790&di=14efed39ce4bac8486a11ff0b4bb4530&imgtype=0&src=http%3A%2F%2Fi1.wp.com%2Fsoftwareengineeringdaily.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fvuejs.jpg%3Fresize%3D685%2C260%26ssl%3D1',
  attempt: 1
})

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
