
<template>
	<div class="swiper-box" ref="swiperBox">
		<swiper :options="swiperOption"  ref="mySwiper">
			<swiper-slide v-for="item in items" :key="item.id" >
				<img :src="item.url" class="swiper-image">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data: function () {
			return {
				items: [{
					id: 1,
					url: "../../../static/images/1.jpg"
				}, {
					id: 2,
					url: "../../../static/images/2.jpg"
				}, {
					id: 3,
					url: "../../../static/images/3.jpg"
				}, {
					id: 4,
					url: "../../../static/images/4.png"
				}, {
					id: 5,
					url: "../../../static/images/5.jpg"
				}, {
					id: 6,
					url: "../../../static/images/6.jpg"
				}, {
					id: 7,
					url: "../../../static/images/7.jpg"
				}, {
					id: 8,
					url: "../../../static/images/8.jpg"
				}],
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					autoplayDisableOnInteraction: false,
					loop: true,
					direction: 'horizontal',
					paginationTypes: "bullets",
					pagination: '.swiper-pagination',
					observeParents: true
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		}

	}

</script>

<style >

	.swiper-box{
		width:100%;
		height:0;
		padding-bottom:31.25%;
	}
	.swiper-image{
		width:100%;
	}

	.swiper-pagination .swiper-pagination-bullet-active {
		background:#fff;
	}
</style>