import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		car: JSON.parse(sessionStorage.getItem("goods")) || [], // 购物车数据
		currentGoods: JSON.parse(sessionStorage.getItem("currGoods")) || [],
	},
	mutations: {
		//购物车所有商品
		addCart(state, goods) {
			if (state.car.length > 0) {
				console.log(state, goods)
				let pd = state.car.filter(item => {
					return item.titleData == goods.titleData && item.attr == goods.attr
				})
				if (pd.length != 0) {
					pd[0].num += goods.num
				} else {
					state.car.push(goods)
				}
			}else{
				state.car.push(goods)
			}
			sessionStorage.setItem("goods", JSON.stringify(state.car))
		},
		// 当前结算的
		activeSum(state, goods) {
			state.currentGoods = goods
			sessionStorage.setItem("currGoods", JSON.stringify(state.currentGoods))
		},
	},
	actions: {},
	modules: {}
})
