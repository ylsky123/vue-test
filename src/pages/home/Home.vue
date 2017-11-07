<template>
	<div class="page">
		<home-header></home-header>
		<home-banner :bannerInfo="homeData.bannerInfo"></home-banner>
		<home-swiper :swiperItems="homeData.swiperItems"></home-swiper>
		<home-position></home-position>
		<home-activity></home-activity>
		<home-selling :hotList="homeData.hotList"></home-selling>
		<home-weekend-list :weekendList="homeData.weekendList"></home-weekend-list>
	</div>
</template>

<script>
	import Header from './components/Header'
	import Banner from './components/Banner'
	import Swiper from './components/Swiper'
	import Position from './components/Position'
	import Activity from './components/Activity'
	import SellingList from './components/SellingList'
	import WeekendList from './components/WeekendList'
	import {AJAX_GET_DATA} from './types.js'
	import { mapState, mapActions } from 'vuex'

	export default {

		components: {
			"home-header": Header,
			"home-banner": Banner,
			"home-swiper": Swiper,
			"home-position": Position,
			"home-activity": Activity,
			"home-selling": SellingList,
			"home-weekend-list": WeekendList
		},
		computed: mapState({
			homeData: state => state.home.homeData
		}),
		mounted() {
			!this.homeData.length && this.getHomeData()
		},
		methods: mapActions({
			getHomeData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			}
		})


	}
</script>

<style scoped>
	@import "../../../node_modules/swiper/dist/css/swiper.min.css";

	.page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}

</style>
