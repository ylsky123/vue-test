<template>
	<div class="home-activity-con">
		<div class="home-activity-left">
			<h3 class="activtity-title">精选温泉</h3>
			<p class="activity-describe">5折开泡</p>
		</div>
		<div class="home-activity-right">
			<h3 class="activtity-title">金秋大促</h3>
			<p class="activity-describe">门票1元起</p>
		</div>
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
	.activtity-title{
		overflow: hidden;
		height:.45rem;
		font-weight:900;
		color: #f00;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.activity-describe{
		overflow: hidden;
		font-size:.2rem;
		color: #626262;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.home-activity-left,.home-activity-right{
		float: left;
		box-sizing: border-box;
		width: 49.9%;
		height: 100%;
		padding-top:.35rem;
		padding-right:1.5rem;
		background: url("../../../../static/images/activity/homeActivityLeft.png") no-repeat right;
		background-color: #fff;
		background-size: auto 100%;
		text-align: center;

	}
	.home-activity-right{
		float: right;
		background: url("../../../../static/images/activity/homeActivityRight.png") no-repeat right;
		background-color: #fff;
		background-size: auto 100%;
	}
</style>