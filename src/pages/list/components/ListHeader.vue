<template>
	<div >
		<div>
			<div class="search-header">
				<router-link to="/" class="search-header-left iconfont icon-fanhui"
				             @click="handleClick"></router-link>
				<h1 class="search-header-title">
					<input type="text" name="keyword" v-model="value" class="search-header-input"
					       autocomplete="off" placeholder="输入城市或景点"
					       @input="input()"/>
					<i :class="{'delete':true,'iconfont':true,'icon-shanchu':true,'delete-active':deleteIsActive}"
					   @click="deleteInput"></i>
				</h1>
				<span class="search-header-right">
					<a class="search-header-submit">搜索</a>
				</span>
			</div>
		</div>
		<search-list :searchIsActive="searchIsActive" @clearInput="clearInput"></search-list>
		<nearby-scene :sceneIsActive="sceneIsActive"></nearby-scene>
		<list-filter :listFilterActive="listFilterActive"></list-filter>
	</div>
</template>

<script>
	import NearbyScene from './NearbyScene'
	import SearchList from '../../search/components/SearchList'
	import ListFilter from './ListFilter'


	export default {
		components: {
			"nearby-scene": NearbyScene,
			"search-list":SearchList,
			"list-filter": ListFilter,
		},

		directives: {
			focus: {
				inserted: function (el) {
					el.focus()
				}
			}
		},

		data() {
			return {
				sceneIsActive:false,
				deleteIsActive: false,
				searchIsActive: false,
				listFilterActive: false,
				value: "北京"
			}
		},

		methods: {
			handleClick() {
				router.go(-1)
			},
			input() {
				if (this.value == "") {
					this.sceneIsActive = true;
					this.deleteIsActive = false;
					this.searchIsActive = false;

				} else {
					this.sceneIsActive = false;
					this.deleteIsActive = true;
					this.searchIsActive = true;
				}
				if(this.value == "北京") {
					this.searchIsActive = false;
				}else{
					this.listFilterActive = true
				}
			},
			deleteInput() {
				this.value = "";
				this.sceneIsActive = false;
				this.deleteIsActive = false;
				this.searchIsActive = false;

			},
			clearInput() {
				this.value = "";
				this.deleteIsActive = false;
				this.searchIsActive = false;
			}
		}
	}
</script>

<style scoped>
	.search-header {
		position: relative;
		display: flex;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		color: #fff;
		z-index: 91;
	}

	.search-header-left {
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .36rem;
		text-align: left;
	}

	.search-header-title {
		box-sizing: border-box;
		flex: 1;
		position: relative;
		height: .6rem;
		padding: 0 .6rem 0 .2rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}

	.delete {
		display: none;
		position: absolute;
		top: .04rem;
		right: 0;
		width: .58rem;
		height: .58rem;
		color: #cacaca;
		text-align: center;
		font-size: .4rem;
	}

	.delete-active {
		display: block;
	}

	.search-header-input {
		position: relative;
		display: block;
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		padding: .1rem 0;
		border: 0;
		font-family: "Microsoft Yahei", Arial;
		font-size: .28rem;
		border-radius: .06rem;
	}

	.search-header-right {
		display: inline-block;
		height: .88rem;
		line-height: .88rem;
		padding: 0 .1rem;
	}

	.search-header-submit {
		display: inline-block;
		width: .74rem;
		margin-right: .04rem;
		color: #fff;
		font-size: .28rem;
		text-align: center;
	}


</style>