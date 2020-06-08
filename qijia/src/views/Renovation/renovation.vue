<template>
	<div class="width">
		<div class="quyu searchBar" id="searchBar">
			<div class="quyuone" :class="searchBarFixed==true ? 'isFixed':'' " @click="aaa()">
				<a href="#">区域</a>
				<span><img src="../../assets/images/找装修/下箭头.jpg" alt=""></span>
			</div>
			<div class="quyutwo">
				<span><img src="../../assets/images/找装修/sort-icon.png" alt="" @click="bbb()"></span>
				<span class="i"><img src="../../assets/images/找装修/screen-icon.png" alt="" @click="ccc()"></span>
			</div>
		</div>

		<!-- 区域部分 -->
		<ul class="ul">
			<li v-for="(item,index) in arr.nav1" :key="index">
				<a href="/#/local">
					<img :src="item.icon" />
					<p>{{item.title}}</p>
				</a>
				
			</li>
		</ul>
		<!-- 3D设计部分 -->
		<div class="swoie">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(itemao,index) in arr.mySwiper" :key="index">
					<img :src="itemao" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- 轮播图部分 -->
		<div class="Peron">
			<van-tabs v-model="activeName">
				<van-tab title="推荐" name="a">
					<ul class="Peronone">
						<li v-for="(item,index) in arr.nav3" :key="index">
							<a href=""> {{item}}</a>
						</li>
					</ul>
					<!-- 列表 -->
					<ul class="list">
						<li v-for="(item,index) in arr.list" :key="index">
							<div class="left">
								<img :src="item.imgSrc" alt="">
							</div>
							<div class="right">
								<div class="rightone">
									<h3>{{item.title}}</h3>
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
									<a class="threeone" v-for="(itemone,index) in item.my_label">
										{{itemone}}
									</a>
								</div>

								<hr />
								<div class="discount">
									<span class="discountone"></span>
									<p class="discounttwo">{{item.hui}}</p>
								</div>
								<div class="discount-a">
									<span class="discount-b"></span>
									<p class="discounttwo-c">{{item.juan}}</p>
								</div>

							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="装修" name="b">装修</van-tab>
				<van-tab title="整装" name="c">
					<ul class="list">
						<li v-for="(item,index) in arr.list" :key="index">
							<div class="left">
								<img :src="item.imgSrc" alt="">
							</div>
							<div class="right">
								<div class="rightone">
									<h3>{{item.title}}</h3>
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
									<a class="threeone" v-for="(itemone,index) in item.my_label">
										{{itemone}}
									</a>
								</div>

								<hr />
								<div class="discount">
									<span class="discountone"></span>
									<p class="discounttwo">{{item.hui}}</p>
								</div>
								<div class="discount-a">
									<span class="discount-b"></span>
									<p class="discounttwo-c">{{item.juan}}</p>
								</div>

							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="别墅" name="d">
					<ul class="list">
						<li v-for="(item,index) in arr.list" :key="index">
							<div class="left">
								<img :src="item.imgSrc" alt="">
							</div>
							<div class="right">
								<div class="rightone">
									<h3>{{item.title}}</h3>
									<span><img :src="item.right_top_bgSrc" alt=""></span>
								</div>
								星星
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
									<a class="threeone" v-for="(itemone,index) in item.my_label">
										{{itemone}}
									</a>
								</div>

								<hr />
								<div class="discount">
									<span class="discountone"></span>
									<p class="discounttwo">{{item.hui}}</p>
								</div>
								<div class="discount-a">
									<span class="discount-b"></span>
									<p class="discounttwo-c">{{item.juan}}</p>
								</div>

							</div>
						</li>
					</ul>
				</van-tab>
				<van-tab title="软装" name="e">软装</van-tab>
				<van-tab title="工装" name="f">工装</van-tab>
			</van-tabs>

		</div>
		<div class="body" v-show="show" @click="show=false">
			<div class="tion">
				<ul class="tionone">
					<li @click="change(index)" v-for="(item,index) in list" :class="{'tion2':ind === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- 1 -->
		<div class="bobyone" v-show="bobyonearr" @click="bobyonearr=false">
			<div class="tiontwo">
				<ul class="active">
					<div class="zong">
						<p>综合排序</p>
						<p>齐家平台综合智能排序</p>
					</div>
					<li @click="en(index)" v-for="(item,index) in listen" :class="{'ao':ten === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- 2 -->
		<div class="bobynoe" v-show="bobynoearr" @click="bobynoearr=true">
			<div class="tionthree">
					<h4>擅长房型</h4>
				<ul class="shanchang">
				
					<li @click="fang(index)" v-for="(item,index) in listone"  :class="{'tion3':one === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
				<h4 class="hr">装修服务</h4>
				<ul class="shanchang">
					<li @click="xiu(index)" v-for="(item,index) in listtwo"  :class="{'tion3':two === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
				
				<h4 class="hr">特色服务</h4>
				<ul class="shanchang">
					<li @click="hao(index)" v-for="(item,index) in arr.nav3" :class="{'tion3':arren === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
				
				<h4 class="hr">风格偏好</h4>
				<ul class="shanchang">
					<li @click="feng(index)" v-for="(item,index) in listthree" :class="{'tion3':three === index}">
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'renovation',
		data: function() {
			return {
				arr: [],
				arren:'',
				list: ['全城', '福田', '罗湖', '南山', '盐田', '宝安', '龙岗', '光明区', '坪山区', '龙华区', '大鹏新区'],
				ind: '',
				listen:['设计好评优先','施工好评优先','服务态度好评优先','离我最近的门店'],
				ten: '',
				listone:['小户型一房','两房','三房','四房','Loft','复式','别墅','大平层','商铺装修','办公空间'],
				one:'',
				listtwo:['方案设计','半包装修','全包装修','一站式整装','局部装修','上门维修','软装设计'],
				two:'',
				listthree:['现代','美式','欧式','中式','北欧','混搭','新古典','简欧','工业','后现代'],
				three:'',
				activeName: 'a',
				show: false,
				searchBarFixed: false,
				bobyonearr: false,
				bobynoearr: false
			}
		},
		mounted() {
			this.getrenovationdata(),
				window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			aaa() {
				this.show = !this.show
				this.bobyonearr = false
				this.bobynoearr = false
			},
			bbb() {
				this.bobyonearr = !this.bobyonearr
				this.show = false
				this.bobynoearr = false
			},
			ccc() {
				this.bobynoearr = !this.bobynoearr
				this.bobyonearr = false
				this.show = false
			},
			change(index) {
				this.ind = index
			},
			en(index){
				this.ten = index
			},
			fang(index){
				this.one = index
			},
			xiu(index){
				this.two = index
			},
			hao(index){
				this.arren = index
			},
			feng(index){
				this.three = index
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
			},
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let offsetTop = document.querySelector('#searchBar').offsetTop
				scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
			}


		}
	}
</script>

<style scoped lang="less">
	@import url("../../assets/css/renovation.less");
</style>
