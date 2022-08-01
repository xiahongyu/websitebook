<template>
	<div class="homeContent">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<banner></banner>
		<BookItem></BookItem>
		<footers></footers>
		<backTop></backTop>
	</div>
</template>

<script>
	import contentNav from './contentNav/contentNav.vue' //顶部导航和右侧导航
	import headers from './header/header.vue' //头部header
	import contentSearch from './contentSearch/contentSearch.vue' //头部搜索
	import banner from './contentNav/banner.vue'
	import BookItem from './contentBody/BookItem.vue' //书籍展示
	import footers from './footer/footer.vue' //尾部
	import backTop from './backTop/backTop.vue' //返回顶部
	export default {
		components: {
			contentNav,
			headers,
			contentSearch,
			banner,
			BookItem,
			footers,
			backTop
		},
		data() {
			return {}
		},
	}
</script>

<style scoped="scoped">
	.homeContent {
		width: 100vw;
		overflow: auto;
	}
</style>
