<template>
	<div class="page">
		<tour-list-header :isActive="isActive"></tour-list-header>
		<tour-list-tag></tour-list-tag>
	</div>
</template>

<script>
	import TourListHeader from './components/TourListHeader'
	import TourListTag from './components/TourListTag'

	export default {
		data() {
			return {
				isActive: false
			}
		},
		components: {
			"tour-list-header": TourListHeader,
			"tour-list-tag": TourListTag,

		}
	}
</script>

<style scoped>
	.page{
		background-color: #f5f5f5;
	}
</style>