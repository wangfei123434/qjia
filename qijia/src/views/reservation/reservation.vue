<template>
	<div class="box">
		<div class="reservation">
			<!-- 头部 -->
			<header class="my_header">
				<router-link to="renovation" class="left"></router-link>
				居众装饰.品质家装
				<a class="right"></a>
			</header>
			<!-- 轮播图  组件 -->
			<Banner></Banner>
		    <!-- 公司简介 -->
		    <div class="company_brief">
				<h2>
				    <img src="../../assets/images/预约有礼/mzhong.jpg" />
					居众装饰·品质家装
				</h2>
				<p class="star">
					<img src="../../assets/images/预约有礼/shop-advanced.png" />
					<van-rate v-model="value" readonly  color="#ee0a24"/>
				</p> 
				<p class="number">
					<img src="../../assets/images/预约有礼/years-icon-1.png" />
					<span><i>收录6年</i>设计 9.5 | 施工 9.5 | 服务 9.9</span>
				</p>
				<p class="introduce">
					<span></span>
					公司介绍 | 门店实景 资质荣誉
					<i></i>
				</p>
			</div>
		</div>
		<div class="contanier">
			<!-- 优惠促销 -->
			<div class="promotion">
				<h3>优惠促销</h3>
				<div class="discount_coupon">
					<div class="left">
						<p class="left_p1">全店通用</p>
						<h4>提供全方位验房、全屋估算...</h4>
						<p class="left_p2">立即领取</p>
					</div>
					<div class="right">
						<p class="right_p1">全店通用</p>
						<h2>￥4999</h2>
						<p class="right_p2"><span>满10万元可用</span></p>
						<p class="right_p3">立即领取</p>
					</div>
				</div>
			</div>
		    <div class="nav1">
				<van-tabs v-model="active" animated >
				    <van-tab v-for="(item,index) in nav1Data.nav1" :key="index" :title="item.title" >
					    <div v-for="(itemChild,indexChild) in item.content" :key="indexChild" class="child">
						    <h4>{{ itemChild.title_child }}</h4>
							<p class="content">{{ itemChild.content_child }}</p>
							<p class="price">{{ itemChild.tabel1 }}</p>
							<p class="tabel">{{ itemChild.tabel2 }} ></p>
							<span>预约</span>
					    </div>
				    </van-tab>
				</van-tabs>
			</div>
		    <!-- 最底部列表组件 -->
			<Footerlist></Footerlist>
		</div>
		<!-- 固定底部组件 -->
		<Fixedbottom></Fixedbottom>
	</div>
	
	
</template>

<script>
	import Banner from "../../components/reservation/bannar.vue"
	import Footerlist from "../../components/reservation/footerlist.vue"
	import Fixedbottom from "../../components/reservation/fixedbottom.vue"
	export default {
		name:"reservation",
		data:function(){
			return {
				value: 4.5,
				active:"",
				nav1Data:{}
			}
		},
		components:{
			Banner,
			Footerlist,
			Fixedbottom
		},
		mounted(){
			this.getReservationData()
		},
		methods:{
			getReservationData(){
				this.$axios.get("/data/reservation/reservation.json")
				.then(res => {
					this.nav1Data = res.data.data
					console.log(res.data.data)
				})
			}
		}
	}
</script>

<style lang="less">
	@import  url("../../assets/css/reservation/reservation.less");
</style>
