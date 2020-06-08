<template>
	<div class="business">
		<div class="headaer">
			<img src="../../assets/images/旺铺/logo.jpg" alt="">
			<img src="../../assets/images/旺铺/wp-slogan.jpg" alt="">
		</div>
		<!-- 上面广告 -->
		<div class="from">
			<form action="#">
			<a class="formone">
				<span>杭州</span>
				<img src="../../assets/images/找装修/下箭头.jpg" alt="">
			</a>
			<a class="formtwo">
				<div>
				<img src="../../assets/images/旺铺/search.png" alt="" class="srcone">
				<input type="text" name="" id="" placeholder="寻找商品店铺" v-on:click="tion = !tion">
				</div>
				<img src="../../assets/images/旺铺/close.png" alt="" class="srctwo">
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
				<a>更多大家搜索内容 <span>></span> </a>
			</div>
			</div>
		</div>
		</transition>
		<!-- 隐藏搜索区域 -->
		
		<ul class="list">
			<li v-for="(item,index) in arry.list" :key="index">
				<a href="#">
					<img :src="item.srcimg" alt="">
					<p>{{item.title}}</p>
				</a>
			</li>
		</ul>
	   <div class="down">
		   <div class="downone" @click="muimg =!muimg">
		   <div>全部类目(431)</div>
		   <span :class="muimg?'spanfu':'spanyi'" class="spanfu"></span>
		   </div>
		   <!-- 全部类目导航 -->
		   <div class="mouthone">
		   <div>口碑排序</div>
		   <span class="spanone"></span>
		   </div>
		   <!-- 口碑排序 -->
	   </div>
	   
	   <div class="taber" v-show="muimg" @click.self="muimg=false">
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
	</div>
</template>

<script>
	export default {
		name: 'business',
		data:function(){
			return {
				arry:[],
				show:false,
				tion:false,
				muimg:false,
				yimg:false,
				empty:'',
				id:0
			
			}
		},
		mounted(){
			this.getbusinessdata()
		},
		methods:{
			getbusinessdata(){
				this.$axios.get('data/旺铺/shop.json')
				.then(res => {
				  console.log(res.data.data)
				  this.arry = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
			},
			mimg(){
				muimg:true
				this.muimg = !this.muimg
			},
			loop(index){
				this.empty = index
				this.id = index
			}
		}
		}
</script>

<style scoped lang="less">
	@import url("../../assets/css/wang.less");
</style>
