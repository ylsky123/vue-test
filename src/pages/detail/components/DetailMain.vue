<template>
	<div class="detail-main">
		<header-figure></header-figure>
		<base-info></base-info>
		<comment-info></comment-info>
		<notice-info></notice-info>
		<detail-list></detail-list>
	</div>
</template>

<script>
	import DetailHeaderFigure from './DetailHeaderFigure'
	import BaseInfo from './BaseInfo'
	import CommentInfo from  './CommentInfo'
	import NoticeInfo from './NoticeInfo'
	import DetailList from './DetailList'
	export default {
		components:{
			"header-figure": DetailHeaderFigure,
			"base-info":BaseInfo,
			"comment-info":CommentInfo,
			"notice-info":NoticeInfo,
			"detail-list":DetailList
		}
	}

</script>

<style scoped>
	.detail-main{
		position: relative;
	}

</style>