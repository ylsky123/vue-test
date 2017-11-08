<template>
	<div :class="{'search-list-con':true, active2:isActive2}">
		<div class="search-list-header">
			<h1 class="search-list-title">搜索建议</h1>
			<span class="clear-search-list" @click="clearSearchList">关闭</span>
		</div>
		<ul class="search-list">
			<li class="search-list-item" v-for="item in searchData.searchList">
				<i class="search-list-scene iconfont icon-jingdian"></i>
				<span class="search-list-describe">{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>

	import {AJAX_GET_DATA} from '../types'
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ["isActive2"],
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
			clearSearchList() {
				this.$emit("clearInput")
			}
		})
	}
</script>

<style scoped>
	.search-list-con {
		display: none;
		width: 100%;
		min-height: 2.76rem;
	}

	.active2 {
		display: block;
	}

	.search-list-header {
		height: .64rem;
		line-height: .64rem;
		padding: 0 .2rem;
		background-color: #f5f5f5;
	}

	.search-list-title {
		float: left;
		font-size: .26rem;
		color: #888;
	}

	.clear-search-list {
		float: right;
		font-size: .26rem;
		color: #888;
	}

	.search-list-scene {
		color: #4ed01f;
	}

	.search-list {
		padding-left: .14rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
	}

	.search-list-item {
		height: .8rem;
		line-height: .8rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
	}

</style>