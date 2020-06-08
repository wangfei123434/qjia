import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

// mint-ui库
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//vant库----选项卡
import "vant/lib/index.css"
import { Tab, Tabs } from 'vant';
import { Popup } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);

//vant库---懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Lazyload, {
  lazyComponent: true,
});

//vant库---评分的星星
import { Rate } from 'vant';
Vue.use(Rate);

//vant库---图片填充
import { Image as VanImage } from 'vant';
Vue.use(VanImage);

//vant库  search框
import { Search } from 'vant';
Vue.use(Search);

//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
