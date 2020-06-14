<template>
	<div class="business">
		<div class="headaer">
			<img src="../../assets/images/旺铺/logo.jpg" alt />
			<img src="../../assets/images/旺铺/wp-slogan.jpg" alt />
		</div>
		<!-- 上面广告 -->
		<div class="from">
			<form action="#">
				<a class="formone">
					<span>杭州</span>
					<img src="../../assets/images/找装修/下箭头.jpg" alt />
				</a>
				<a class="formtwo">
					<div>
						<img src="../../assets/images/旺铺/search.png" alt class="srcone" />
						<input type="text" name id placeholder="寻找商品店铺" v-on:click="tion = !tion" />
					</div>
					<img src="../../assets/images/旺铺/close.png" alt class="srctwo" />
				</a>
			</form>
		</div>
		<!-- 输入框 -->

		<!-- 隐藏搜索区域 -->
		<transition name="bounce">
			<div class="hide" v-if="tion" @click="tion=false">
				<div class="muimg">
					<div class="hi">大家都在搜</div>
					<p v-for="(item,index) in arry.hide" :key="index">
						<a>{{item}}</a>
					</p>
					<div class="content">
						<a>
							更多大家搜索内容
							<span>></span>
						</a>
					</div>
				</div>
			</div>
		</transition>
		<!-- 隐藏搜索区域 -->

		<ul class="list">
			<li v-for="(item,index) in arry.list" :key="index">
				<a href="#">
					<img :src="item.srcimg" alt />
					<p>{{item.title}}</p>
				</a>
			</li>
		</ul>
		<van-sticky>
			<div class="xd">
				<div class="down">
					<div class="downone" @click="uimy">
						<div>{{dir1}}({{dir2}})</div>
						<span :class="muimg?'spanfu':'spanyi'" class="spanfu"></span>
					</div>
					<!-- 全部类目导航 -->
					<div class="mouthone" @click="three">
						<div>{{dir3}}</div>
						<span class="spanone" :class="yimg?'spanone':'spantwo'"></span>
					</div>
					<!-- 口碑排序 -->
					
					<div class="screenone" @click="filter">
						<div>筛选</div>
						<span class="screetwo" :class="stateone?'screetwo':'screethree'"></span>
					</div>
				</div>
				<div class="taberone" v-show="muimg" @click="ginhy"></div>
				<div class="word" v-show="yimg" @click="ginhyone"></div> 
				<div class="scraeen" v-show="stateone" @click="ginhytwo"></div>
				<!-- 遮罩层 -->
				<div class="taber" ref="tabern">
					<div class="ui" @click="muimg=true">
						<div class="leftone">
							<div v-for="(item,index) in arry.listen" :key="index" class="left-a" @click="loop(index)" :class="{'left-b':empty === index}">
								<span>{{item.tevt}}</span>
								<span>{{item.number}}</span>
								<span></span>
							</div>
						</div>
						<div class="righttwo">
							<ul>
								<li v-for="(item,index) in arry.listao" :key="index" v-if="index==id">
									<p>
										<span>{{item.whole}}</span>
										<span>{{item.numbertwo}}</span>
									</p>
									<p>
										<span>{{item.numberone}}</span>
										<span>{{item.numberthree}}</span>
									</p>
									<p v-if="item.numberfour">
										<span>{{item.numberfour}}</span>
										<span>{{item.numbersix}}</span>
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 全部类目子级菜单 -->
             <ul class="commentsone" ref="my">
				 <li v-for="(item,index) in arry.favorable" :key="index" @click="clickone(index)" :class="{'lien':state === index}">
					 <span>{{item.titleone}}</span>
					 <a href="#" class="herf">{{item.titletwo}}</a>
				 </li>
			 </ul>
           <div class="choice" ref="rightone">
			   <div class="choiceone">
				   <span>品牌</span>
				   <span>全部</span>
			   </div>
			   <div class="choicetwo">
				   <span @click="spanmyming" :class="{'twomy':stus}">顾家家居</span>
				   <span @click="soanone" :class="{'twomy':zhuang}">美大</span>
			   </div>
			   <div class="choicethree">
				 <a href="#">重置</a>
				 <a href="#">确定</a>
			   </div>
		   </div>
		   
			</div>
		</van-sticky>
		
		<ul class="lienone">
			<li v-for="(item,index) in arry.nav" :key="index">
				<p :style="{backgroundImage:`url(${item.em})`}">
					{{item.icon}}
				</p>
				<div class="yem">
					<div class="yemleft">
						<div class="yemone">
							<div class="yemtwo">
								<img :src="item.imgae" alt="">
							</div>
							<div class="yemthree">
								<div>{{item.text}}</div>
								<img :src="item.xing" alt="">
								<img :src="item.xing" alt="">
								<img :src="item.xing" alt="">
								<img :src="item.xing" alt="">
								<img :src="item.xing" alt="">
							</div>
						</div>
					</div>
					<div class="yemright">
						<div class="rightone">
							<div :style="{backgroundImage:`url(${item.img})`}"></div>
							<span>{{item.mouth}}</span>
							
						</div>
						<span :style="{backgroundImage:`url(${item.rise})`}" class="spangien"></span>
						<span class="onetwothree">1</span>
					</div>
				</div>
			</li>
		</ul>
	
	</div>


