<template>
	<div>
		<h2 class="cities-title">热门城市</h2>
		<ul class="cities-list">
			<li class="hot-cities-list-item" v-for="item in citiesData.internal.hotCities" :key="item.id"
			    @click="handleCitiesClick(item.text)">
				<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
			</li>
		</ul>
		<h2 class="cities-title">字母排序</h2>
		<ul class="words-sort-list">
			<li class="words-sort-list-item" v-for="(item, index) in citiesData.internal.words"
			    :key="item.id" @click="wordsJump(index)">
				<div class="cities-list-link">{{item.text}}</div>
			</li>
		</ul>
		<div class="words-jump">
			<h2 class="cities-title ">A</h2>
			<ul class="cities-list">
				<li class="words-list-item" v-for="item in citiesData.internal.A" :key="item.id"
				    @click="handleCitiesClick(item.text)">
					<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
		<div class="words-jump">
			<h2 class="cities-title ">B</h2>
			<ul class="cities-list">
				<li class="words-list-item" v-for="item in citiesData.internal.B" :key="item.id"
				    @click="handleCitiesClick(item.text)">
					<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
		<div class="words-jump">
			<h2 class="cities-title ">C</h2>
			<ul class="cities-list">
				<li class="words-list-item" v-for="item in citiesData.internal.C" :key="item.id"
				    @click="handleCitiesClick(item.text)">
					<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
		<div class="words-jump">
			<h2 class="cities-title ">D</h2>
			<ul class="cities-list">
				<li class="words-list-item" v-for="item in citiesData.internal.D" :key="item.id"
				    @click="handleCitiesClick(item.text)">
					<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
		<div class="words-jump">
			<h2 class="cities-title ">E</h2>
			<ul class="cities-list">
				<li class="words-list-item" v-for="item in citiesData.internal.E" :key="item.id"
				    @click="handleCitiesClick(item.text)">
					<router-link class="cities-list-link" to="/">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>


	export default {
		props:["citiesData"],
		data() {
			return {
				position: false,
				isActive: true,
				isActive1: false
			}
		},

		methods: {

			handleCitiesClick(val) {
				this.$store.commit("getCitiesVal", val)
			},
			wordsJump(index) {
				let jumpEle = document.querySelectorAll('.words-jump')

				let top = jumpEle[index].offsetTop

				document.body.scrollTop = top

				document.documentElement.scrollTop = top

				window.pageYOffset = top
			}

		}

	}
</script>

<style scoped>
	.cities-title {
		overflow: hidden;
		font-size: .24rem;
		margin: .24rem .3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.cities-list {
		position: relative;
		overflow: hidden;
		z-index: 0;
		background-color: #fff;

	}

	.hot-cities-list-item {
		box-sizing: border-box;
		float: left;
		width: 33.33%;
		height: .9rem;
		line-height: .9rem;
		border-bottom: .02rem solid #ddd;
		border-right: 0.02rem solid #ddd;
		font-size: .28rem;
		text-align: center;
		position: relative;
		z-index: 10;
		color: #212121;
	}

	.cities-list-link {

		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .28rem;
		color: #212121;
	}

	.words-sort-list {
		position: relative;
		overflow: hidden;
		z-index: 0;
		background-color: #fff;
		padding: .3rem 0;
	}

	.words-sort-list-item {
		width: 16.66%;
		height: .9rem;
		line-height: .9rem;
		font-size: .28rem;
		text-align: center;
		float: left;
		position: relative;
		z-index: 10;
		color: #212121;
	}

	.words-list-item {
		box-sizing: border-box;
		width: 25%;
		height: .9rem;
		line-height: .9rem;
		font-size: .28rem;
		text-align: center;
		border-bottom: .02rem solid #ddd;
		border-right: 0.02rem solid #ddd;
		margin-bottom: 0.02rem;
		float: left;
		position: relative;
		z-index: 10;
		color: #212121;
	}
</style>