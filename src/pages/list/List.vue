<template>
	<div class="list-pages">
		<list-header></list-header>
		<list-main></list-main>
	</div>
</template>

<script>
	import ListHeader from './components/ListHeader'
	import ListMain from './components/ListMain'

	export default {
		components: {
			"list-header":ListHeader,
			"list-main": ListMain,

		}
	}
</script>

<style>
	@import '../../../static/iconfont/iconfont.css';

	.list-pages{
		position: relative;
		width: 100%;
		background-color: #f5f5f5;
	}



</style>