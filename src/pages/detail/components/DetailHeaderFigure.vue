<template>
		<div class="headerfigure-wrapper">
			<router-link  to="/" class="header-back" @click="handleClick">
				<span class="header-back-bg"></span>
				<i class="iconfont icon-fanhui"></i>
			</router-link>
			<div class="headerfigure-img-con">
				<img class="headfigure-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
			</div>
			<div class="headerfigure-info">

				<div class="headfeagure-title">故宫(AAAAA景区)</div>
				<div class="img-icon-con">
					<span class="img-icon iconfont icon-img"></span>
					<em class="img-icon-number">10</em>
				</div>
			</div>
		</div>

</template>

<script>
	export default {
		methods: {
			handleClick() {
				router.go(-1)
			}
		}
	}

</script>

<style scoped>

	.headerfigure-wrapper{
		position: relative;
	}
	.headerfigure-img-con{
		overflow: hidden;
		height: 0;
		width: 100%;
		padding-bottom: 55%;
	}
	.headfigure-img{
		width: 100%;
		vertical-align: top;
	}
	.headerfigure-info{
		position: absolute;
		right: .2rem;
		bottom: .26rem;
		left: .2rem;
		min-height: .4rem;

	}
	.headfeagure-title{
		position: relative;
		z-index: 1;
		margin-right: 1.4rem;
		line-height: .4rem;
		color: #fff;
		font-size: .32rem;
		text-shadow: 0 1px 2px rgba(0,0,0,0.70);

	}
	.img-icon-con{
		position: absolute;
		right: 0;
		top: 0;
		width: 1.2rem;
		height: .4rem;
		background: rgba(0,0,0,.5);
		border-radius: .2rem;
		font-size: .24rem;
		color: #fff;
		line-height: .4rem;
		text-align: center;
	}
	.img-icon{
		position: relative;
		top: .02rem;
		font-size:.20rem;
	}
	.img-icon-number{
		margin-left: .1rem;
	}
	.header-back{
		position: absolute;
		left: .1rem;
		top: .1rem;
		width: .72rem;
		height: .72rem;
		line-height: .72rem;
	}
	.header-back-bg{
		display: block;
		width: .72rem;
		height: .72rem;
		background-color: #000;
		opacity: .5;
		border-radius: .36rem;
	}
	.icon-fanhui{
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		width: .72rem;
		color:#fff;
		line-height: .72rem;
		text-align: center;
	}
</style>