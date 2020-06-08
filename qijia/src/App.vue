<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/buildingMaterials">buildingMaterials</router-link>
			<router-link to="/renovation">aaaa</router-link>
			<router-link to="/local">local</router-link>
			<router-link to="/business">business</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
	import {
		obj
	} from "./utils.js"
	export default {
		name: "App",
		mounted() {
			obj.setRem()
		}
	}
</script>

<style>
	body {
		font-size: 16px;
	}
</style>
