<template>
	<div class="my_lazy" ref="lazy">
		<div class="child_div" id="child_div" v-for="(item,index) in lazy_data" :key="index" ref="mylazy">
			<p class="img">
				<img v-lazy="item.imgBig" />
			</p>
			<p class="title">{{ item.title }}</p>
			<p class="name">
				<img v-lazy="item.imgSmall" />
				<span>{{ item.name }}</span>
			</p>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: "mustBuy1",
		data: function() {
			return {
				lazy_data: [],
			}
		},
		mounted() {
			this.getLazyData()
			//瀑布流
			// this.weteFn()
		},
		methods: {
			getLazyData() {
				this.$axios.get("/data/选建材/selectBuildingMaterials.json")
					.then(res => {
						this.lazy_data = res.data.data.ranking_list.mustBuy_list
					})
					.catch(err => {
						console.log(err)
					})
			},
		}
	}
</script>

<style scoped lang="less">
	.my_lazy {
		width: 100%;
		background-color: #fafafa;
		-moz-column-count: 2;
		/* Firefox */
		-webkit-column-count: 2;
		/* Safari 和 Chrome */
		column-count: 2;
		-moz-column-gap: 1em;
		-webkit-column-gap: 1em;
		column-gap: 1em;

		.child_div {
			background-color: white;
			margin-top: 1em;
			-moz-page-break-inside: avoid;
			-webkit-column-break-inside: avoid;
			break-inside: avoid;

			.img {
				img {
					width: 100%;
				}
			}

			.title {
				margin: 10/100rem;
				font-size: 23/100rem;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2
			}

			.name {
				padding: 10/100rem;
				font-size: 20/100rem;
				img {
					height: 40/100rem;
					width: 40/100rem;
					border-radius: 50%;
					vertical-align: middle;
					margin-right: 20/100rem;
				}
			}
		}
		:first-child{
			margin-top: 0;
		}
	}
</style>
