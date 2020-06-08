import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BuildingMaterials from "../views/buildingMaterials/BuildingMaterials.vue"

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/buildingMaterials',
		name: 'BuildingMaterials',
		component: () => import('../views/buildingMaterials/BuildingMaterials.vue')
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
	}

]

const router = new VueRouter({
	routes
})

export default router
