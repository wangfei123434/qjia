<template>
	<div class="AfterLoginIndex">
		<!-- 轮播图 -->
		<div class="swiper">
			<van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
				<van-swipe-item>
					<img src="https://image-c.weimobwmc.com/saas-wxbiz/02b2b7fd5d074a41a372560e2880f5b0.jpg?imageView2/2/w/750/q/80/interlace/1" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="https://image-c.weimobwmc.com/saas-wxbiz/4bdafa6dc1e14b8091b3238494eb5ef3.jpg?imageView2/2/w/750/q/80/interlace/2" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 广告 -->
		<div class="gg">
			<img src="../../assets/images/afterLoginIndex/aee94518099d4415adf8852dfba13e7f.jpg" />
		</div>
		<!-- 搜索框 -->
		<div class="search">
			<span>
				<van-icon name="search" size="25" color="#ccc" />
			</span>
			<input type="text" placeholder="搜索店铺内商品" />
		</div>
		<!-- 导航列表 -->
		<div class="navList1">
			<img src="../../assets/images/afterLoginIndex/71722297bc9a453082d820015c58b3cf.jpg" />
		</div>
		<!-- 本周上新 -->
		<div class="topNew">
			<img src="../../assets/images/afterLoginIndex/7a6e5d18550d4980ba47682867fd2fad.jpg" />
		</div>
		<div class="topNewList">
			<img src="../../assets/images/afterLoginIndex/e4fe905bd2a84f158a79357c41bb2f65.jpg" />
		</div>
		<!-- 纵向滚动 -->
		<div class="zxSwiper">
			<van-swipe :autoplay="2000" vertical :show-indicators="false" style="height: 50px;line-height: 50px;">
				<van-swipe-item>
					<img src="../../assets/images/afterLoginIndex/dptt.png" />
					218元新人福利
				</van-swipe-item>
				<van-swipe-item>
					<img src="../../assets/images/afterLoginIndex/dptt.png" />
					39元任选3件
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 精选拼团 -->
		<div class="groupBuying">
			<h4>精选拼团</h4>
			<ul>
				<li v-for="(item,index) in groupBuying" :key="index">
					<img :src="item.imgSrc" />
					<div>
						<p class="text">{{ item.text }}</p>
						<p class="price">
							{{ item.price }}
							<span @click="goShopping(index)" >去拼团</span>
						</p>
					</div>
				</li>
			</ul>
			<p class="more">查看更多 ></p>
		</div>
		<!-- 爆款热销 -->
		<div class="faddish">
			<img src="../../assets/images/afterLoginIndex/a0020a686ae647b5a902b62cbb9956f5.jpg" />
		</div>
		<div class="faddish_list">
			<ul>
				<li v-for="(item,index) in faddishData" :key="index">
					<img :src="item.img" />
					<p class="title">{{ item.title }}</p>
					<p class="faddish_list_price">
						<span class="xPrice">{{ item.xPrice }}</span>
						<span class="jPrice">{{ item.jPrice }}</span>
						<i><van-icon name="shopping-cart-o" size="20" /></i>
					</p>
				</li>
			</ul>
			<p class="more">查看更多 ></p>
		</div>
		
		
		<!-- 底部tabbar组件 -->
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from "../../components/tabbar/tabbar.vue"
	export default {
		name: "afterLoginIndex",
		components: {
			Tabbar
		},
		data: function() {
			return {
				currId:"",
				groupBuying: [{
						"imgSrc": "https://image-c.weimobwmc.com/openruntime/71303df0b67d4f8ab2c21ccbf94b7de4.jpg?imageView2/2/w/380/q/80/interlace/1",
						"text": "卫生间挂壁纸巾盒厕所卫生纸置物架抽纸盒免打孔粘贴防水纸巾架",
						"price": "￥22.90",
						"oldPrice":"￥39.90",
						"person":66
					},
					{
						"imgSrc": "https://image-c.weimobwmc.com/openruntime/8a53fff4955e4255a53d3e7f0bd1f0aa.jpg?imageView2/2/w/380/q/80/interlace/1",
						"text": "全自动挤牙膏器 免打孔牙刷牙膏置物架壁挂懒人挤压神器牙膏架",
						"price": "￥12.90",
						"oldPrice":"￥20.90",
						"person":77
					},
					{
						"imgSrc": "https://image-c.weimobwmc.com/openruntime/a2d3b79126084ff3a744eca653d321b3.jpg?imageView2/2/w/380/q/80/interlace/1",
						"text": "免打孔卫生间置物架浴室厨房粘贴收纳架洗漱用品储物架",
						"price": "￥15.90",
						"oldPrice":"￥24.90",
						"person":88
					}
				],
				"faddishData":[
					{
						"img":"https://image-c.weimobwmc.com/saas-wxbiz/4b996fd3787b455d8907c32183de1036.jpg?imageView2/2/w/380/q/80/interlace/1",
						"title":"HuaweiHilink华为护眼台灯达伦国AA学习阅读灯书桌学生儿童阅读灯DL-27W",
						"jPrice":"￥399",
						"xPrice":"￥249"
					},
					{
						"img":"https://image-c.weimobwmc.com/saas-wxbiz/fe68f4c990364c8ea0d2f1e48c9ebca9.jpg?imageView2/2/w/380/q/80/interlace/1",
						"title":"达伦led钢琴落地灯客厅卧室学生阅读学习书桌简约ins风立式台灯 DL-F2",
						"jPrice":"￥399",
						"xPrice":"￥299"
					},
					{
						"img":"https://image-c.weimobwmc.com/saas-wxbiz/ddd240b13a3148ef8007335c3b900b5c.jpg?imageView2/2/w/380/q/80/interlace/1",
						"title":"青春版.几光.led超薄usb衣柜橱柜书桌智能人体光学感应免布线小夜灯 300MM",
						"jPrice":"￥129",
						"xPrice":"￥99"
					},
					{
						"img":"https://image-c.weimobwmc.com/saas-wxbiz/3b5ddf901b7a4101b6e585364baba54a.jpg?imageView2/2/w/380/q/80/interlace/1",
						"title":"EZVALO·几光 LED智能无线充电超薄款人体感应磁铁吸附条形灯衣柜橱柜灯厨房小夜灯婴儿喂奶灯",
						"jPrice":"￥199",
						"xPrice":"￥169"
					}
				]
			}
		},
		methods:{
			goShopping(index){
				this.$router.push("/shopping")
				//当前点击的所选产品index值
				this.currId = index
				console.log("当前选中商品的index",this.currId)
				let obj = {
				    img:this.groupBuying[index].imgSrc,
				    text:this.groupBuying[index].text,
					price:this.groupBuying[index].price,
					oldPrice:this.groupBuying[index].oldPrice,
					person:this.groupBuying[index].person
				}
				let objStr = JSON.stringify(obj)
				sessionStorage.setItem("commodity",[objStr]);
			}
		}
	}
