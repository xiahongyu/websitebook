<template>
	<!-- 右侧回到顶部按钮和购物车 -->
	<div class="backTop" :class="thisScroll == true ? 'backTopDiv1':'backTopDiv2'" ref="tops">
		<div @click="backTop">
			<el-button type="danger" icon="el-icon-upload2" circle size="medium"></el-button>
		</div>

		<div>
			<router-link to="/shoppingCar">
				<el-button type="primary" icon="el-icon-shopping-cart-full" circle size="medium"></el-button>
			</router-link>
		</div>

		<div></div>
	</div>
</template>

<script>
	export default {
		props: ['attr'],
		data() {
			return {
				scroll: '',
				thisScroll: false,
			}
		},
		methods: {
			scrolls() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if (this.scroll > 1000) {
					this.thisScroll = true
				} else {
					this.thisScroll = false
				}
			},
			backTop() {
				let height = 100;
				let timer = null;
				let tops = document.documentElement.scrollTop || document.body.scrollTop;
				timer = setInterval(function() {
					document.documentElement.scrollTop -= height
					tops -= height;
					if ((tops % height) < 10) {
						clearInterval(timer);
						document.documentElement.scrollTop = 0;
					}
				}, 10)
			}
		},
		mounted() {
			window.addEventListener("scroll", this.scrolls);
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrolls, true);
		}
	}
</script>

<style scoped="scoped">
	.backTop {
		position: fixed;
		top: 80%;
		right: 40px;
	}

	.backTop div {
		margin-top: 12px;
	}

	.el-button {
		font-size: 22px;
	}

	.backTopDiv1 {
		display: block;
	}

	.backTopDiv2 {
		display: none;
	}
</style>
