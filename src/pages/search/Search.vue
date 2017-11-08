<template>
	<div class="search-page">
		<search-header></search-header>
	</div>
</template>

<script>
	import SearchHeader from './components/SearchHeader'


	export default {
		components: {
			"search-header": SearchHeader
		}
	}
</script>

<style>
	.search-page {
		overflow: hidden;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>