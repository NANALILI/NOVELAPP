import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import qs from 'qs'
import Vant from 'vant';
import 'vant/lib/index.css';



Vue.use(Vant);


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
