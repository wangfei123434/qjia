<template>
	<div class="my">
		登录后我的页面<br/>
		{{uname}}
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	export default {
		name:"my",
		data(){
			return{
				uname:""
			}
		},
		components:{
			Tabbar
		},
		mounted(){
    		this.uname = sessionStorage.getItem("uname");
		}
	}
</script>

<style>
</style>
