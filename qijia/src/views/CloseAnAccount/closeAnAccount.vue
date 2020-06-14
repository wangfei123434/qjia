<template>
	<div class="closeAnAccount">
		<p class="top_p">
			<span class="left" @click="back()">
				<van-icon name="arrow-left" size="25" />
			</span>
			<span class="right">
				<van-icon name="gem-o" size="25" />
			</span>
		</p>
		<div class="top_div">
			<div class="address" @click="addressEdit()">
				<div v-if="address.length==0">
					<span>
						<van-icon name="location-o" size="25" />
					</span>
					请先添加收获地址
					<i>
						<van-icon name="arrow" size="25" />
					</i>
				</div>
				<div v-else>
					<div class="top">
						<span>{{address[0].name}}</span>
						<span>{{address[0].tel}}</span>
					</div>
					<div class="bottom">
						{{address[0].province}}
						{{address[0].city}}
						{{address[0].county}}
						{{address[0].addressDetail}}
					</div>
				</div>
			</div>
			<div class="time" @click="changeTime">
				选择配送时间
				<i v-if="myDate.length == 0">
					请选择&nbsp;
					<van-icon name="arrow" size="20" />
				</i>
				<i v-else>{{ myDate }}</i>
			</div>
			<img src="../../assets/images/afterLoginIndex/Snipaste_2020-06-12_15-48-17.png" />
		</div>
		<div class="detailed_list">
			<p class="p1">
				<van-icon name="balance-list-o" size="25" />
				购物清单
			</p>
			<div class="detail" v-for="(item,index) in currentGoods" :key="index" :deleteID="index">
				<img :src="item.imgData" />
				<div class="detail_right">
					<p class="title">
						{{item.titleData}}
					</p>
					<p class="strr">{{item.attr}}</p>
					<p class="price">{{item.oldPriceData}}</p>
					<i>×{{item.num}}</i>
				</div>
			</div>
			<div class="leave">
				买家留言
				<input type="text" placeholder="给卖家留言" />
			</div>
			<div class="discount">
				共{{currentGoods.length}}件商品 合计：<i>{{myTotal}}</i>
			</div>
			<div class="yhj">
				优惠价/码
				<i>已优惠0元 ></i>
			</div>
			<div class="pay">
				支付方式
				<i>在线支付</i>
			</div>
		</div>
		<div class="myfooter">
			<p>商品金额<i>￥{{myTotal}}</i></p>
			<p>运费<i>￥0</i></p>
			<p>优惠金额<i>￥0</i></p>
			<div>
				实付：<i>￥{{myTotal}}</i>
				<span @click="mySubmit()" :class="{'activeBg':addBg}">提交订单</span>
			</div>
		</div>
		<!-- 添加地址 -->
		<div class="overlay" v-show="editOverlay">
			<van-popup v-model="editOverlay" position="right">
				<div>
					<van-address-edit show-postal show-search-result show-delete show-set-default :area-list="areaList" :area-columns-placeholder="['请选择', '请选择', '请选择']"
					 @save="onSave" />
				</div>
			</van-popup>
		</div>
		<!-- 时间选择 -->
		<van-action-sheet v-model="showDataPicker" title="标题">
			<van-datetime-picker v-model="currentDate" type="month-day" title="选择月日" :min-date="minDate" :max-date="maxDate" @confirm="getTime"/>
		</van-action-sheet>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import area from '@/assets/js/area'
	export default {
		name: "closeAnAccount",
		data: function() {
			return {
				myTotal: "",
				editOverlay: false,
				areaList: area,
				showDataPicker: false,
				// 当前选中的地址
				address: [],
				// 当前选中的时间
				myDate:"",
				minDate: new Date(2020, 0, 1),
				maxDate: new Date(2025, 10, 1),
				currentDate: new Date(),
				// 清除购物车中已经结算的商品
				deleteID:0
			}
		},
		computed: {
			...mapState(["currentGoods"]),
			// 提交订单添加背景色
			addBg(){
				if(this.address.length!=0&&this.myDate.length!=0){
					return true
				}
			}
		},
		mounted() {
			let detailData = this.$store.state.currentGoods
			// console.log(detailData)
			let num = 0
			detailData.map(item => {
				let myTotal = item.num * item.oldPriceData.substr(1)
				// console.log(myTotal)
				num += myTotal
			})
			this.myTotal = num.toFixed(2)
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			addressEdit() {
				this.editOverlay = true
			},
			onSave(content) {
				// let {name,province,city,county,addressDetail,tel} = content
				this.address.push(content)
				this.editOverlay = false
			},
			// 提交订单
			mySubmit() {
				console.log("submit")
				if(this.address.length == 0){
					this.$toast.fail('请添加需要配送的地址'); 
				}else if(this.myDate.length == 0){
					this.$toast.fail('请添加需要配送的时间');
				}else if(this.address.length != 0 && this.myDate.length != 0){
					this.$toast.success('订单提交成功，坐等包裹吧！！！'); 
					this.$router.push("/afterLoginIndex")
					this.deleteItem()
				}else{
					return false
				}
			},
			changeTime() {
				this.showDataPicker = true
			},
			getTime(value){
				this.showDataPicker = false
				console.log(value)
				let mouth = value.getMonth() + 1
				let date = value.getDate()
				console.log("月份：",mouth,"日：",date)
				this.myDate = mouth + "月" + date + "日"
			},
			// 清除购物车中当前已经结算过的商品
			deleteItem(){
				console.log("购物车的全部商品：",this.$store.state.car)
				console.log("当前结算的商品：",this.$store.state.currentGoods)
				this.$store.state.car = this.$store.state.car.filter((item) => item.status != true)
				this.$store.state.car.forEach((item) => {
					if(item.status){
						sessionStorage.removeItem("item")
					}
				})
			}
		}
	}
