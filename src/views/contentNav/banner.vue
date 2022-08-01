<template>
		<!-- 轮播图 -->
		<div class="banners">
			<div class="contentBan">
				<el-carousel height="500px">
				  <el-carousel-item>
					<img src="../../assets/img/banners/banner1.jpeg" >
					</el-carousel-item>
				  <el-carousel-item>
					<img src="../../assets/img/banners/banner2.jpeg" >
					</el-carousel-item>
				  <el-carousel-item>
					<img src="../../assets/img/banners/banner3.jpeg" >
					</el-carousel-item>
				  <el-carousel-item>
					<img src="../../assets/img/banners/banner4.jpeg" >
					</el-carousel-item>
				  <el-carousel-item>
					<img src="../../assets/img/banners/banner5.jpeg" >
				  </el-carousel-item>
				  <el-carousel-item>
				  	<img src="../../assets/img/banners/banner6.jpeg" >
				  </el-carousel-item>
				  <el-carousel-item>
				  	<img src="../../assets/img/banners/banner7.jpeg" >
				  </el-carousel-item>
				</el-carousel>
			</div>
		</div>
</template>

<script>
</script>

<style scoped="scoped">
	.banners{
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.contentBan{
		width: 1920px;
		height: 500px;
	}
	
	.el-carousel-item img{
		width: 100%;
		height: 100%;
	}
</style>
