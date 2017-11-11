<template>
	<div>
		<transition name="fade" >
			<div class="detail-header" :style="{opacity:opacityActive}">
				<router-link to="/" class="detail-header-left iconfont icon-fanhui"
				             @click="handleClick"></router-link>
				<h1 class="detail-header-title">故宫</h1>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				opacityActive:0
			}
		},
		mounted() {
			this.detailOnscroll()
		},
		methods: {
			handleClick() {
				router.go(-1)
			},
			detailOnscroll() {
				window.addEventListener('scroll', () => {
					if(  window.scrollY > 200 ){
						this.opacityActive = 1
					}else{
						this.opacityActive = window.scrollY/100
					}
				})
			}

		}
	}
</script>

<style scoped>

	.detail-header {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		z-index: 100;
	}

	.detail-header-left {
		position: absolute;
		font-size: .36rem;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		color: #fff;
		text-align: center;
	}

	.detail-header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
</style>