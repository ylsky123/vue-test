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
		data() {
			return {
				"hotList": [{
					"id": 1,
					"link": "/detail",
					"imgUrl": "../../../static/images/homelist/palace.jpg",
					"title": "故宫",
					"content": "东方宫殿建筑代表，世界宫殿建筑典范",
					"price": 65
				}, {
					"id": 2,
					"link": "/detail",
					"imgUrl": "../../../static/images/homelist/greatWall.jpg",
					"title": "八达岭长城",
					"content": "不到长城非好汉",
					"price": 25
				}, {
					"id": 3,
					"link": "/detail",
					"imgUrl": "../../../static/images/homelist/SummerPalace.jpg",
					"title": "颐和园",
					"content": "保存完整的一座皇家行宫御苑",
					"price": 1
				}, {
					"id": 4,
					"link": "/detail",
					"imgUrl": "../../../static/images/homelist/happyValley.jpg",
					"title": "北京欢乐谷",
					"content": "七大主题园区带你畅享北京欢乐谷",
					"price": 11
				}, {
					"id": 5,
					"link": "/detail",
					"imgUrl": "../../../static/images/homelist/wall.jpg",
					"title": "慕田峪长城",
					"content": "秀美长城，关键是人少",
					"price": 19.1
				}]
			}
		}
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
		position: relative;
		overflow: hidden;
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