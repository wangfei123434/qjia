<template>
	<div class="searchOverlay">
		<van-popup v-model="searchOverlay"  position="right">
			<ul>
				<li v-for="(item,index) in searchOverlay_data" :key="index">
					{{ item }}
				</li>
			</ul>
		</van-popup>
	</div>
</template>

<script>
	export default {
		name:"searchOverlay",
		data:function(){
			return {
				searchOverlay_data:[
					"齐家全名家装节",
					"装修分期贷",
					"只能预算报价",
					"安心家装礼",
					"装修4999元红包",
					"装修效果图",
					"0元户型设计",
					"装修封装阳台价格",
					"卧室衣柜定做号码"
				],
				searchOverlay:false
			}
		}
	}
</script>

<style lang="less">
	.searchOverlay{
		background-color: white;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		ul{
			width: 100%;
			display: flex;
			li{
				background-color: #f5f5f5;
				margin-left: 20/100rem;
			}
		}
	}
</style>
