<template>
	<div class="header">
		<router-link to="/" class="header-left iconfont icon-fanhui"></router-link>
		<div class="header-title">
			<i class="icon-search"></i>
			<span class="single-line">输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
			<router-link to="/cities">
				<span class="nav-city">乌鲁木齐</span>
				<i class="downarrow"></i>
			</router-link>
		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	export default {}
</script>

<style>
	.header {
		position: relative;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
		color: #fff;
	}

	.header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
	}

	.header-title {
		position: absolute;
		left: .8rem;
		top: .14rem;
		right: 1.28rem;
		height: .6rem;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}

	.header-title {
		color: #e4e7ea;
	}

	.header-right {
		float: right;
		width: 1.28rem;
		height: 100%;
		line-height: .88rem;
	}

	.nav-city {
		float: left;
		display: block;
		width: .6rem;
		height: .88rem;
		line-height: .88rem;
		margin: 0 .1rem;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.downarrow {
		float: left;
		display: inline-block;
		width: 0;
		height: 0;
		margin-top: .4rem;
		border-left: .12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top: .12rem solid #fff;
	}
</style>
