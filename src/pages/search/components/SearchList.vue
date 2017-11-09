<template>
	<div :class="{'search-list-con':true, 'search-isActive':searchIsActive}">
		<div class="search-list-header">
			<h1 class="search-list-title">搜索建议</h1>
			<span class="clear-search-list" @click="clearSearchList">关闭</span>
		</div>
		<ul class="search-list">
			<li class="search-list-item" v-for="item in searchData.searchList">
				<i class="search-list-icon iconfont icon-jingdian"></i>
				<span class="search-list-describe">{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>

	import {AJAX_GET_DATA} from '../types'
	import {mapState, mapActions} from 'vuex'

	export default {
		props: ["searchIsActive"],
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

	.search-isActive {
		display: block;
	}

	.search-list-header {
		position: relative;
		height: .5rem;
		border-bottom: 1px solid #cacaca;
		background: #f3f3f3;
		color: #555;
		font-size: .24rem;
		line-height: .5rem;
	}

	.search-list-title {
		margin-left: .3rem;
	}

	.clear-search-list {
		position: absolute;
		top: 0;
		right: 10px;
		color: #555;
	}

	.search-list-icon {
		color: #36d08c;
		position: relative;
		top: -.05rem;
		margin-right: .2rem;
		width: .3rem;
		height: .3rem;
	}

	.search-list {
		padding-left: .14rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
	}

	.search-list-item {
		height: .8rem;
		padding: 0 .3rem;
		border-bottom: 1px solid #ccc;
		background: #fff;
		color: #666;
		font-size: .28rem;
		line-height: .8rem;
		text-align: left;
	}

</style>