<template>
	<div class="main-content">
		<ul class="main-list">
			<paginate name="list" :list="list" :per="per" ref="paginator">
				<router-link to="/detail">
					<li class="main-item" v-for="item in paginated('list')" :key="item.id">
						<div class="content-top">
							<div class="main-picture">
								<img class="main-img" :src="item.imgUrl" alt="">
							</div>
							<div class="main-detail">
								<h3 class="main-place">{{item.name}}</h3>
								<span class="main-hot">{{item.hot}}</span>
								<span class="main-price">&yen
										<em class="price-number">{{item.money}}</em>
										<span class="main-text">&nbsp;起</span>
									</span>
								<div class="main-comments">
									<span class="main-iconfont iconfont                                                                                                  ">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
									<span class="main-totalnum">144436评论</span>
								</div>
								<div class="main-location">{{item.address}}</div>
							</div>
						</div>
						<div class="content-middle">
							<h4 class="content-middle-title">{{item.ticketName}}</h4>
							<span class="rmb-symbol">&yen
									<em class="price-number">{{item.qunarprice}}</em>
								</span>
						</div>
						<div class="content-middle">
							<h4>{{item.ticketName2}}</h4>
							<span class="rmb-symbol">&yen
									<em class="price-number">{{item.qunarprice2}}</em>
								</span>
						</div>
					</li>
				</router-link>
			</paginate>
			<div class="paginate-links">
				<div :class="{'paginate-prev':true,'prev':prev,'paginate-active':paginateActivePrev}"
				     @click="goToPrevPage">上一页
				</div>
				<span class="paginate-number">{{pageNumber}}</span>
				<div :class="{'paginate-next':true,'next':next,'paginate-active':paginateActive}"
				     @click="goToNextPage">下一页
				</div>
			</div>
		</ul>


	</div>
</template>

<script>


	import {AJAX_GET_DATA} from '../types'
	import {mapState, mapActions} from 'vuex'

	export default {
		data() {
			return {
				paginate: ['list'],
				paginateActivePrev: false,
				paginateActive: true,
				prev: true,
				next: false,
				pageNumber:1,
				per:5

			}

		},
		computed: mapState({
			list: state => state.list.list
		}),
		mounted() {
			!this.list.length && this.getListData()
		},
		methods: mapActions({
			getListData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			},
			goToPrevPage() {
				if (this.$refs.paginator) {
					this.$refs.paginator.goToPage(-1)
					this.pageNumber  > 1 ? --this.pageNumber : this.pageNumber = 1
					this.paginateActive = true
					this.paginateActivePrev = true
				}
				if(this.pageNumber == 1) {
					this.paginateActivePrev = false
				}
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
				window.pageYOffset = 0
			},
			goToNextPage() {
				if (this.$refs.paginator) {

					this.$refs.paginator.goToPage(this.pageNumber)
					if(this.pageNumber >= (this.list.length / this.per ) - 1){
						this.paginateActive = false;
						this.pageNumber = (this.list.length / this.per)
						this.paginateActive = false
						this.next = true
					}else{
						this.pageNumber++
						this.paginateActive = true
						this.paginateActivePrev = true

					}

					document.body.scrollTop = 0
					document.documentElement.scrollTop = 0
					window.pageYOffset = 0
				}
			}
		})
	}
</script>

<style scoped>
	@import '../../../../static/iconfont/iconfont.css';

	.main-content {
		position: relative;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.main-item {
		margin-bottom: .2rem;
		background: #fff;
	}

	.content-top {
		padding: .2rem;
	}

	.main-picture {
		float: left;
	}

	.main-img {
		width: 1.6rem;
		height: 1.6rem;
	}

	.main-detail {
		position: relative;
		overflow: hidden;
		padding-left: .2rem;
		height: 1.6rem;
	}

	.main-place {
		float: left;
		overflow: hidden;
		max-width: 60%;
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.main-place {
		overflow: hidden;
		max-width: 60%;
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.main-hot {
		display: inline-block;
		margin-left: .06rem;
		width: .3rem;
		height: .3rem;
		background: #ff1200;
		color: #fff;
		font-size: .24rem;
		line-height: .3rem;
		text-align: center;
	}

	.main-price {
		position: absolute;
		top: 0;
		right: 0;
		height: .36rem;
		color: #ff8300;
		font-size: .2rem;
	}

	.rmb-symbol {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		width: 1.2rem;
		height: .9rem;
		color: #ff8300;
		line-height: .9rem;
		text-align: right;
		font-size: .2rem;

	}

	.price-number {
		font-size: .36rem;
	}

	.main-text {
		color: #9e9e9e;
		font-size: .2rem;
	}

	.main-comments {
		margin-top: .38rem;
		height: .64rem;
		line-height: .64rem;
	}

	.main-iconfont {
		z-index: 2;
		color: #00bcd4;
		font-size: .24rem;
	}

	.main-totalnum {
		position: relative;
		top: -.04rem;
		margin-left: .06rem;
		color: #9e9e9e;
		font-size: .24rem;
	}

	.main-location {
		position: absolute;
		bottom: 0;
		color: #9e9e9e;
		white-space: nowrap;
		font-size: .24rem;
	}

	.content-middle {
		position: relative;
		height: .9rem;
		margin: 0 .2rem;
	}

	.content-middle-title{
		overflow: hidden;
		margin-right: 1.2rem;
		color: #212121;
		font-size: .28rem;
		line-height: .9rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.paginate-links {
		display: flex;
		box-sizing: border-box;
		width:100%;
		padding:0 25%;
		height: .6rem;
		line-height: .6rem;
	}

	.paginate-prev {
		float: left;
		width: 1.4rem;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
		text-align: center;
	}
	.paginate-next{
		float: right;
		width: 1.4rem;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
		text-align: center;
	}

	.prev {
		background: #bdbdbd;
		color: #fff;
		border: 0;
	}
	.next{
		background: #bdbdbd;
		color: #fff;
		border: 0;
	}
	.paginate-active {
		display: inline-block;
		width: 1.4rem;
		border: .02rem solid #00afc7;
		background: #fff;
		color: #00afc7;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.paginate-number{
		padding: 0 .1rem;
		flex:1;
		color: #212121;
		line-height: .6rem;
		text-align: center;
	}
</style>