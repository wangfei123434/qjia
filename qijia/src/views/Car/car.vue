<template>
	<div class="car">
		<div class="commodityDisplay">
			<p class="title">
				齐家生活馆
				<span>优惠劵</span>
			</p>
			<ul v-if="car.length!=0">
				<li v-for="(item,index) in car" :key="index">
					<img :src=item.imgData />
					<div>
						<p>{{ item.titleData }}</p>
						<p>
							<i>{{ item.attr }}</i>
							<van-checkbox v-model="item.status" checked-color="#07c160" @click="checkItme(index)"></van-checkbox>
							<b class="delete" @click="deleteFn(index)">删除</b>
						</p>
						<p>
							{{ item.oldPriceData }}
							<span>
								<i class="jian" @click="subtract(index)">-</i>
								<i class="num">{{item.num}}</i>
								<i class="jia" @click="add(index)">+</i>
							</span>
						</p>
					</div>
				</li>
			</ul>
			<div class="goIndex" v-if="car.length==0">
				<img src="../../assets/images/afterLoginIndex/konggouwuche.png" />
				<p>
					<router-link to="/afterLoginIndex">去逛逛</router-link>
				</p>
			</div>
		</div>
		<div class="footer">
			<div class="left">
				<van-checkbox v-model="checkedAll" @click="checkAll" checked-color="#07c160">全选</van-checkbox>
			</div>
			<div class="total">
				<p class="my_count">总计：<span>{{ allPrice }}</span></p>
				<p class="ms">(不含运费)</p>
			</div>
			<div class="goClose" @click="sum">
				去结算
			</div>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	import {
		mapState
	} from 'vuex'
	export default {
		name: "car",
		components: {
			Tabbar
		},
		data: function() {
			return {
				// car:[
				// 	{
				// 		"imgData":"https://image-c.weimobwmc.com/openruntime/71303df0b67d4f8ab2c21ccbf94b7de4.jpg?imageView2/2/w/380/q/80/interlace/1",
				// 		"titleData":"卫生间挂壁纸巾盒厕所卫生纸置物架抽纸盒免打孔粘贴防水纸巾架",
				// 		"styleData":"海洋蓝+粉",
				// 		"priceData":"￥22.90"
				// 	}
				// ],
				currActiveData: {},
				checkedAll: true
			}
		},
		computed: {
			...mapState(["car"]),

			allPrice() {
				// console.log(this.car)
				if (this.car.length != 0) {
					let allPrice = 0
					this.car.forEach(item => {
						if (item.status) {
							let price = item.oldPriceData.substr(1) * item.num
							// console.log(price)
							allPrice += price
						}

					})
					return allPrice.toFixed(2)
				}
			}
		},
		mounted() {
			this.addStatus()
			// this.car.forEach(item => {
			// 	if(item.)
			// })
		},
		methods: {
			checkAll() {
				console.log(this.checkedAll)
				if (this.checkedAll) {
					this.car.map(item => item.status = true)
				} else {
					this.car.map(item => item.status = false)
				}
			},
			addStatus() {
				if (this.car) {
					this.car.map(item => item.status = true)
					this.car.__ob__.dep.notify()
					console.log("car", this.car)
				}
			},
			// 全选
			selectAll() {
				let status = this.car.every(item => {
					return item.status === true
				})
				console.log("sss", status)
				this.checkedAll = status
			},
			sum() {
				// let goodsStr = JSON.stringify(goods)
				// sessionStorage.setItem("activeColes",[goodsStr])
				// this.car.map(item => {
				// 	console.log(item)
				// })
				if (this.car.length == 0) {
					this.$toast.fail('购物车还没商品');
					return false
				} else if (parseInt(this.allPrice)==0) {
					this.$toast.fail('请选择需要结算的商品');
					return false
				}
				let goods = this.car.filter(item=>{
					return item.status==true
				})
				this.$store.commit("activeSum", goods)
				this.$router.push("/closeAnAccount")
			},
			// 加
			subtract(index) {
				this.car[index].num--
				if (this.car[index].num <= 0) {
					this.car[index].num = 1
				}
			},
			add(index) {
				this.car[index].num++
			},
			// 购物车删除
			deleteFn(index) {
				console.log(this.car[index])
				if (this.car[index].status) {
					this.$dialog.confirm({
							title: '你忍心放弃我？',
							message: '再考虑考虑呗',
						})
						.then(() => {
							this.car.splice(index, 1)
						})
						.catch(() => {
							console.log("err")
						});

				} else {
					this.$toast.fail('请选择需要删除的商品');
				}
			},

			// 单个选中
			checkItme(i) {
				this.selectAll()
				console.log(this.car)
				console.log(this.car[i].status)
				// this.car[i]["status"] = !this.car[i]["status"]
				this.car.__ob__.dep.notify()
			}
		},
		watch: {
			car(newVal, oldVal) {
				console.log(newVal, oldVal)
				if (newVal.length == 0) {
					this.checkedAll = false
				}
			}
		}
	}
</script>

<style lang="less">
	body {
		background-color: #f8f8f8;
	}

	.commodityDisplay {
		background-color: white;
		padding: 20/100rem;

		.title {
			font-size: 30/100rem;

			span {
				float: right;
				font-weight: bold;
			}
		}

		ul {
			li {
				display: flex;
				margin-top: 30/100rem;

				img {
					height: 200/100rem;
					width: 200/100rem;
					margin-right: 20/100rem;
				}

				div {
					p:first-child {
						word-break: break-all;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}

					p:nth-of-type(2) {
						color: #ccc;
						margin: 20/100rem 0;
						display: flex;

						i {
							margin-right: 60/100rem;
						}

						.delete {
							color: red;
						}
					}

					p:last-child {
						color: red;
						font-size: 35/100rem;
						font-weight: bold;

						span {
							float: right;
							border: 1px solid #ccc;
							font-size: 20/100rem;
							color: black;
							height: 40/100rem;
							line-height: 40/100rem;

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
				}
			}
		}

		.goIndex {
			text-align: center;
			padding: 30/100rem 0;

			a {
				background-color: red;
				padding: 15/100rem 30/100rem;
				border-radius: 5px;
			}
		}
	}

	.footer {
		width: 100%;
		display: flex;
		background-color: white;
		position: fixed;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		bottom: 85/100rem;

		div {
			width: 33.3333%;
			text-align: center;
		}

		.left {
			line-height: 84/100rem;
			display: flex;

			.delete {
				color: red;
				margin-left: 60/100rem;
			}
		}

		.total {
			.my_count {
				span {
					color: red;
					font-weight: bold;
					font-size: 30/100rem;
				}
			}

			.ms {
				color: #ccc;
			}
		}

		.goClose {
			line-height: 84/100rem;
			background-color: red;
			color: white;
		}
	}
</style>
