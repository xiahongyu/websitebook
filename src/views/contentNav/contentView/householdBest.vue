<template>
	<div class="baokuan">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="baokuanContent">
			<div class="baokuanHeader">
				<p>
					<span>
						<router-link to="/home">首页</router-link>
					</span>
					<span> > </span>
					<span>["家居系列","家居日百"]</span>
				</p>
				<div class="content">
					<header>
						<span>价格</span>
						<span class="inputVal">
							<el-input v-model="price1" clearable></el-input>
						</span>
						<span>——</span>
						<span class="inputVal">
							<el-input v-model="price2" clearable></el-input>
						</span>
					</header>
					<section>
						<el-button @click="clearModel">清空筛选项</el-button>
						<el-button type="primary" @click="queren">确认</el-button>
					</section>
				</div>
			</div>
			<!-- 展示全部商品内容 -->
			<div class="baokuanBody" v-if="!shaixuan">
				<div class="pageContent">
					<div class="contentDiv">
						<router-link :to="{'name':'BookItem/bookDetail',params:{'item':item}}"
							v-for="(item,index) in nowTableData" :key="index">
							<div class="contentItem">
								<div class="imgs"><img
										:src="`${require(`../../../assets/img/bookItem/${item.imgurl}`)}`" alt=""></div>
								<p class="titles">{{item.title | slices}}</p>
								<p class="author">{{item.author}}</p>
								<p class="prices"><span class="price">￥{{item.price}}</span><span
										class="oldprice">￥{{item.oldprice}}</span></p>
							</div>
						</router-link>
					</div>

					<el-pagination class="tabListPage" background layout="prev,pager,next" :total="tableData.length"
						:page-size="this.pageSize" :current-page.sync="currentPage1">
					</el-pagination>
				</div>
			</div>
			<!-- 筛选价格内容 -->
			<div class="baokuanBody" v-else>
				<div class="pageContent">
					<div class="contentDiv">
						<router-link :to="{'name':'BookItem/bookDetail',params:{'item':item}}"
							v-for="(item,index) in priceList" :key="index">
							<div class="contentItem">
								<div class="imgs"><img
										:src="`${require(`../../../assets/img/bookItem/${item.imgurl}`)}`" alt=""></div>
								<p class="titles">{{item.title | slices}}</p>
								<p class="author">{{item.author}}</p>
								<p class="prices"><span class="price">￥{{item.price}}</span><span
										class="oldprice">￥{{item.oldprice}}</span></p>
							</div>
						</router-link>
					</div>
					<el-pagination class="tabListPage" background layout="prev,pager,next" :total="tableData.length"
						:page-size="pageSize" :current-page.sync="currentPage1">
					</el-pagination>
				</div>
			</div>
		</div>
		<footers></footers>
		<backTop></backTop>
	</div>
</template>

<script>
	import bookdata from '../../../common/index.js'
	import headers from '../../header/header.vue'
	import contentSearch from '../../contentSearch/contentSearch.vue'
	import contentNav from '../contentNav.vue'
	import footers from '../../footer/footer.vue'
	import backTop from '../../backTop/backTop.vue'
	export default {
		components: {
		 headers,
			contentSearch,
			contentNav,
			footers,
			backTop
		},
		data() {
			return {
				price1: '',
				price2: '',
				tableData: [], //数据列表
				currentPage1: 1, //页数
				pageSize: 15, //每页多少条数据
				priceList: [], //价格筛选列表
				shaixuan: false, //标识是否有筛选内容
				bookdata: bookdata,
			}
		},
		methods: {
			clearModel() { //清空
				this.price1 = '';
				this.price2 = '';
			},
			queren() { //点击确认进行筛选
				let that = this;
				if (this.price1 != '' && this.price2 != '') {
					this.shaixuan = true
					that.tableData.forEach((e) => {
						if (e.price >= that.price1 && e.price <= that.price2) {
							that.priceList.push(e);
						}
					})
				} else {
					this.shaixuan = false
					this.$message({
						type: 'warning',
						message: '筛选内容都不能为空!'
					})
				}
			},
		},
		mounted() {
			this.tableData = this.bookdata.bookInfo;
		},
		filters: {
			slices(value) {
				return value.slice(0, 13) + "...";
			},
		},
		computed: {
			nowTableData() {
				return this.tableData.slice((this.currentPage1 - 1) * this.pageSize, this.currentPage1 * this.pageSize);
			}
		},
		watch: {
			pageSize() {
				let dataLen = parseInt(this.tableData.length / this.pageSize);
				if (dataLen == 0) {
					return 1;
				} else {
					return dataLen + 1;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.baokuan {
		width: 100vw;
		overflow-x: hidden;
	}

	.baokuanContent {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 60px;
	}

	.baokuanHeader {
		width: 1200px;
		height: 200px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.baokuanHeader p {
		width: 100%;
		margin: 20px 0px 40px 0px;
		display: flex;
	}

	.inputVal {
		width: 120px;
		display: block;
	}

	.baokuanContent span {
		margin-right: 20px;
		color: #555;
	}

	.baokuanContent p a {
		text-decoration: none;
		font-weight: bold;
		color: black;
	}

	.content {
		width: 100%;
		height: 140px;
	}

	.content header {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 10px 0px;
		border-top: 1px dashed #ccc;
		border-bottom: 1px dashed #ccc;
	}

	.content section {
		width: 100%;
		padding: 10px;
		border-bottom: 1px dashed #ccc;
		display: flex;
		justify-content: center;
	}

	.baokuanBody {
		margin-top: 40px;
	}

	.pageContent {
		width: 1200px;
		border: 1px solid #ccc;
		padding-bottom: 16px;
	}

	.tabListPage {
		margin-top: 20px;
	}

	.contentDiv {
		width: 100%;
		padding-top: 20px;
		background-color: #fff;
		border-radius: 6px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.contentDiv a {
		color: #333;
		margin-bottom: 24px;
	}

	.contentDiv a:hover {
		color: deepskyblue;
		transition: all 0.3s;
	}

	.contentItem {
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-shadow: 0 0 4px #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		cursor: pointer;
	}

	.contentItem .imgs {
		width: 100%;
		height: 200px;
	}

	.contentItem .imgs img {
		width: 100%;
		height: 100%;
	}

	.contentItem .titles,
	.author {
		margin: 5px 0px;
		font-size: 14px;
	}

	.contentItem .prices {
		text-align: center;
	}

	.contentItem .prices span {
		margin: 0px 6px;
	}

	.contentItem .price {
		font-size: 18px;
		color: red;
		font-weight: bold;
	}

	.oldprice {
		font-size: 14px;
		color: #ccc;
		text-decoration: line-through;
	}
</style>
