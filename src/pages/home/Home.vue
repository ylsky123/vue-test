<template>
	<div class="page">
		<home-header></home-header>
		<home-banner></home-banner>
	</div>
</template>

<script>
	import Header from "./Header";
	import Banner from "./Banner";
	import "../../../node_modules/swiper/dist/css/swiper.min.css";
	export default {
		components: {
			"home-header": Header,
			"home-banner": Banner
		}

	}
</script>

<style scoped>
	.page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>
