<template>
	<div class="weekend-list-con">
		<h2 class="weekend-title">周末去哪儿</h2>
		<ul class="weekend-list" v-for="item in weekList">
			<li class="weekend-list-item">
				<router-link class="weekend-list-link" :to="item.link">
					<div class="weekend-list-img-con">
						<img class="weekend-list-img" :src="item.imgUrl" alt="">
					</div>
					<div class="weekend-list-info">
						<h3 class="weekend-list-title">{{item.title}}</h3>
						<p class="weekend-list-text">{{item.content}}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				"weekList": [{
					"id": 1,
					"link": "/detail",
					"imgUrl": "../../../static/images/homeweekendlist/1.jpg",
					"title": "北京温泉排行榜",
					"content": "细数北京温泉，温暖你的冬天"
				}, {
					"id": 2,
					"link": "/detail",
					"imgUrl": "../../../static/images/homeweekendlist/2.jpg",
					"title": "寻找北京的皇城范儿",
					"content": "数百年的宫廷庙宇，至今依旧威严霸气"
				}, {
					"id": 3,
					"link": "/detail",
					"imgUrl": "../../../static/images/homeweekendlist/3.jpg",
					"title": "北京必游TOP10",
					"content": "来北京必去的景点非这些地方莫属"
				}, {
					"id": 4,
					"link": "/detail",
					"imgUrl": "../../../static/images/homeweekendlist/4.jpg",
					"title": "登高望远秋色佳",
					"content": "山顶满眼彩色，此情此景醉了"
				}, {
					"id": 5,
					"link": "/detail",
					"imgUrl": "../../../static/images/homeweekendlist/5.jpg",
					"title": "秋高气爽去礼佛",
					"content": "秋风伴着美妙经声，品尝秋的另一番滋味"
				}]
			}
		}
	}
</script>

<style scoped>
	.weekend-list-con {
		width: 100%;
	}

	.weekend-title {
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
	}

	.weekend-list-item {
		position: relative;
		margin-bottom: .1rem;
		background: #fff;
	}

	.weekend-list-link {
		display: block;
		width: 100%;
		height: 100%
	}

	.weekend-list-img-con {
		overflow: hidden;
		height: 0;
		padding-bottom: 37.4375%;
	}

	.weekend-list-img {
		width: 100%;
	}

	.weekend-list-info {
		position: relative;
		padding: .14rem .2rem .2rem .2rem;
	}

	.weekend-list-title {
		overflow: hidden;
		padding-right: 1.4rem;
		color: #212121;
		font-size: .28rem;
		line-height: .48rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.weekend-list-text {
		overflow: hidden;
		padding-right: 1.4rem;
		color: #616161;
		font-size: .24rem;
		line-height: .42rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

</style>