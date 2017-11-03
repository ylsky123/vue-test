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
		data() {
			return {
				"swiperItems":[{
					"id":1,
					"swiperList":[{
						"id": 1,
						"link":"/",
						"imgUrl":"../../../static/images/tickets.png",
						"keywords":"景点门票"
					},{
						"id": 2,
						"link":"/",
						"imgUrl":"../../../static/images/zoom.png",
						"keywords":"动植物园"
					},{
						"id": 3,
						"link":"/",
						"imgUrl":"../../../static/images/palace.png",
						"keywords":"故宫"
					},{
						"id": 4,
						"link":"/tourdetail",
						"imgUrl":"../../../static/images/onedaytour.png",
						"keywords":"一日游"
					},{
						"id": 5,
						"link":"/",
						"imgUrl":"../../../static/images/tour.png",
						"keywords":"必游榜单"
					},{
						"id": 6,
						"link":"/",
						"imgUrl":"../../../static/images/autumn.png",
						"keywords":"秋色美"
					},{
						"id": 7,
						"link":"/",
						"imgUrl":"../../../static/images/playground.png",
						"keywords":"游乐场"
					},{
						"id": 8,
						"link":"/",
						"imgUrl":"../../../static/images/hotspring.png",
						"keywords":"泡温泉"
					}]
				},{
					"id":2,
					"swiperList":[{
						"id": 1,
						"link":"/",
						"imgUrl":"../../../static/images/urbanTourism.png",
						"keywords":"城市观光"
					},{
						"id": 2,
						"link":"/",
						"imgUrl":"../../../static/images/glassRoad.png",
						"keywords":"玻璃栈道"
					},{
						"id": 3,
						"link":"/",
						"imgUrl":"../../../static/images/historicalSites.png",
						"keywords":"名胜古迹"
					},{
						"id": 4,
						"link":"/",
						"imgUrl":"../../../static/images/around.png",
						"keywords":"周边游"
					},{
						"id": 5,
						"link":"/",
						"imgUrl":"../../../static/images/naturalScenery.png",
						"keywords":"自然风光"
					},{
						"id": 6,
						"link":"/",
						"imgUrl":"../../../static/images/town.png",
						"keywords":"古北水镇"
					},{
						"id": 7,
						"link":"/",
						"imgUrl":"../../../static/images/explanation.png",
						"keywords":"景点讲解"
					},{
						"id": 8,
						"link":"/",
						"imgUrl":"../../../static/images/all.png",
						"keywords":"全部"
					}]
				}],
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
		margin-top: .2rem;
		color: #212121;
		font-size: .28rem;
	}
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