</template>

<script>
	export default {
		name: "business",
		data: function() {
			return {
				arry: [],
				show: false,
				tion: false,
				muimg: false,
				yimg: false,
				sstus:false,
				stateone:false,
				index:0,
				empty: "",
				state:'',
				dir1:"全部类目",
				dir2:"434",
				dir3:'口碑排序',
				stus:false,
			   zhuang:false,
				id: 0,
				arry1:[],
				arry2:[]
			};
		},
		mounted() {
			this.getbusinessdata();
		},
		methods: {
			getbusinessdata() {
				this.$axios
					.get("data/旺铺/shop.json")
					.then(res => {
						console.log(res.data.data.favorable);
						this.arry = res.data.data;
						this.arry1 = res.data.data.listen;
						this.arry2 = res.data.data.favorable;
					})
					.catch(err => {
						console.log(err);
					});
			},
			loop(index) {
				this.empty = index;
				this.id = index;
				this.dir1 = this.arry1[index].tevt
				this.dir2 = this.arry1[index].number
			},
			uimy() {
				this.yimg = false
				this.$refs.my.style.height = 0 + "px";
				
				this.stateone = false
				this.$refs.rightone.style.height = 0 + "px";
				
				if (this.muimg) {
					this.$refs.tabern.style.height = 0 + "px";
				} else {
					this.$refs.tabern.style.height = 750 / 100 + "rem";
				}
				this.$refs.tabern.style.transition = '0.3s'
				this.muimg = !this.muimg
			},
			three(){
				this.muimg = false
				this.$refs.tabern.style.height = 0 + "px";
				
				this.stateone = false
				this.$refs.rightone.style.height = 0 + "px";
				
				if(this.yimg){
					this.$refs.my.style.height = 0 + "px";
				}else{
					this.$refs.my.style.height = 340 / 100 + "rem";
				}
				this.$refs.my.style.transition = '0.3s'
				this.yimg = !this.yimg
			},
			filter(){
				console.log(112222)
				this.yimg = false
				this.$refs.my.style.height = 0 + "px";
				
				this.muimg = false
				this.$refs.tabern.style.height = 0 + "px";
				
				if(this.stateone){
					this.$refs.rightone.style.height = 0 + "px";
				}else{
					this.$refs.rightone.style.height = 300 / 100 + "rem";
				}
				this.$refs.rightone.style.transition = '0.3s';
				this.stateone = !this.stateone
			},
			ginhy(){
				this.muimg = false
				this.$refs.tabern.style.height = 0 + "px";
			},
			ginhyone(){
				console.log(88888)
				this.yimg = false
				this.$refs.my.style.height = 0 + "px";
			},
			ginhytwo(){
				console.log(88888)
				this.stateone = false
				this.$refs.rightone.style.height = 0 + "px";
			},
			clickone(index){
				this.state = index
				this.dir3 = this.arry2[index].titleone
			},
			spanmyming(){
				console.log(this.stus)
				this.stus = !this.stus
			},
			soanone(){
				this.zhuang = !this.zhuang
			}
		}
	};
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/wang.less");
</style>
