import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'

import {
	Swipe,
	SwipeItem 
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import {
	Tab,
	Tabs,
	Overlay 
} from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Overlay);

import { Search } from 'vant';
Vue.use(Search);

import { Sticky } from 'vant';
Vue.use(Sticky);

import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

//引入axios
import Axios from "axios"
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
