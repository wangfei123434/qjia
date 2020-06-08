<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/buildingMaterials">找建材</router-link> |
	  <router-link to="/reservation">预约有理</router-link> |
    </div>
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
</style>
