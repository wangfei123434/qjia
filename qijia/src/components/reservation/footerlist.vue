<template>
	<div class="footer_list">
		<van-tabs v-model="activeName" animated>
			<van-tab title="案例" name="a" class="case">
				<div v-for="(item,index) in caseData" :key="index" class="myDiv">
					<p class="icon">
						<img :src="item.icon" />
						{{ item.name }}
						<i>></i>
					</p>
					<p class="imgSrc">
						<img :src="item.imgSrc" />
					</p>
					<p class="title">
						{{ item.title }}
					</p>
					<p class="myStyle">
						{{ item.style }}
					</p>
					<p class="myTabel">
						<span v-for="(itemChild,indexChild) in item.tabel" :key="indexChild">
							{{ itemChild }}
						</span>
					</p>
				</div>
				<p class="loading"><span>全部67个案例 ></span></p>
			</van-tab>
			<van-tab title="设计师" name="b" class="stylist" >
				<div v-for="(item,index) in stylistData" :key="index" class="myDiv">
					<div class="introduce">
						<img :src="item.icon" />
						<div class="right">
							<h4>
							    {{ item.name }}
								<span :style="{background:`${item.bgColor}`}">
								    {{ item.label}}
								</span>
							</h4>
							<p>{{ item.style }}</p>
						</div>
					</div>
					<div class="imgS">
						<van-image :src="item.imgSrc1" fit="cover" lazy-load class="img" />
						<van-image :src="item.imgSrc2" fit="cover" lazy-load class="img" />
						<van-image :src="item.imgSrc3" fit="cover" lazy-load class="img" />
					</div>
				</div>
				<p class="loading"><span>全部35名设计师 ></span></p>
			</van-tab>
			<van-tab title="简介" name="c" class="intro">
				<div class="myDiv">
					<div :class="{'van-multi-ellipsis--l3':isActive}" @click="isActive=false">
					    {{ introData.text}}
					</div>
					<p>营业时间 <span>{{ introData.time}}</span></p>
					<p>公司规模 <span>{{ introData.gm}}</span></p>
					<p>承接类型 <span>{{ introData.lx}}</span></p>
					<p class="van-ellipsis">服务区域 <span>{{ introData.qy}}</span></p>
					<p class="van-ellipsis">公司地址 <span>{{ introData.dz}}</span></p>
				</div>
				<p class="loading"><span>查看更多></span></p>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		name: "footerlist",
		data: function() {
			return {
				activeName: 'a',
				caseData: [],
				stylistData:[],
				introData:{},
				isActive:true
			}
		},
		mounted() {
			this.getFooterData()
		},
		methods: {
			getFooterData() {
				this.$axios.get("/data/reservation/reservation.json")
					.then(res => {
						this.caseData = res.data.data.list.anli
						this.stylistData = res.data.data.list.stylist
						this.introData = res.data.data.list.intro.jz
					})
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/reservation/footerlist.css");
</style>
