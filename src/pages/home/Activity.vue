<template>
	<div class="home-activity-con">
		<div class="home-activity-left"></div>
		<div class="home-activity-right"></div>
	</div>
</template>

<script>
	export  default {}
</script>

<style scoped>
	.home-activity-con{
		width: 100%;
		height: 1.4rem;
		margin-top: .2rem;

	}
	.home-activity-left{
		float: left;
		width: 49.9%;
		height: 100%;
		background: url("../../../static/images/activity/homeActivityLeft.png") no-repeat center;
		background-color: #fff;
		background-size: auto 100%;

	}
	.home-activity-right{
		float: right;
		width: 49.9%;
		height: 100%;
		background: url("../../../static/images/activity/homeActivityRight.png") no-repeat center;
		background-color: #fff;
		background-size: auto 100%;
	}
</style>