</script>

<style lang="less">
	body {
		background-color: #fafafa;
	}

	.closeAnAccount {
		background-color: white;

		.top_p {
			padding: 20/100rem 0;
			width: 100%;
			overflow: hidden;
			border-bottom: 1px solid #ccc;

			.left {
				float: left;
			}

			.right {
				float: right;
			}
		}

		.top_div {

			.address,
			.time {
				color: red;
				overflow: hidden;
				padding: 20/100rem 0;

				span {
					float: left;
					margin-right: 20/100rem;
				}

				i {
					float: right;
				}
			}

			.time {
				color: gray;
				border-top: 1px solid #ccc;
			}

			img {
				margin-top: -10/100rem;
			}
		}

		.detailed_list {
			.p1 {
				border-bottom: 1px solid #EAEAEA;
				padding: 20/100rem 10/100rem;

				i {
					vertical-align: middle;
				}
			}

			.detail {
				display: flex;
				font-size: 20/100rem;
				padding: 10/100rem;

				img {
					height: 200/100rem;
					width: 200/100rem;
					margin-right: 20/100rem;
				}

				.detail_right {
					position: relative;

					.title {
						width: 80%;
					}

					.strr {
						color: #ccc;
					}

					.price {
						color: red;
						font-weight: bold;
						margin-top: 60/100rem;
					}

					i {
						position: absolute;
						right: 10/100rem;
						top: 0;
					}
				}
			}

			.leave {
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				padding: 20/100rem 0;

				input {
					margin-left: 80/100rem;
					border: none;
				}
			}

			.discount {
				padding: 20/100rem 0;
				text-indent: 10em;

				i {
					color: red;
					font-weight: bold;
				}
			}

			.yhj,
			.pay {
				padding: 20/100rem 0;
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;

				i {
					float: right;
					margin-right: 30/100rem;
				}
			}
		}

		.myfooter {
			p {
				padding: 10/100rem 0;

				i {
					float: right;
				}
			}

			div {
				height: 80/100rem;
				border-top: 1px solid #ccc;
				line-height: 80/100rem;
				text-align: right;

				i {
					color: red;
					font-weight: bold;
				}

				span {
					background-color: #ffa9a9;
					color: white;
					margin-left: 20/100rem;
					display: inline-block;
					height: 100%;
					width: 200/100rem;
					text-align: center;
				}
				.activeBg{
					background-color: red;
				}
			}
		}

		.overlay {
			.van-popup {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
