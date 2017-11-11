<template>
	<div>
		<div :class="{'list-menu-con':true, 'con-active':wrapperActive}" >
			<div :class="{'list-menu-wrapper':true,'con-active':wrapperActive}" id="wrapper">
				<div class="list-menu-scroller">
					<ul class="list-menu-list">
						<li class="list-menu-item" v-for="(item,index) in listMenu">
							<img class="list-menu-img" :src="item.imgUrl" alt="">
							{{item.text}}
							<span class="list-menu-num">{{item.number}}</span>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import {AJAX_GET_DATA} from '../types'
	import {mapState, mapActions} from 'vuex'
	require('../../../utils/iscroll-probe.js')

	export default {
		props:["wrapperActive"],

		updated(){
			this.createIScroll()
			this.firstListItemStyle()
		},
		computed: mapState({
			listMenu: state => state.list.listMenu

		}),
		mounted() {
			!this.listMenu.length && this.getListData()
		},
		methods: mapActions({
			getListData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			},
			createIScroll() {

				this.myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true })
				this.myScroll.on("scroll",function(){

				})


			},
			firstListItemStyle() {

					let listItem = document.querySelectorAll(".list-menu-item")
					listItem[0].style.backgroundColor = "#f5f5f5"


			}

		})
	}
</script>

<style scoped>
	.list-menu-con{
		display: block;
		position: relative;
		top:0;
		left: 0;
		width:100%;
		background: #f5f5f5;
		z-index: 1;

	}
	.con-active{
		display: none;
	}
	.list-menu-wrapper{
		overflow: scroll;
		position: relative;
		top:0;
		left: 0;
		width:50%;
		height: 4.8rem;
		background: #f5f5f5;
	}


	.list-menu-list{
		position: relative;
		top:0;
		background: #fff;
	}
	.list-menu-item{
		overflow: hidden;
		height: .8rem;
		border-bottom: .01rem solid #efefef;
		padding-left: .3rem;
		line-height: .8rem;
		color: #212121;
		text-align: left;
		font-size: .24rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.list-menu-img{
		width: .3rem;
		height: .3rem;
		vertical-align: middle;
		margin-right: .1rem;

	}
	.list-menu-num{
		float: right;
		margin-right: .2rem;
		font-size: .24rem;
		color: #9e9e9e;
	}

</style>