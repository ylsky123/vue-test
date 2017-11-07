<template>
	<div class="cities-page">
		<cities-header></cities-header>
		<cities-tab></cities-tab>
	</div>
</template>

<script>
	import CitiesHeader from './components/CitiesHeader';
	import CitiesTab from "./components/CitiesTab";

	export default {
		components: {
			CitiesHeader,
			"cities-header": CitiesHeader,
			"cities-tab": CitiesTab
		},
		methods: {
			handleClick() {
				router.go(-1)
			}
		}
	}
</script>

<style scoped>

	.cities-page {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}

</style>