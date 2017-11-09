<template>
	<div :class="{'hot-search-con':true, 'hot-list-Active':hotListIsActive}">
		<div class="hot-list-header">
			<h1 class="hot-list-title">热门搜索</h1>
			<div class="hot-list-header-right" @click="batchChange">
				<i class="iconfont icon-huanyipi"></i>
				<span class="batch-change">换一批</span>
			</div>
		</div>
		<div>
			<div class="hot-search-scene">
				<div class="hot-search-iconscene">
					<span class="iconfont icon-jingdian"></span>
				</div>
				<div class="hot-search-list-con">
					<ul class="hot-search-scene-list">
						<li class="hot-search-item" v-for="item in searchData.scene"
						    :key="item.id">
							<router-link class="hot-search-scene-link" to="/">
								{{item.text}}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="hot-search-city">
				<div class="hot-search-iconcity">
					<span class="iconfont icon-chengshi"></span>
				</div>
				<div class="hot-search-list-con">
					<ul class="hot-search-city-list">
						<li class="hot-search-item" v-for="item in searchData.city"
						    :key="item.id">
							<router-link class="hot-search-city-link" to="/">{{item.text}}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<nearby-scene></nearby-scene>
	</div>

</template>

<script>
	import {AJAX_GET_DATA} from '../types'
	import {mapState, mapActions} from 'vuex'
	import NearbyScene from './NearbyScene'

	export default {
		props: ["hotListIsActive"],
		components: {
			"nearby-scene": NearbyScene
		},
		computed: mapState({
			searchData: state => state.search.searchData
		}),
		mounted() {
			!this.searchData.length && this.getSearchData()
		},
		methods: mapActions({
			getSearchData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			},
			batchChange() {
				var hotSearchSceneList = document.querySelector(".hot-search-scene-list");
				hotSearchSceneList.style.position = "absolute";
				hotSearchSceneList.style.top = -1.72 * Math.round(Math.random() * 3) + 'rem';
				var hotSearchSceneList = document.querySelector(".hot-search-city-list");
				hotSearchSceneList.style.position = "absolute";
				hotSearchSceneList.style.top = -0.87 * Math.round(Math.random() * 4) + 'rem';
			}
		})
	}
</script>

<style scoped>
	.hot-list-header {
		height: .64rem;
		line-height: .64rem;
		padding: 0 .2rem;
		background-color: #f0f5f6;
	}

	.hot-list-title {
		float: left;
		font-size: .26rem;
		color: #888;
	}

	.hot-list-header-right {
		float: right;
		font-size: .26rem;
		color: #00afc7;
	}

	.hot-search-con {
		display: none;
		width: 100%;
		height: 2.76rem;
	}

	.hot-list-Active {
		display: block;
	}

	.hot-search-scene {
		position: relative;
		height: 1.8rem;
		padding-left: .74rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
	}

	.hot-search-city {
		overflow: hidden;
		position: relative;
		padding-left: .74rem;
		height: .8rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
		border-bottom: 1px solid #dce5e7;
	}

	.hot-search-iconscene {
		position: absolute;
		left: 0;
		overflow: hidden;
		line-height: 1.8rem;
		width: .72rem;
		height: 1.8rem;
		color: #c4cdcf;
		text-align: center;
		border-right: 1px solid #dce5e7;
	}

	.hot-search-iconcity {
		position: absolute;
		left: 0;
		overflow: hidden;
		line-height: .8rem;
		width: .72rem;
		height: .8rem;
		color: #c4cdcf;
		text-align: center;
		border-right: 1px solid #dce5e7;
	}

	.hot-search-list-con {
		width: 7.62rem;
		height: 1.8rem;
		zoom: 1;
		overflow: hidden;
		position: relative;
	}

	.hot-search-scene-list, .hot-search-city-list {
		width: 7rem;
		zoom: 1;
	}

	.hot-search-item {
		float: left;
		zoom: 1;
		overflow: hidden;
		position: relative;
		left: 0;
		top: 0;
	}

	.hot-search-scene-link {
		float: left;
		height: .36rem;
		max-width: 2.89rem;
		line-height: .36rem;
		text-align: center;
		display: block;
		padding-left: .3rem;
		padding-right: .3rem;
		border-right: 1px dashed #c9cccd;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: .25rem;
		margin-bottom: .25rem;
	}

	.hot-search-city-link {
		float: left;
		height: .36rem;
		width: 1.67rem;
		line-height: .36rem;
		text-align: center;
		display: block;
		border-right: 1px dashed #c9cccd;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: .25rem;
		margin-bottom: .25rem;
	}


</style>