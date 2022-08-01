<template>
	<!-- 书籍详情页 -->
	<div class="bookDetail">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="detailContent">
			<div class="detailDiv">
				<header>
					<span class="homeLink">首页&nbsp;&nbsp;>&nbsp;</span>
					<span>{{ bookDetails.title }}</span>
				</header>

				<div class="showBody">
					<div class="showLeft">
						<div class="leftTop"><img
								:src="`${require(`../../../assets/img/bookItem/${bookDetails.imgurl}`)}`" alt="" />
						</div>
						<div class="leftBottom">
							<p>
								<span style="margin-right: 20px;color: deepskyblue;">浏览次数643</span><span>销售22</span>
							</p>
						</div>
					</div>

					<div class="showRight">
						<div class="rightTop">
							<p class="p1">{{ bookDetails.title }}</p>
							<p>
								<span>作者</span><span>{{ bookDetails.author }}</span>
								<span>出版社</span><span>{{ bookDetails.chuban }}</span>
								<span>ISBN</span><span></span>
								<span>出版时间</span><span>{{ bookDetails.time }}</span>
							</p>
							<p class="p3">
								<span>价格</span><span>￥{{ bookDetails.price }}</span>&nbsp;<span>￥{{ bookDetails.oldprice }}</span>
								<span class="spanred">开通VIP会员，享受更多折扣</span>
							</p>
							<p>
								<span>配送至</span>
							<div>
								<el-cascader :options="options" :props="props" clearable></el-cascader>
							</div>
							</p>
							<p>
								<span>商户</span>
								<el-button size="medium">薪传教育（周末不发货）</el-button>
								<span class="spanred">由您选择的商户发货并提供售后服务，如选择不同商户将分别计算运费。</span>
							</p>
							<p>
								<span>数量</span>
								<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字">
								</el-input-number>
								<span class="spanred">线上库存{{total}}件</span>
							</p>
						</div>
						<div class="rightBottom">
							<el-button type="success" @click="liji">立即购买</el-button>
							<el-button type="primary" @click="addCar">加入购物车</el-button>
							<el-button type="warning" @click="soucang">收<i class="el-icon-sell el-icon--center"></i>藏
							</el-button>
							<router-link to="/shoppingCar">
								<el-button type="danger">购物车<i class="el-icon-s-goods"></i></el-button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footers></footers>
	</div>
</template>

<script>
	import headers from '../../header/header.vue' //头部header
	import contentSearch from '../../contentSearch/contentSearch.vue' //头部搜索
	import contentNav from '../../contentNav/contentNav.vue' //顶部导航和右侧导航
	import footers from '../../footer/footer.vue'
	export default {
		components: {
			headers,
			contentSearch,
			contentNav,
			footers
		},
		data() {
			return {
				id: this.$route.params.id,
				bookDetails: {},
				num: 1,
				total: 100,
				props: {
					multiple: true
				},
				options: [{
						value: 2,
						label: '上海',
						children: [{
								value: 3,
								label: '普陀'
							},
							{
								value: 4,
								label: '黄埔'
							}, , {
								value: 5,
								label: '徐汇'
							}
						]
					}, {
						value: 7,
						label: '江苏',
						children: [{
								value: 8,
								label: '南京'
							},
							{
								value: 9,
								label: '苏州'
							},
							{
								value: 10,
								label: '无锡'
							}
						]
					}, {
						value: 12,
						label: '浙江',
						children: [{
								value: 13,
								label: '杭州'
							},
							{
								value: 14,
								label: '宁波'
							},
							{
								value: 15,
								label: '嘉兴'
							}
						]
					},
					{
						value: 101,
						label: '湖南',
						children: [{
								value: 102,
								label: '长沙'
							},
							{
								value: 103,
								label: '娄底'
							},
							{
								value: 104,
								label: '衡阳'
							},
							{
								value: 105,
								label: '益阳'
							}
						]
					}
				]

			}
		},
		created() {
			this.bookDetails = this.$route.params.item;
		},
		methods: {
			handleChange(value) {
				this.total = 101 - value;
			},
			liji() {
				this.$store.commit('buyNow', this.bookDetails);
				this.$store.commit('nowShop', true);
				setTimeout(() => {
					this.$router.push('/nowShopping');
				}, 0)
			},
			addCar() {
				if (!this.$store.state.isLogin) {
					this.$notify({
						title: '加入购物车成功',
						message: '',
						type: 'success'
					});
					this.$store.commit('uploadShop', this.bookDetails);
					this.$store.commit('updateNowId', true);
				} else {
					this.$message({
						message: '请您先登录!',
						type: 'warning'
					});
				}

			},
			soucang() {
				if (!this.$store.state.isLogin) {
					this.$store.commit('shoucangList', this.bookDetails);
					this.$message({
						message: '恭喜你，收藏成功!',
						type: 'success'
					});
				} else {
					this.$message({
						message: '请您先登录!',
						type: 'warning'
					});
				}

			}
		}
	}
</script>

<style scoped="scoped">
	.bookDetail {
		width: 100vw;
		overflow: hidden;
		padding-bottom: 10px;
	}

	.detailContent {
		width: 100%;
		border-top: 1px solid black;
		padding: 20px 0px;
		display: flex;
		justify-content: center;
	}

	.detailDiv {
		width: 1200px;
		height: 600px;
		box-shadow: 0 0 4px #ccc;
		padding: 20px;
	}

	.detailDiv header {
		padding: 20px 0px;
	}

	.detailDiv header .homeLink {
		font-weight: bold;
		margin-right: 20px;
		cursor: pointer;
	}

	.detailDiv header .homeLink:hover {
		color: hotpink;
	}

	.showBody {
		width: 100%;
		height: 520px;
		display: flex;
	}

	.showBody .showLeft {
		width: 39%;
		height: 100%;
		margin-right: 2%;
	}

	.showBody .showLeft img {
		width: 100%;
		height: 100%;
	}

	.showBody .showRight {
		width: 59%;
		height: 100%;
	}

	.leftTop,
	.rightTop {
		height: 410px;
	}

	.leftBottom,
	.rightBottom {
		height: 60px;
		margin-top: 20px;
	}

	.showBody .showRight p {
		margin-top: 22px;
	}

	.showBody .showRight p:first-child {
		border-top: 1px dashed #ccc;
		padding-top: 10px;
		margin-top: 0px;
	}

	.showBody .showRight .p1 {
		font-size: 24px;
		font-weight: bold;
	}

	.showBody .showRight .p3 span:nth-child(2) {
		font-weight: bold;
		color: firebrick;
		font-size: 18px;
	}

	.showBody .showRight .p3 span:nth-child(3) {
		text-decoration: line-through;
		color: #ccc;
	}

	.showBody .showRight p:last-child {
		border-top: 1px dashed #ccc;
		padding-top: 10px;
	}

	.showBody .showRight span {
		font-size: 12px;
		margin-right: 10px;
	}

	.el-button {
		margin: 0 10px 0px 0px;
	}

	.spanred {
		margin-left: 10px;
		color: indianred;
	}
</style>
