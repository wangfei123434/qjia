<template>
	<div class="local">
		<div class="chart">
			<img src="../../assets/images/局部装修/top.png" alt="">
		</div>
		<ul class="ul">
			<li>
				<h2>厨房翻新</h2>
			</li>
			<li>
				<h2 class="i">卫生间翻新</h2>
			</li>
			<li>
				<h2>墙面刷新</h2>
			</li>
			<li>
				<h2 class="i">卧室翻新</h2>
			</li>
			<li>
				<h2>阳台翻新</h2>
			</li>
			<li >
				<h2 class="i">更多局部服务</h2>
			</li>
		</ul>
		<div class="hardcover">
			<span class="fn1"><img src="../../assets/images/局部装修/before.png" alt=""></span>
			<h2>精装局势案例</h2>
			<span class="fn1"><img src="../../assets/images/局部装修/after.png" alt=""></span>
		</div>
		
		<van-tabs animated>
		  <van-tab v-for="(item,index) in list.option" :title="item.srr" class="tab" :key="index">
		    <img :src="item.imgSrc" alt="">
		  </van-tab>
		</van-tabs>
		
		<div class="hardcoverone">
			<span><img src="../../assets/images/局部装修/before.png" alt=""></span>
			<h2>VR实景案例</h2>
			<span><img src="../../assets/images/局部装修/after.png" alt=""></span>
		</div>
		
	     <div class="swprie">
		<mt-swipe>
		  <mt-swipe-item><img src="../../assets/images/局部装修/cf.png" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/images/局部装修/cf2.png" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/images/局部装修/cf3.png" alt=""></mt-swipe-item>
		   <mt-swipe-item><img src="../../assets/images/局部装修/cf4.png" alt=""></mt-swipe-item>
		</mt-swipe>
		</div>
		<div class="hardcoverone">
			<span><img src="../../assets/images/局部装修/before.png" alt=""></span>
			<h2>标准化成品保护</h2>
			<span><img src="../../assets/images/局部装修/after.png" alt=""></span>
		</div>
		
		<div class="thming">
			<img src="../../assets/images/局部装修/six.jpg" alt="">
		</div>
		
		<div class="hardcoverone">
			<span><img src="../../assets/images/局部装修/before.png" alt=""></span>
			<h2>高标准环保材料</h2>
			<span><img src="../../assets/images/局部装修/after.png" alt=""></span>
		</div>
		
		<div class="thming">
			<img src="../../assets/images/局部装修/four.jpg" alt="">
		</div>
		
		<div class="hardcoverone">
			<span><img src="../../assets/images/局部装修/before.png" alt=""></span>
			<h2>口碑局装公司</h2>
			<span><img src="../../assets/images/局部装修/after.png" alt=""></span>
		</div>
		
		<ul class="list">
			<li v-for="(item,index) in arr.list" :key="index">
				<div class="left">
					<img :src="item.imgSrc" alt="">
				</div>
				<div class="right">
					<div class="rightone">
						<span>{{item.title}}</span>
						<span><img :src="item.right_top_bgSrc" alt=""></span>
					</div>
					<!-- 星星 -->
					<div class="xing">
						<span class="xingone"></span>
						<span class="xingtwo">好评率{{item.favorable_rate}}</span>
					</div>
					<!-- 设计 施工 服务 -->
					<div class="design">
						<span>设计{{item.design}} | </span>
						<span>施工{{item.roadwork}} | </span>
						<span>服务{{item.serve}} </span>
					</div>
					<!-- 三维设计 -->
					<div class="three">
						<a class="threeone" v-for="(itemone,index) in item.my_label" :key="index">
							{{itemone}}
						</a>
					</div>
		
					<hr />
					<div class="discount">
						<span class="discountone"></span>
						<span class="discounttwo">{{item.hui}}</span>
					</div>
					<div class="discount-a">
						<span class="discount-b"></span>
						<span class="discounttwo-c">{{item.juan}}</span>
					</div>
		
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'local',
		data:function(){
			return {
			  list:[],
			  arr:[]
			}
		},
		mounted(){
			this.getlocaldata()
			this.getrenovationdata()
		},
		methods:{
			getlocaldata(){
				this.$axios.get('data/局部装修/new.json')
				.then(res => {
					console.log(res)
					this.list = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
			},
			getrenovationdata() {
				this.$axios.get('/data/找装修/seekFinish.json')
					.then(res => {
						console.log(res)
						this.arr = res.data.data
					})
					.catch(err => {
						console.log(err)
					})
			}
		}
		}
</script>

<style scoped lang="less">
	
	@import url("../../assets/css/local.less");
</style>

