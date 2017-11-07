<template>
	<div class="header">
		<router-link to="/" class="header-left iconfont icon-fanhui" @click="handleClick"></router-link>
		<div class="header-title">
			<router-link to="/search" class="search-link">
				<i class="iconfont icon-search"></i>
				<span class="single-line">输入城市/景点/游玩主题</span>
			</router-link>
		</div>
		<div class="header-right">
			<router-link to="/cities" class="home-header-link-city">
				<span class="nav-city">{{citiesVal}}</span>
				<i class="downarrow"></i>
			</router-link>
		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	import { mapState } from 'vuex'


	export default {

		computed: mapState({
			citiesVal (state) {
				return state.home.citiesVal
			}
		}),
		methods: {
			handleClick() {
				router.go(-1)
			}
		}
	}
</script>

<style>
	.header {
		position: relative;
		display: flex;
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
		box-sizing: border-box;
		flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}

	.search-link {
		color: #e4e7ea;
		display: block;
		height: 100%;
	}

	.icon-search {
		position: absolute;
		left: .2rem;
		top: 50%;
		transform: translateY(-50%);
	}

	.single-line {
		display: inline-block;
		overflow: hidden;
		position: absolute;
		left: .3rem;
		top: 0;
		width: 3.6rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.header-right {
		max-width: 1.84rem;
		height: 100%;
	}

	.home-header-link-city {
		display: inline-block;
		line-height: .88rem;
		margin-right: .04rem;
		color: #fff;
	}

	.nav-city {
		float: left;
		display: block;
		max-width: 1.28rem;
		height: .88rem;
		line-height: .88rem;
		padding: 0 .06rem;
		color: #fff;
		overflow: hidden;
	}

	.downarrow {
		float: right;
		display: inline-block;
		width: 0;
		height: 0;
		margin-top: .4rem;
		margin-left: .04rem;
		border-left: .12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top: .12rem solid #fff;
	}
</style>
