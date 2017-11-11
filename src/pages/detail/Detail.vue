<template>
	<div class="pages">
		<detail-header ></detail-header>
		<detail-main></detail-main>
</div>
</template>

<script>
	import DetailHeader from './components/DetailHeader'
	import DetailMain from './components/DetailMain'


	export default {

		components:{
			"detail-header":DetailHeader,
			"detail-main": DetailMain
		}
	}
</script>

<style scoped>
	.pages{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100rem;
		background: #f5f5f5;
	}
</style>