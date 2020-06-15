<template>
  <div class="myBox">
  		<!--头部  -->
  		<header class="myHeader">
  			<a href="#" class="left_a" @click="goback"></a>
  			选建材
  			<a href="#" class="right_a" is-link @click="overlay=true" ></a>
  		</header>
  		<!-- 搜索框 -->
  		<div class="search">
  			<input type="text" placeholder="输入建材或品牌" @click="searchOverlay=true" />
  			<span>
  				<img src="../../assets/images/选建材/search-icon-n.png" />
  			</span>
  		</div>
  		<!-- 广告图片   新加了东西  fnLogin（）-->
  		<div class="advert" >
  			<img src="../../assets/images/选建材/zq7OryTKuT1HzbRfzgGneMH18Toq.jpg" />
  		</div>
  		<!-- 导航 -->
  		<div class="nav">
  			<a v-for="(item,index) in buildingMaterials_data.lista" :key="index" @click="fnLogin()">
  				<i></i>
  				<br />
  				{{ item }}
  			</a>
  		</div>
  		<!-- 选建材 -->
  		<div class="select_jc">
  			<h2>选建材</h2>
  			<img src="../../assets/images/选建材/around-banner.png" />
  		</div>
  		<!-- 轮播图切换 -->
  		<div class="my_swipe">
  			<!-- 导航轮播 -->
  			<!-- <mt-swipe :auto="0" :show-indicators="false" class="swipe1">
  				<mt-swipe-item v-for="(item,index) in buildingMaterials_data.listb">
  					{{ item.nav }}
  				</mt-swipe-item>
  			</mt-swipe> -->
  			<!-- <van-tabs v-model="activeName">
  			  <van-tab title="开工第一周" name="a"></van-tab>
  			  <van-tab title="开工第二周" name="b"></van-tab>
  			  <van-tab title="开工第三周" name="c"></van-tab>
  			  <van-tab title="开工第四周" name="d"></van-tab>
  			</van-tabs> -->
  			<!-- 类别轮播 -->
  			<mt-swipe :auto="2000" :show-indicators="false" class="swipe2">
  				<mt-swipe-item v-for="(item,index) in buildingMaterials_data.listb" :key="index">
  					<h5>{{ item.nav }}</h5>
  					<ul>
  						<li ref="li" v-for="(itemChild,indexChild) in item.list1_child" :key="indexChild">
  							<a>
  								<img :src="itemChild.img" />
  								<br />
  								{{ itemChild.title }}
  							</a>
  						</li>
  						<li>
  							<a>
  								<img src="../../assets/images/选建材/more-icon.png" />
  								<br />
  								查看更多
  							</a>
  						</li>
  					</ul>
  				</mt-swipe-item>
  			</mt-swipe>
  		</div>
  		<!-- tab 品牌排行榜 -->
  		<h2>品牌排行榜</h2>
  		<van-tabs class="myVant_tab" animated>
  		  <van-tab v-for="(item,index) in nav1" :key="index" :title="item">
  		    <ul>
  				<li v-for="(itemChild,indexChild) in nav_detailData[index].detail_list" :key="indexChild">
  					<img :src="itemChild.img" />
  					<br />
  					品牌热度：{{ itemChild.heat}}
  				</li>
  			</ul>
  		  </van-tab>
  		</van-tabs>
  		<!-- 装修必买 -->
  		<footer class="my_footer">
  			<h2>装修必买</h2>
  			<ul>
  				<li v-for="(item,index) in finishBuy" :key="index" :class="{active:item.pathChild===$route.path}">
  					<router-link :to="item.pathChild">{{ item.text }}</router-link>
  				</li>
  			</ul>
  			<!-- 瀑布流+懒加载列表组件 -->
  			<router-view></router-view>
  		</footer>
  	    <!-- 点击右上角遮罩层弹出框 -->
  		<div class="overlay" v-show="overlay" >
  			<van-popup v-model="overlay"  position="top">
  				<div class="share">
  					<ul>
  						<li v-for="(item,index) in share" :key="index">
  							<a>
  								<p>{{ item }}</p>
  							</a>
  						</li>
  					</ul>
  				</div>
  				<p class="cancel" @click="overlay=false">取 消</p>
  			</van-popup>
  		</div>
  	    <!-- 搜索框遮罩层 -->
  	    <div class="overlay" v-show="searchOverlay" >
  	    	<van-popup v-model="searchOverlay"  position="right">
  	    		<div>
  					<div class="mySearch">
  						<img src="../../assets/images/选建材/search-icon-n.png" />
  						<input type="text" placeholder="请输入建材或品牌" />
  						<span @click="searchOverlay=false">取消</span>
  					</div>
  					<div class="hot">
  						<p>热门搜索</p>
  						<ul>
  							<li v-for="(item,index) in rmSearch" :key="index">
  								{{ item }}
  							</li>
  						</ul>
  					</div>
  				</div>
  	    	</van-popup>
  	    </div>
  	</div>
</template>

<script>
	import MustBuy1 from "../../components/building/mustBuy1.vue"
	import SearchOverlay from "../../components/searchOverlay.vue"
	export default {
		name: "buildingMaterials",
		components: {
			MustBuy1,
			SearchOverlay
		},
		data: function() {
			return {
				buildingMaterials_data: [],
				nav_detailData:[],
				nav1:[],
				overlay:false,
				searchOverlay:false,
				share:["QQ空间","新浪微博","QQ好友"],
				activeName: '',
				rmSearch:[
					"齐家全名家装节",
					"装修分期贷",
					"智能预算报价",
					"安心家装礼",
					"装修4999元红包",
					"装修效果图",
					"0元户型设计",
					"装修封阳台价格"
				]
			}
		},
		computed:{
			finishBuy(){
				try{
					return 	this.buildingMaterials_data.ranking_list.finish_mustBuy
				}catch(e){
					
				}
			}
		},
		mounted() {
			setTimeout(()=>{
				this.getBuildingMaterials_data()
			},20)
		},
		methods: {
			getBuildingMaterials_data() {
				this.$axios.get("/data/选建材/selectBuildingMaterials.json")
					.then(res => {
						// console.log(res)
						this.buildingMaterials_data =  res.data.data
						this.nav1 = this.buildingMaterials_data.ranking_list.nav1
						console.log("aaa",this.buildingMaterials_data)
						this.nav_detailData = res.data.data.ranking_list.my_list
					})
					.catch(err => {
						console.log(err)
					})
			},
			goback(){
				this.$router.go(-1)
			},
			fnLogin(){
				let hasname=sessionStorage.getItem('uname')
				console.log(hasname);
				if(!hasname){
					// console.log(1);
					this.$router.push("/login")
				}else{
					// console.log(2);
				this.$router.push("/afterLoginIndex")
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@import url("../../assets/css/buildingMaterials/buildingMaterials.less");
</style>
