<template>
	<div class="page">
		<home-header></home-header>
		<home-banner></home-banner>
		<home-swiper></home-swiper>
		<home-position></home-position>
		<home-activity></home-activity>
		<home-selling></home-selling>
		<home-weekend-list></home-weekend-list>
	</div>
</template>

<script>
	import Header from "./Header";
	import Banner from "./Banner";
	import Swiper from "./Swiper";
	import Position from "./Position";
	import Activity from "./Activity";
	import SellingList from "./SellingList";
	import WeekendList from "./WeekendList";

	export default {
		components: {
			"home-header": Header,
			"home-banner": Banner,
			"home-swiper": Swiper,
			"home-position": Position,
			"home-activity": Activity,
			"home-selling": SellingList,
			"home-weekend-list": WeekendList
		}

	}
</script>

<style scoped>
	@import "../../../node_modules/swiper/dist/css/swiper.min.css";
	@import '../../../static/iconfont/iconfont.css';
	.page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}

</style>
