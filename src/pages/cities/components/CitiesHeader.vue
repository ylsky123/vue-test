<template>
	<div>
		<div class="cities-header">
			<router-link to="/" class="cities-header-left iconfont icon-fanhui" @click="handleClick"></router-link>
			<h1 class="cities-header-title">城市选择</h1>
		</div>

	</div>
</template>

<script>
	export  default  {
		methods: {
			handleClick() {
				router.go(-1)
			}
		}
	}
</script>

<style scoped>

	.cities-header{
		height: .68rem;
		line-height: .68rem;
		border-bottom: 0;
		background: #00bcd4;
		z-index: 91;
	}
	.cities-header-left {
		position: absolute;
		font-size: .36rem;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		color: #fff;
		text-align: center;
	}
	.cities-header-title{
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
</style>