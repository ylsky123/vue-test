<template>
	<div class="baseinfo">
		<div class="baseinfo-address" >
			<p class="baseinfo-address-txt">
				<span class="iconfont icon-dingwei baseinfo-address-icon"></span>
				北京市东城区景山前街4号
				<span class="iconfont icon-xiangyou baseinfo-address-arrow"></span>
			</p>
		</div>
		<div class="baseinfo-intro border-top">
			<p class="baseinfo-intro-txt">
				<span  class="iconfont icon-img baseinfo-intro-icon"></span>
				查看景点简介及开放时间
				<span class="iconfont icon-xiangyou baseinfo-address-arrow"></span>
			</p>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
	.baseinfo{
		position: relative;
		top: -.1rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
	}
	.baseinfo-address{
		display: block;
		position: relative;
		height: .88rem;
		color: #212121;
		line-height: .88rem;
	}
	.border-top{
		border-top:.01rem solid #e9e9e9;
	}
	.baseinfo-intro{
		display: block;
		position: relative;
		height: .88rem;
		color: #212121;
		line-height: .88rem;
	}
	.baseinfo-address-txt{
		overflow: hidden;
		padding-right: .56rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.baseinfo-address-icon{
		margin-right: .2rem;
		color: #9e9e9e;
	}
	.baseinfo-address-arrow{
		position: absolute;
		right: 0;
		top: .05rem;
		color: #b4b4b4;
	}
	.baseinfo-intro-icon{
		position: relative;
		top: .02rem;
		margin-right: .2rem;
		color: #9e9e9e;
	}
</style>