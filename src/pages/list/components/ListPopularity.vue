<template>
	<div>
		<div :class="{'popularity-menu-con':true,'popularity-active':popularityActive}">
			<div :class="{'list-menu-wrapper':true,'popularity-active':popularityActive}">
				<div class="popularity-menu-item">
					推荐排序
				</div>
				<div class="popularity-menu-item">
					离我最近
				</div>
				<div class="popularity-menu-item active-bgcolor">
					人气最高
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		props:["popularityActive"]

	}
</script>

<style scoped>
	.popularity-menu-con{
		display: block;
		position: absolute;
		top:0.8rem;
		left: 0;
		width:100%;
		background: #f5f5f5;
		z-index: 1;
	}
	.list-menu-wrapper{
		display: block;
		position: relative;
		top:0;
		left: 0;
		width:100%;
		background: #fff;
	}
	.popularity-active{
		display: none;
	}
	.popularity-menu-item{
		padding-left: .3rem;
		line-height: .8rem;
		height: .8rem;
		overflow: hidden;
		border-bottom: 0.01rem solid #f1f1f1;
		text-align: center;
		color: #212121;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.active-bgcolor{
		background: #f1f1f1;
	}

</style>