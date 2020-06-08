<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入axios
import Axios from "axios"
// import $ from "jquery"
//挂载到原型中   vue的实例上有了
Vue.prototype.$axios=Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios
// Vant
import Vant from 'vant'
import './plugins/element.js'
Vue.use(Vant)
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// iconfont
import './assets/myqijiafont/iconfont.js'
import $ from 'jquery'

// mint-ui库
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
>>>>>>> c76122b522511c76fc68199160efa980652ebfb6
