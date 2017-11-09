<template>
	<div >
		<div :class="{'search-nearby-con':true, 'scene-active':sceneIsActive}" >
			<div class="search-nearby-btn">搜索身边的景点</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["sceneIsActive"]
	}
</script>

<style scoped>
	.search-nearby-con {
		position: absolute;
		top:0.9rem;
		left:0;
		width:100%;
		display: none;
		box-sizing: border-box;
		padding: .2rem;
		background-color: #fff;
		z-index:100;
		box-shadow: 0 1px 3px 1px #c7ced4;
	}

	.search-nearby-btn {
		height: .72rem;
		line-height: .72rem;
		background-color: #fff;
		text-align: center;
		font-size: .26rem;
		color: #333;
		border: 1px solid #dde1e3;
		border-radius: 2px;
	}
	.scene-active{
		display:block;
	}
</style>