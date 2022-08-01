<template>
	<div class="myContent">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped="scoped">
	.myContent {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
