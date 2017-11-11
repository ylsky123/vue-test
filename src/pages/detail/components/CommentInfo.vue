<template>
	<div class="comment-info">
		<span class="comment-icon"></span>
		<span class="comment-icon-xing iconfont">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
		<span class="comment-score">5.0分</span>
		<span class="comment-total-num">155874评论&nbsp;
			<span class="iconfont icon-xiangyou comment-right-arrow"></span>
		</span>
	</div>
</template>

<script>

</script>

<style>
	.comment-info{
		margin-bottom: .2rem;
		background-color: #fff;
		height: .8rem;
		line-height: .8rem;
	}
	.comment-icon{
		display: inline-block;
		width: .36rem;
		height: .36rem;
		background: url('../../../../static/images/detail.png') 0 -1.34rem no-repeat;
		margin-left: .2rem;
		margin-right: .1rem;
		background-size: .4rem 3rem;
	}
	.comment-icon-xing{
		display: inline-block;
		font-size: .30rem;
		color: #00bcd4;
	}

	.comment-score{
		display: inline-block;
		margin-left: .1rem;
		color: #00afc7;
	}
	.comment-total-num{
		float: right;
		display: inline-block;
		height: .8rem;
		line-height: .8rem;
		font-size: .28rem;
		margin-left: .16rem;
		margin-right: .2rem;
		color: #9e9e9e;
	}
	.comment-right-arrow{
		position: relative;
		top: .02rem;
	}
</style>

