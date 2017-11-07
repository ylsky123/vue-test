<template>
	<div class="icon-swiper-box">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item in swiperItems" :key="item.id">
				<ul class="icon-swiper-container" v-for="listItem in item.swiperList" key="listItem.id">
					<li>
						<div>
							<router-link :to="listItem.link">
								<img class="icon-swiper-image" :src="listItem.imgUrl" alt="" />
							</router-link>
							<div class="icon-swiper-keywords">{{listItem.keywords}}</div>
						</div>
					</li>
				</ul>
			</swiper-slide>
			<div class="icon-swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	
	export default {
		props:["swiperItems"],
		data() {
			return {
				swiperOption: {
					autoplayDisableOnInteraction: false,
					direction: 'horizontal',
					paginationType: 'bullets',
					pagination: '.icon-swiper-pagination',
					bulletClass: 'icon-swiper-bullet',
					bulletActiveClass: 'icon-swiper-bullet-active',
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
<style>
	.icon-swiper-pagination {
		padding: 0 6px;
		width: 100%;
		height: .28rem;
		text-align: center;
	}

	.icon-swiper-bullet {
		display: inline-block;
		width: .12rem;
		height: .12rem;
		margin: 0 .08rem;
		border-radius: 50%;
		background: rgba(144,144,144,0.8);
	}

	.icon-swiper-bullet-active {
		background: #7367ff;
		opacity: 1;
	}
</style>
<style scoped>

	.icon-swiper-box {
		overflow: hidden;
		height: 3.7rem;
		padding-top: .1rem;
		background-color: #fff;
	}

	.icon-swiper-image {
		width: .66rem;
		height: .66rem;
		background: 0;
	}
	.icon-swiper-container{
		float: left;
		width: 25%;
		height: 1.3rem;
		padding-top: .3rem;
		text-align: center;
	}
	.icon-swiper-keywords{
		overflow: hidden;
		margin-top: .2rem;
		color: #212121;
		font-size: .28rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

</style>