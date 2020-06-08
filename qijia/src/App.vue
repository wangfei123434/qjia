<template>
  <div id="app">
<<<<<<< HEAD
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/buildingMaterials">找建材</router-link> |
	  <router-link to="/reservation">预约有理</router-link> |
    </div>
>>>>>>> 3c8224aa2e32fb052be9d066a81565a055f5fc74
    <router-view/>
  </div>
</template>

<script>
	import {obj} from "./utils.js"
	export default {
		name:"App",
		mounted() {
			obj.setRem()
		}
	}
</script>

<style>
<<<<<<< HEAD
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
	font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  display: inline-block;
  color: #000;
  text-decoration: none;
}
=======
	*{
		margin: 0;
		padding: 0;
	}
   body {
   	font-size: 16px;
   }
>>>>>>> 3c8224aa2e32fb052be9d066a81565a055f5fc74
</style>
