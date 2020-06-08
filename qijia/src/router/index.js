import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BuildingMaterials from "../views/buildingMaterials/BuildingMaterials.vue"

import MustBuy1 from "../components/mustBuy1.vue"
import MustBuy2 from "../components/mustBuy2.vue"
import MustBuy3 from "../components/mustBuy3.vue"
import MustBuy4 from "../components/mustBuy4.vue"
import MustBuy5 from "../components/mustBuy5.vue"
import MustBuy6 from "../components/mustBuy6.vue"
import MustBuy7 from "../components/mustBuy7.vue"
import MustBuy8 from "../components/mustBuy8.vue"


Vue.use(VueRouter)

  const routes = [
  {
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
    component: () => import('../views/buildingMaterials/BuildingMaterials.vue'),
	children:[
		{
			path:"/buildingMaterials",
			redirect:"/buildingMaterials/mustbuy1"
		},
		{
			path:"mustbuy1",
			component: MustBuy1
		},
		{
			path:"mustbuy2",
			component: MustBuy2
		},
		{
			path:"mustbuy3",
			component:MustBuy3
		},
		{
			path:"mustbuy4",
			component: MustBuy4
		},
		{
			path:"mustbuy5",
			component: MustBuy5
		},
		{
			path:"mustbuy6",
			component: MustBuy6
		},
		{
			path:"mustbuy7",
			component:MustBuy7
		},
		{
			path:"mustbuy8",
			component: MustBuy8
		}
	]
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/reservation/reservation.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
