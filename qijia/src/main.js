import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios
// Vant
import Vant from 'vant'
import 'vant/lib/index.css'
import './plugins/element.js'
Vue.use(Vant)
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// iconfont
import './assets/myqijiafont/iconfont.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
