import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home/home.vue'
import BuildingMaterials from "../views/buildingMaterials/BuildingMaterials.vue"

Vue.use(VueRouter)

const routes = [
=======
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
>>>>>>> 3c8224aa2e32fb052be9d066a81565a055f5fc74
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/buildingMaterials',
    name: 'BuildingMaterials',
    component: () => import('../views/buildingMaterials/BuildingMaterials.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/Mine.vue')
  },
  {
    path: '/freesheji',
    name: 'Freesheji',
    component: () => import('../views/Home/freesheji.vue')
  },
  {
    path: '/community',
    name: 'Community',
    redirect: '/community/forum',
    component: () => import('../views/community/Community.vue'),
    children: [
      {
        path: '/community/question', component: () => import('../components/community/question'),redirect: '/community/question/remen',
        children: [{path:'/community/question/remen',component:()=>import('../components/community/remen')}]
      },
      { path: '/community/forum', component: () => import('../components/community/forum') }
    ]
  }
=======
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

>>>>>>> 3c8224aa2e32fb052be9d066a81565a055f5fc74
]

const router = new VueRouter({
  routes
})

export default router
