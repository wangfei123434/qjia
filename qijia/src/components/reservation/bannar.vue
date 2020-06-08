<template>
	<!-- 轮播图 -->
	<div class="bannar">
		<mt-swipe :auto="2000" :show-indicators="false" class="swipe">
			<mt-swipe-item v-for="(item,index) in swiperSrc" :key="index">
				<img :src="item" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
	
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/css/swiper.css';
	export default {
		name: 'banner',
		data:function(){
			return {
				swiperSrc:[]
			}
		},
		mounted(){
			this.getSwiperData()
		},
		methods:{
			getSwiperData(){
				this.$axios.get("/data/reservation/reservation.json")
				.then(res => {
					console.log(res)
					this.swiperSrc = res.data.data.swiperUrl
				})
				.catch(err => {
					console.log(err)
				})
			}
		}
		
	}
</script>

<style lang="less">
	@import  url("../../assets/css/reservation/swiper.css");
</style>