</script>

<style lang="less">
	.AfterLoginIndex {
		.swiper {
			img {
				height: 500/100rem;
				width: 100%;
			}
		}

		.gg,
		.navList1,
		.topNew,
		.topNewList,
		.faddish
		{
			width: 100%;

			img {
				width: 100%;
			}
		}

		.search {
			margin: 20/100rem 0;
			width: 100%;
			text-align: center;
			position: relative;

			input {
				width: 90%;
				height: 60/100rem;
				border-radius: 20px;
				text-indent: 3em;
				border: 1px solid #ccc;
			}

			span {
				margin-left: 30/100rem;
				position: absolute;
				top: 60%;
				transform: translateY(-50%);
			}
		}

		.zxSwiper {
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;

			img {
				height: 60/100rem;
				margin: 0 30/100rem;
				vertical-align: middle;
			}
		}

		.groupBuying {
			margin-top: 30/100rem;
			padding: 30/100rem;
            padding-bottom: 0;
			h4 {
				padding: 20/100rem 0;
				font-size: 35/100rem;
				color: #ff5252;
			}

			ul {
				border-bottom: 1px solid #ccc;
				li {
					width: 100%;
					display: flex;
					margin-bottom: 30/100rem;

					img {
						width: 40%;
						margin-right: 30/100rem;
					}

					div {
						width: 60%;

						.text {
							word-break: break-all;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}

						.price {
							border: 1px solid orangered;
							height: 60/100rem;
							line-height: 60/100rem;
							color: #ff5252;
							margin-top: 95/100rem;

							span {
								float: right;
								background-color: #ff5252;
								color: white;
								padding: 0 20/100rem;
							}
						}
					}
				}
			}
			.more{
				text-align: center;
				padding: 30/100rem 0;
				font-size: 35/100rem;
			}
		}
		.faddish_list{
			margin-bottom: 150/100rem;
			padding: 20/100rem 30/100rem;
			ul{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				li{
					width: 48%;
					margin-bottom: 30/100rem;
					img{
						width: 100%;
						height: 300/100rem;
					}
					.title{
						font-size: 23/100rem;
						margin: 10/100rem 0;
						padding: 0 10/100rem;
						word-break: break-all;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.faddish_list_price{
						.xPrice{
							color: red;
							font-weight: bold;
							margin-right: 10/100rem;
						}
						.jPrice{
							 text-decoration:line-through;
							 color: #ccc;
							 font-size: 20/100rem;
						}
						i{
							float: right;
							color: red;
						}
					}
				}
				li:nth-child(odd){
					margin-right: 4%;
				}
			}
			.more{
				text-align: center;
				padding: 30/100rem 0;
				font-size: 35/100rem;
			}
		}
	}
</style>
