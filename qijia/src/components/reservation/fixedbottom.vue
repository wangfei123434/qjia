<template>
	<div>
		<!-- 固定底部 -->
		<div class="fixedBottom">
			<div class="left">
				<a class="a1">
					<p>关注</p>
				</a>
				<a class="a2">
					<p>在线咨询</p>
				</a>
			</div>
			<div class="right">
				<span class="span1" @click="overlay=true">预约有礼</span>
				<span class="span2">电话咨询</span>
			</div>
		</div>
		<!-- 底部遮罩层 -->
		<div class="overlay" v-show="overlay" >
			<van-popup v-model="overlay"  position="bottom">
				<div class="mybox">
					<h3>预约居众装饰·品质家装装修服务</h3>
					<p class="title"><span>惠</span>提供全方位验房、全屋估算、平面方案。</p>
					<p class="time">有效期 2020-07-15</p>
					<input type="text" placeholder="请输入手机号"/>
					<p class="yyue">免费预约</p>
					<i @click="overlay=false">×</i>
				</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
	export default {
		name:"fixedbottom",
		data:function(){
			return {
				overlay:false,
			}
		}
	}
</script>

<style lang="less">
	.fixedBottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
		height: 100/100rem;
		line-height: 100/100rem;
		display: flex;
		div{
			text-align: center;
		}
		.left{
			width: 40%;
			font-size: 20/100rem;
			display: flex;
			a{
				display: block;
				width: 50%;
				position: relative;
				p{
					margin-top: 30/100rem;
					font-weight: bold;
				}
			}
			a:before{
				display: block;
				content: "";
				width: 40/100rem;
				height: 40/100rem;
				position: absolute;
				left: 50%;
				top: 10/100rem;
				transform: translateX(-50%);
				background: url(../../assets/images/预约有礼/detail-icons.png) no-repeat;
			    background-size: 100% ;
			}
			.a1:before{
				background-position: 0 -380/100rem;
			}
			.a2:before{
				background-position: 0 -478/100rem;
			}
		}
		.right{
			width: 60%;
			font-size: 23/100rem;
			font-weight: bold;
            span{
				padding: 20/100rem 40/100rem;
			}			
			.span1{
				background-color: #edbd92;
				border-radius: 20px 0 0 20px;
			}
			.span2{
				background-color: #2c2a26;
				color: #f2ceac;
				border-radius: 0 20px 20px 0;
			}
		}
	}
	.overlay{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.5);
		.mybox{
			position: relative;
			h3{
				text-align: center;
				padding: 20/100rem 0;
			}
			p{
				margin: 20/100rem auto;
			}
			.yyue{
				width: 90%;
				height: 80/100rem;
				line-height: 80/100rem;
				background-color:#fe5430;
				color: white;
				border-radius: 5px;
				text-align: center;
			}
			input{
				width: 90%;
				background-color: #f5f6f9;
				border: none;
				height:80/100rem ;
				border-radius: 5px;
				text-indent: 1em;
				margin-left: 32/100rem;
			}
			.title{
				padding-left: 40/100rem;
				font-weight: bold;
				span{
					color: white;
					background-color: #ff5831;
					margin-right: 10/100rem;
					padding: 3/100rem;
				}
			}
			.time{
				padding-left: 80/100rem;
				color: gray;
			}
			i{
				font-size: 50/100rem;
				position: absolute;
				top: 20/100rem;
				right: 20/100rem;
				color: gray;
			}
		}
		
	}
</style>
