<template>
	<div class="swiper-box">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item in items" :key="item.id">
				<img :src="item.url" class="swiper-image">
			</swiper-slide>
			<div class="home-swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'

	export default {
		data: function () {
			return {
				items: [{
					id: 1,
					url: "../../../static/images/swiper/1.jpg"
				}, {
					id: 2,
					url: "../../../static/images/swiper/2.jpg"
				}, {
					id: 3,
					url: "../../../static/images/swiper/3.jpg"
				}, {
					id: 4,
					url: "../../../static/images/swiper/4.png"
				}, {
					id: 5,
					url: "../../../static/images/swiper/5.jpg"
				}, {
					id: 6,
					url: "../../../static/images/swiper/6.jpg"
				}, {
					id: 7,
					url: "../../../static/images/swiper/7.jpg"
				}, {
					id: 8,
					url: "../../../static/images/swiper/8.jpg"
				}],
				swiperOption: {
					autoplay: 3000,
					autoplayDisableOnInteraction: false,
					loop: true,
					direction: 'horizontal',
					paginationType: 'bullets',
					pagination: '.home-swiper-pagination',
					bulletClass: 'home-swiper-bullet',
					bulletActiveClass: 'home-swiper-bullet-active',
					observeParents: true
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		}


	}

</script>

<style >

	.swiper-box {
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}

	.swiper-image {
		width: 100%;
	}

	.home-swiper-pagination {
		width: 100%;
		height: .28rem;
		text-align: center;
		padding: 0 .12rem;
		position: absolute;
		bottom: .2rem;
		left: 0;
		z-index: 10;
	}

	.home-swiper-bullet {
		display: inline-block;
		width: .12rem;
		height: .12rem;
		margin: 0 .08rem;
		border-radius: 50%;
		background: #fff;
		opacity: .5;
	}

	.home-swiper-bullet-active {
		background: #fff;
		opacity: 1;
	}
</style>