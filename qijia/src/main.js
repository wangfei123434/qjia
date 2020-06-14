import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// mint-ui库
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios
// Vant
import Vant,{Lazyload} from 'vant'
import 'vant/lib/index.css'
// Vue.use(Lazyload, options);
Vue.use(Lazyload, {
  lazyComponent: true
});
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