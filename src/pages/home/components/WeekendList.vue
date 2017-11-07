<template>
	<div class="weekend-list-con">
		<h2 class="weekend-title">周末去哪儿</h2>
		<ul class="weekend-list" v-for="item in weekendList">
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
		props: ["weekendList"]
	}
</script>

<style scoped>
	.weekend-list-con {
		width: 100%;
	}

	.weekend-title {
		overflow: hidden;
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		white-space: nowrap;
		text-overflow: ellipsis;
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