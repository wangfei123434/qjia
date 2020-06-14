<template>
	<div class="tabbar">
		<van-tabbar v-model="active" route>
			<van-tabbar-item icon="wap-home-o" badge="" to="/afterLoginIndex">商城首页</van-tabbar-item>
			<van-tabbar-item icon="bag-o" to="/found">发现</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" :badge="$store.state.car.length" to="/car">购物车</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: "tabbar",
		data() {
			return {
				active: 0,
				icon: {
					active: 'https://img.yzcdn.cn/vant/user-active.png',
					inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
				},
			};
		},
	}
</script>

<style>
	
</style>
