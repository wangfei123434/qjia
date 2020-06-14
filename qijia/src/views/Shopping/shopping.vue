<template>
	<div class="shopping">
		<div class="swiper">
			<van-swipe @change="onChange">
				<van-swipe-item>
					<img :src=currActiveData.img />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/images/afterLoginIndex/shopping2.jpg" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/images/afterLoginIndex/shopping3.jpg" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/images/afterLoginIndex/shopping4.jpg" />
				</van-swipe-item>
				<template #indicator>
					<div class="custom-indicator" indicator-color="white">
						{{ current + 1 }}/4
					</div>
				</template>
			</van-swipe>
		</div>
		<div class="bg_red">
			<div class="left">
				<h3>{{ currActiveData.price }}<span>2人团</span></h3>
				<p>拼团优惠价</p>
			</div>
			<div class="right">
				<p>距 活 动 结 束</p>
			</div>
		</div>
		<div class="title">
			<h3>{{ currActiveData.text }}</h3>
			<p>
				<span class="left_span"><i>单价买 </i>{{ currActiveData.oldPrice }}</span>
				<span class="right_span">已有{{ currActiveData.person}}人参团</span>
			</p>
		</div>
		<!-- 请选择产品具体规格 -->
		<div class="select" @click="showPopup">
			请选择 颜色 数量
			<span>></span>
		</div>
		<!-- 拼团说明 -->
		<div class="explain">
			<p>
				拼团说明
				<span>></span>
			</p>
			<img src="../../assets/images/afterLoginIndex/1111.png" />
		</div>
		<!-- 齐家生活馆 -->
		<div class="my_qjia">
			<img src="../../assets/images/afterLoginIndex/e2f8991bbb7d4c5382f1a8c3bcd79530.jpg" />
			<p>
				齐家生活馆
				<br />
				<span>
					<van-icon name="checked" />公众号认证
				</span>
			</p>
			<i class="my_i">
				<van-icon name="phone-circle-o" size="30" />
			</i>
		</div>
		<div class="myImg">
			<img :src=currActiveData.img />
		</div>
		<!-- 底部 -->
		<footer class="myFooter">
			<van-tabbar>
				<van-tabbar-item>
					<span>我的</span>
					<template #icon="props">
						<img :src="props.active ? icon.active : icon.inactive" />
					</template>
				</van-tabbar-item>
				<van-tabbar-item icon="shopping-cart-o" :badge="$store.state.car.length" @click="goCar">购物车</van-tabbar-item>
				<van-tabbar-item icon="wap-home-o">店铺</van-tabbar-item>
				<span class="my_span" @click="showPopup2">
					{{ currActiveData.oldPrice }}
					<br />
					单独购买
				</span>
				<i class="my_i">
					{{ currActiveData.price }}
					<br />
					我要开团
				</i>
			</van-tabbar>
		</footer>
		<!-- 选择产品规格弹出框 -->
		<div class="popup">
			<van-popup v-model="show" position="bottom" :style="{ height: '61%' }">
				<div class="my_top">
					<img :src=currActiveData.img />
					<div>
						<h3>{{ currActiveData.price }}</h3>
						<p class="count">库存95件</p>
						<p class="my_select">请选择 颜色</p>
					</div>
					<i @click="show=false">×</i>
				</div>
				<div class="my_color">
					<p>颜色</p>
					<ul>
						<li v-for="(item,index) in myColor" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
				<div class="my_number">
					数量
					<span>
						<i class="jian">-</i>
						<i class="num" @click="jianFn">{{ number }}</i>
						<i class="jia" @click="jiaFn">+</i>
					</span>
				</div>
				<p class="affirm">确认</p>
			</van-popup>
		</div>
		<!-- 单独购买弹出框 -->
		<div class="popup">
			<van-popup v-model="showCar" position="bottom" :style="{ height: '58%' }">
				<div class="my_top">
					<img :src=currActiveData.img />
					<div>
						<h3>{{ currActiveData.oldPrice }}</h3>
						<p class="count">库存95件</p>
						<p class="my_select">请选择 颜色</p>
					</div>
					<i @click="showCar=false">×</i>
				</div>
				<div class="my_color">
					<p>颜色</p>
					<ul>
						<li v-for="(item,index) in myColor" @click="defaultParam = index" :class="{'active':index==defaultParam}" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
				<div class="my_number">
					数量
					<span>
						<i class="jian">-</i>
						<i class="num" @click="jianFn">{{ number }}</i>
						<i class="jia" @click="jiaFn">+</i>
					</span>
				</div>
				<p class="my_p">
					<span @click="addCart">加入购物车</span>
					<span @click="toClose">立即购买</span>
				</p>
			</van-popup>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shopping",
		data() {
			return {
				current: 0,
				defaultParam:0,
				icon: {
					active: 'https://img.yzcdn.cn/vant/user-inactive.png',
					inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
				},
				show: false,
				showCar: false,
				myColor: [
					"白+樱花粉",
					"海洋蓝+粉",
					"天空蓝+粉",
					"樱花粉+白"
				],
				//数量加减
				number: 1,
				// 当前选中的商品信息
				currActiveData: {}
			};
		},
		mounted() {
			let jsonStr = sessionStorage.getItem('commodity');
			let newJson = JSON.parse(jsonStr);
			this.currActiveData = newJson
		},
		methods: {
			onChange(index) {
				this.current = index;
			},
			showPopup() {
				this.show = true;
			},
			showPopup2() {
				this.showCar = true;
			},
			// 去购物车页面
			goCar() {
				this.$router.push("/car")
			},
			// 去结算页面
			toClose(){
				let goods = [{
					titleData:this.currActiveData.text,
					imgData:this.currActiveData.img,
					num:this.number,
					oldPriceData:this.currActiveData.oldPrice,
					attr:this.myColor[this.defaultParam]
				}]
				// let goodsStr = JSON.stringify(goods)
				// sessionStorage.setItem("activeColes",[goodsStr])
				this.$store.commit("activeSum",goods)
				this.$router.push("/closeAnAccount")
			},
			// 减
			jianFn() {
				this.number--
				if (this.number <= 0) {
					this.number = 1
				}
			},
			// 加
			jiaFn() {
				this.number++
			},
			// 添加购物车的数据
			addCart(){
				let goods = {
					titleData:this.currActiveData.text,
					imgData:this.currActiveData.img,
					num:this.number,
					priceDatapriceData:this.currActiveData.price,
					oldPriceData:this.currActiveData.oldPrice,
					attr:this.myColor[this.defaultParam]
				}
				// sessionStorage.setItem("goods",goods)
				this.$store.commit("addCart",goods)
				// this.$router.push("/car")
				this.showCar = false
				this.$toast.success('成功添加购物车');
			}
		},
	}
