<template>
	<div class="header">
		<a class="header-left iconfont icon-fanhui"></a>
		<div class="header-title">
			<i class="icon-search"></i>
			<span class="single-line">输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
                        <span class="nav-city">北京
                                <i class="downarrow"></i>
                        </span>

		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				msg: 'header123',
			}
		}
	}
</script>

<style>
	@import '../iconfont/iconfont.css';

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

	.downarrow {
		display: inline-block;
		width: 0;
		height: 0;
		margin-top: .34rem;
		border-left: .12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top: .12rem solid #fff;
	}
</style>
