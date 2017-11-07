<template>
	<div class="selling-list-con">
		<h2 class="hot-sell-title">热销推荐</h2>
		<ul class="hot-sell-list" v-for="item in hotList" :key="item.id">
			<li class="hot-sell-item">
				<router-link :to="item.link">
					<img class="hot-sell-item-img" :src="item.imgUrl" alt="">
					<div class="hot-sell-item-info">
						<h3 class="hot-sell-item-title">{{item.title}}</h3>
						<p class="hot-sell-item-con">{{item.content}}</p>
					</div>
					<div class="hot-sell-item-price">
						￥<span class="hot-sell-item-num">{{item.price}}</span>
						<span class="hot-sell-item-text">起</span>
					</div>
				</router-link>
			</li>
		</ul>
		<router-link to="/list">
			<div class="watch-all-prd">查看所有产品</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		props:["hotList"],
	}
</script>

<style scoped>
	.hot-sell-title {
		overflow: hidden;
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.hot-sell-list {
		background-color: #fff;
	}

	.hot-sell-item {
		overflow: hidden;
		position: relative;
		height: 1.4rem;
		padding: .24rem;
		margin-bottom: .02rem;
	}

	.hot-sell-item-info {
		margin-left: 1.6rem;
	}

	.hot-sell-item-img {
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem;
	}

	.hot-sell-item-title {
		overflow: hidden;
		margin-top: .04rem;
		margin-bottom: .1rem;
		color: #212121;
		font-size: .3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.hot-sell-item-con {
		overflow: hidden;
		margin-bottom: .1rem;
		height: .4rem;
		line-height: .4rem;
		color: #9e9e9e;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.hot-sell-item-price {
		margin-left: 1.6rem;
		color: #ff8300;
		font: .24rem "Microsoft yahei", "Hiragino sans gb", Arial, sans-serif;
	}

	.hot-sell-item-num {
		font-size: .36rem;

	}

	.hot-sell-item-text {
		color: #9e9e9e;
		font-size: .24rem;
	}

	.watch-all-prd {
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		background: #fff;
		text-align: center;
	}
</style>