</script>


<style lang="less" scope>
	.van-tabbar-item--active{
			color:#666;
	}
	.shopping {
		.swiper {
			.van-swipe {
				height: 600/100rem;
				width: 100%;
			}

			img {
				height: 600/100rem;
				width: 100%;
			}
		}

		.bg_red {
			width: 100%;
			background-color: red;
			display: flex;
			color: white;
			padding: 20/100rem 0;

			div {
				width: 50%;
			}

			.left {
				position: relative;
				padding-left: 30/100rem;

				h3 {
					span {
						font-size: 15/100rem;
						position: absolute;
						border: 1px solid white;
						border-radius: 20px;
						padding: 0 10/100rem;
					}
				}

				p {
					font-size: 20/100rem;
					padding-left: 5/100rem;
				}
			}

			.right {
				text-align: right;
				padding-right: 30/100rem;
			}
		}

		.title {
			border-bottom: 1px solid #ccc;
			padding: 20/100rem;

			p {
				margin-top: 30/100rem;

				.left_span {
					color: red;
					font-weight: bold;
					font-size: 35/100rem;

					i {
						font-size: 20/100rem;
					}
				}

				.right_span {
					float: right;
				}
			}
		}

		.select,
			{
			padding: 20/100rem;
			border-bottom: 1px solid #ccc;

			span {
				float: right;
				font-size: 30/100rem;
				color: gray;
			}
		}

		.explain {
			border-bottom: 1px solid #ccc;

			p {
				padding: 20/100rem;

				span {
					float: right;
					font-size: 30/100rem;
					color: gray;
				}
			}
		}

		.my_qjia {
			display: flex;
			padding: 30/100rem;
			position: relative;
			border-bottom: 1px solid #ccc;

			img {
				height: 80/100rem;
				width: 80/100rem;
				margin-right: 20/100rem;
			}

			p {
				font-size: 30/100rem;

				span {
					color: #38be00;
					font-size: 25/100rem;

					i {
						vertical-align: middle;
						margin-right: 10/100rem;
					}
				}
			}

			.my_i {
				position: absolute;
				top: 20/100rem;
				right: 30/100rem;
			}
		}

		.myFooter {
			.my_span {
				background-color: #b2a1c7;
				color: white;
				padding: 5/100rem 30/100rem;

			}

			.my_i {
				background-color: red;
				color: white;
				padding: 5/100rem 30/100rem;
			}
		}

		.popup {
			.my_top {
				display: flex;
				position: relative;
				padding: 20/100rem;

				img {
					height: 180/100rem;
					width: 180/100rem;
					margin-right: 20/100rem;
				}

				div {
					h3 {
						color: red;
					}

					p {
						color: gray;
						margin-top: 10/100rem;
					}

					.count {
						margin-top: 40/100rem;
					}

				}

				i {
					position: absolute;
					right: 30/100rem;
					top: 10/100rem;
					color: gray;
					font-size: 50/100rem;
				}
			}

			.my_color {
				padding: 20/100rem;
				border-top: 1px solid #ccc;
				border-bottom: 1px solid #ccc;

				ul {
					width: 100%;
					margin: 20/100rem 0;
					display: flex;
					flex-wrap: wrap;

					li {
						border: 1px solid #ccc;
						width: 30%;
						text-align: center;
						padding: 10/100rem 0;
						margin-right: 15/100rem;
						margin-top: 10/100rem;
						border-radius: 10px;
					}

					li.active {
						background-color: #ffeded;
						color: red;
					}
				}
			}

			.my_p {
				width: 100%;
				color: white;
                display: flex;
				span {
					display: inline-block;
					width: 50%;
					height: 85/100rem;
					line-height: 85/100rem;
					text-align: center;
				}

				span:first-child {
					background-color: #b2a1c7;
				}

				span:last-child {
					background-color: red;
				}
			}
		}

		.my_number {
			padding: 40/100rem 20/100rem;
			height: 60/100rem;
			line-height: 60/100rem;

			span {
				float: right;
				border: 1px solid #ccc;
				font-size: 40/100rem;

				i {
					display: inline-block;
					width: 50/100rem;
					text-align: center;
				}

				.num {
					border-left: 1px solid #ccc;
					border-right: 1px solid #ccc;
				}
			}
		}

		.affirm {
			text-align: center;
			background-color: #ff5252;
			height: 85/100rem;
			line-height: 85/100rem;
			color: white;
		}
	}

	.custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 5px 10px;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		font-size: 30/100rem;
		border-radius: 50%;
	}
</style>
