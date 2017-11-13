<template>
	<div>
		<div class="cities-tab-con">
			<ul class="cities-tab-ul">
				<li :class="{ active: isActive, 'cities-tab':tab}" @click="handleTabClick">国内</li>
				<li :class="{ active1: isActive1, 'cities-tab':tab}" @click="handleTabClick">国际</li>
			</ul>
		</div>
		<cities-internal v-if="show" :citiesData="citiesData"></cities-internal>
		<cities-overseas v-if="show1" :citiesData="citiesData"></cities-overseas>
	</div>
</template>

<script>
	import CitiesInternal from "./Internal";
	import CitiesOverseas from "./Overseas";
	import {AJAX_GET_DATA} from '../types.js'
	import {mapState, mapActions} from 'vuex'

	export default {

		data() {
			return {
				tab: true,
				isActive: true,
				isActive1: false,
				show: true,
				show1: false
			}
		},

		components: {
			"cities-internal": CitiesInternal,
			"cities-overseas": CitiesOverseas
		},
		computed: mapState({
			citiesData(state) {
				return state.cities.citiesData
			}

		}),
		mounted() {
			if(this.citiesData.length == 0){
			 	this.getCitiesData()
			}
		},
		methods: {
			handleTabClick() {
				this.show = !this.show;
				this.show1 = !this.show1;
				this.isActive = !this.isActive;
				this.isActive1 = !this.isActive1;
			},
			...mapActions({
				getCitiesData(dispatch) {
					dispatch(AJAX_GET_DATA)
				}
			})
		}




	}
</script>

<style scoped>
	.cities-tab-con {
		height: .4rem;
		line-height: .4rem;
		background-color: #00bcd4;
		padding: .2rem 1rem;
		color: #fff;
	}

	.cities-tab {
		width: 50%;
		float: left;
		text-align: center;
		background-color: #00bcd4;
		font-size: .28rem;
		color: #fff;
	}

	.cities-tab-ul {
		border: 1px solid #fff;
		border-radius: .03rem;
		zoom: 1;
		overflow: hidden;
	}

	.active, .active1 {
		background-color: #fff;
		color: #00bcd4;
	}
</style>