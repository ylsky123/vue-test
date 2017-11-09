<template>
	<div>
		<div :class="{'main-filter':true, 'list-filter-active':listFilterActive, 'filter-active':filterIsActive}">
			<div class="filter-select-left" @click="handleSelectLeft">
				<span :class="{'select-text':true, 'select-color':selectColor}">
				全部分类
				<i :class="{'list-downarrow':true, 'select-border':selectColor}"></i>
			</span>
			</div>
			<div class="filter-select-right" @click="handleSelectRight">
				<span :class="{'select-text':true,'select-color':selectColor1}">
					人气最高
					<i :class="{'list-downarrow':true,'select-border':selectColor1}"></i>
				</span>
			</div>
			<list-menu :selectColor="selectColor" :wrapperActive="wrapperActive"></list-menu>
			<list-popularity :selectColor1="selectColor1"
			                 :popularityActive="popularityActive"></list-popularity>
		</div>
		<div :class="{'opcacity-div':true,'opcacity-div-active':opcatiyDivAcitve}"
		     @click="handleCloseMenu"></div>
	</div>
</template>

<script>
	import ListMenu from './ListMenu'
	import ListPopularity from './ListPopularity'

	export default {
		props: ["listFilterActive"],
		components: {
			"list-menu": ListMenu,
			"list-popularity": ListPopularity
		},
		data() {
			return {
				filterIsActive: false,
				selectColor: false,
				selectColor1: false,
				wrapperActive: true,
				popularityActive: true,
				opcatiyDivAcitve: true


			}
		},
		mounted() {
			this.filterOnscroll()
		},
		methods: {
			filterOnscroll() {
				window.addEventListener('scroll', () => {
					if (window.scrollY > 45) {
						this.filterIsActive = true;
						this.listFilterActive = false
					} else {
						this.filterIsActive = false
					}
				})
			},
			handleSelectLeft() {

				this.selectColor = !this.selectColor;
				this.selectColor1 = false;
				this.wrapperActive = !this.wrapperActive;
				this.popularityActive = true;
				this.opcatiyDivAcitve = false
				if(this.opcatiyDivAcitve = false){
					this.opcatiyDivAcitve = true
				}





			},
			handleSelectRight() {
				this.selectColor = false;
				this.selectColor1 = !this.selectColor1;
				this.wrapperActive = true;
				this.popularityActive = !this.popularityActive;
				if(this.opcatiyDivAcitve = false){
					this.opcatiyDivAcitve = !this.opcatiyDivAcitve;
				}

			},
			handleCloseMenu() {
				this.opcatiyDivAcitve = !this.opcatiyDivAcitve;
				this.selectColor = false;
				this.selectColor1 = false;
				this.popularityActive = true;
				this.wrapperActive = true;
			}

		}
	}
</script>

<style scoped>
	.main-filter {
		position: relative;
		display: block;
		min-height: .8rem;
		width: 100%;
		background-color: #fff;
		z-index: 100;
	}

	.list-filter-active {
		display: none;
	}

	.filter-active {
		position: fixed;
		top: 0;
		left: 0;
	}

	.filter-select-left {
		position: relative;
		overflow: hidden;
		float: left;
		box-sizing: border-box;
		width: 50%;
		background-color: #fff;
		border-bottom: .01rem solid #efefef;
		border-right: .01rem solid #efefef;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		z-index: 100;
	}

	.filter-select-right {
		position: relative;
		overflow: hidden;
		float: right;
		box-sizing: border-box;
		width: 50%;
		background-color: #fff;
		border-bottom: .01rem solid #efefef;
		border-right: .01rem solid #efefef;
		text-align: center;
		border-right: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		z-index: 100;

	}

	.select-text {
		position: relative;
		overflow: hidden;
		width: 100%;
		color: #212121;
		line-height: .8rem;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.select-color {
		color: #00afc7;

	}

	.list-downarrow {
		display: inline-block;
		width: 0;
		height: 0;
		margin-top: .2rem;
		margin-left: .04rem;
		border-left: .1rem solid transparent;
		border-right: .1rem solid transparent;
		border-top: .1rem solid #212121;
	}

	.select-border {
		border-top: 0;
		border-bottom: .1rem solid #00afc7;
	}

	.opcacity-div {
		background: rgba(0, 0, 0, 0.45);
		position: absolute;
		display: block;
		left: 0;
		right: 0;
		min-height: 100rem;
		bottom: 0;
		z-index: 80;
	}

	.opcacity-div-active {
		display: none;
	}

</style>