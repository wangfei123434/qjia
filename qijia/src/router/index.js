import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'
import MustBuy1 from "../components/building/mustBuy1.vue"
import MustBuy2 from "../components/building/mustBuy2.vue"
import MustBuy3 from "../components/building/mustBuy3.vue"
import MustBuy4 from "../components/building/mustBuy4.vue"
import MustBuy5 from "../components/building/mustBuy5.vue"
import MustBuy6 from "../components/building/mustBuy6.vue"
import MustBuy7 from "../components/building/mustBuy7.vue"
import MustBuy8 from "../components/building/mustBuy8.vue"
import { getCookie } from '@/util/util'
Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/home/recommend",
	},
	{
		path: '/home',
		redirect: "/home/recommend",  //重定向
		name: 'Home',
		component: Home,
		//配置首页的二级路由
		children: [
			{ path: "recommend", component: () => import('../components/home/recommend.vue') },
			{ path: "shenzhen", component: () => import('../components/home/shenzhen.vue') },
			{ path: "brand", component: () => import('../components/home/brand.vue') },
			{ path: "tvlive", component: () => import('../components/home/tvlive.vue') },
			{ path: "strategy", component: () => import('../components/home/strategy.vue') },
			{ path: "housing", component: () => import('../components/home/housing.vue') },
			{ path: "meitu", component: () => import('../components/home/meitu.vue') },
			{ path: "diray", component: () => import('../components/home/diray.vue') },
			{ path: "case", component: () => import('../components/home/case.vue') },
			{ path: "topic", component: () => import('../components/home/topic.vue') },
			{ path: "vedio", component: () => import('../components/home/vedio.vue') },
			{ path: "logsorting", component: () => import('../components/home/logsorting.vue') },
			{ path: "fengshui", component: () => import('../components/home/fengshui.vue') }
		]
	},
	{
		path: '/renovate',
		// redirect:"/broadcast/films",  //重定向
		name: 'Renovate',
		component: () => import(/* webpackChunkName: "about" */ '../views/Renovate/renovate.vue'),
	},
	{
		path: '/choosematerials',
		name: 'Choosematerials',
		component: () => import(/* webpackChunkName: "about" */ '../views/Choosematerials/choosematerials.vue')
	},

	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */'../components/login.vue')
	},
	{
		path: '/reservation',
		name: 'Reservation',
		component: () => import(/* webpackChunkName: "about" */'../views/reservation/reservation.vue')
	},
	{
		path: '/renovation',
		name: 'Renovation',
		component: () => import('../views/Renovation/renovation.vue')
	},
	{
		path: '/Local',
		name: 'local',
		component: () => import('../views/Local/local.vue')
	},
	{
		path: '/Business',
		name: 'business',
		component: () => import('../views/Business/business.vue')
	}, {
		path: '/mine',
		name: 'Mine',
		component: () => import('../views/mine/Mine.vue')
	}, {
		path: '/freesheji',
		name: 'Freesheji',
		component: () => import('../views/Home/freesheji.vue')
	}, {
		path: '/community',
		name: 'Community',
		redirect: '/community/forum',
		component: () =>
			import('../views/Community/Community.vue'),
		children: [
			{
				path: '/community/question', component: () => import('../components/community/question'),
				redirect: '/community/question/remen',
				children: [{ path: '/community/question/remen', component: () => import('../components/community/remen') }]
			},
			{ path: '/community/forum', component: () => import('../components/community/forum') }
		]
	},
	{
		path: '/buildingMaterials',
		name: 'BuildingMaterials',
		component: () => import('../views/buildingMaterials/BuildingMaterials.vue'),
		children: [
			{ path: "/buildingMaterials", redirect: "/buildingMaterials/mustbuy1" },
			{ path: "mustbuy1", component: MustBuy1 },
			{ path: "mustbuy2", component: MustBuy2 },
			{ path: "mustbuy3", component: MustBuy3 },
			{ path: "mustbuy4", component: MustBuy4 },
			{ path: "mustbuy5", component: MustBuy5 },
			{ path: "mustbuy6", component: MustBuy6 },
			{ path: "mustbuy7", component: MustBuy7 },
			{ path: "mustbuy8", component: MustBuy8 }
		]
	},
	{
		path: "/afterLoginIndex",
		name: "AfterLoginIndex",
		component: () => import("../views/AfterLoginIndex/afterLoginIndex.vue")
	},
	{
		path: "/found",
		name: "Found",
		component: () => import("../views/Found/found.vue")
	},
	{
		path: "/car",
		name: "Car",
		component: () => import("../views/Car/car.vue")
	},
	{
		path: "/my",
		name: "My",
		component: () => import("../views/My/my.vue")
	},
	{
		path: "/shopping",
		name: "Shopping",
		component: () => import("../views/Shopping/shopping.vue")
	},
	{
		path: "/closeAnAccount",
		name: "CloseAnAccount",
		component: () => import("../views/CloseAnAccount/closeAnAccount.vue")
	},
	{
		path: '/meitu',
		name: 'Meitu',
		component: () => import('../components/home/meitu.vue')
	},
	{
		path: "/findpwd",
		name: "findpwd",
		component: () => import('../components/findpwd.vue')
	},
	{
		path: "/register",
		name: "register",
		component: () => import('../components/register.vue')
	}

]

const router = new VueRouter({
	routes,
	mode: 'history',//就是去掉了#号 默认是hash模式是加了#号的
})
router.beforeEach((to, from, next) => {
	let msg = getCookie("uname")
	if (to.path == "/login" && !msg) {
		next()
	} else if (to.path == "/login" && msg) {
		next({
			path: "/mine"
		})
	} else {
		next()
	}

})
export default router