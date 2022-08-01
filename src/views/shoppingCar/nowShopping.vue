<template>
	<!-- 书籍购买页 -->
	<div class="shoppingCont">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="shoppingCar">
			<!-- 立即购买列表 -->
			<div class="shopTab" v-if="nowShopList.length>0">
				<table>
					<thead>
						<tr>
							<td><span>图片</span></td>
							<td><span>商品</span></td>
							<td><span>作者</span></td>
							<td><span>单价</span></td>
							<td><span>数量</span></td>
							<td><span>小计</span></td>
							<td><span>操作</span></td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in nowShopList" :key="index">
							<td><img :src="`${require(`../../assets/img/bookItem/${item.imgurl}`)}`" alt="" /></td>
							<td>
								<h4>{{ item.title | slices }}</h4>
							</td>
							<td>
								<span>{{ item.author | author }}</span>
							</td>
							<td>
								<span class="newPrice">￥{{ item.price }}</span>
								<span class="oldPrice">￥{{ item.oldprice }}</span>
							</td>
							<td>
								<el-button size="mini" @click="descBtn(item)" class="el-icon-minus"></el-button>
								{{ item.num }}
								<el-button size="mini" @click="addBtn(item)" class="el-icon-plus"></el-button>
							</td>
							<td>
								<span>￥{{ parseInt(item.price * item.num) }}</span>
							</td>
							<td>
								<el-button type="danger" icon="el-icon-delete" @click="deleNowShop"></el-button>
								<!-- <el-button type="primary" icon="el-icon-edit" @click="edits(index)"></el-button> -->
							</td>
						</tr>
					</tbody>
				</table>
				<div class="caozuo">
					<div class="caoRight">
						<span>合计（不含运费）￥{{nowPriceTotal}}</span>
						<el-button type="success" round @click="openFullScreen2" :disabled="isOkBuy">结算</el-button>
					</div>
				</div>
			</div>
			<!-- 没有列表 -->
			<div v-else style="text-align: center;">
				<el-empty description="当前没有商品!" :image-size="200"></el-empty>
				<router-link to="/home">
					<el-button type="primary">去首页添加商品</el-button>
				</router-link>
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import headers from '../header/header.vue' //头部header
	import contentSearch from '../contentSearch/contentSearch.vue' //头部搜索
	import contentNav from '../contentNav/contentNav.vue' //顶部导航和右侧导航
	import footers from '../footer/footer.vue'
	export default {
		components: {
			headers,
			contentSearch,
			contentNav,
			footers
		},
		data() {
			return {
				nowShopList: [], //立即购买列表
				getAddresslistArr: [],
				total: 0
			}
		},
		created() {
			this.nowShopList = this.$store.getters.getNowShop; //获取立即购买列表
			this.total = this.nowShopList.price * this.nowShopList.num;
			this.getAddresslistArr = this.$store.getters.getAddresslistArr;
		},
		methods: {
			descBtn(item) {
				//商品个数减
				item.num--;
				if (item.num <= 1) {
					item.num = 1;
				}
			},
			addBtn(item) {
				//商品个数加
				item.num++;
			},
			deleNowShop() { //立即购买列表删除操作
				this.$confirm('您确定要删除当前商品吗', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.nowShopList.splice(0);
				})
			},
			// edits(index) {
			// 	//编辑
			// 	console.log(index);
			// },
			openFullScreen2() {
				if (this.getAddresslistArr == 0) {
					this.$message({
						message: '请添加收货地址!',
						type: 'warning'
					});
					setTimeout(() => {
						this.$router.push('/personHome/myAddress');
					}, 2000)
				} else {
					this.$store.commit('setisokBuyList', this.nowShopList);
					this.$store.commit('clearbuyNow');
					const loading = this.$loading({
						lock: true,
						text: '正在支付...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						this.nowShopList.splice(0);
						loading.close();
						this.$message({
							message: '成功支付' + this.total + '元',
							type: 'success'
						});
						this.$router.push('/personHome/myOrder/allOrder');
					}, 1000);
				}
			}
		},
		computed: {
			nowPriceTotal() { //立即购买列表总共多少钱
				let sumPrice = 0;
				this.nowShopList.forEach(e => {
					sumPrice += e.price * e.num;
				})
				return sumPrice;
			},
			isOkBuy() { //根据有没有数据列表来决定结算按钮是否可以点击
				if (this.nowShopList.length > 0) {
					return false
				} else {
					return true
				}
			}
		},
		filters: {
			slices(value) {
				return value.slice(0, 10) + '...'; //标题缩短
			},
			author(value) {
				if (value == '') {
					//过滤有无作者
					return '无';
				} else {
					return value;
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.shoppingCont {
		width: 100vw;
		overflow: auto;
	}

	.shoppingCar {
		width: 1200px;
		margin: 55px auto;
	}

	.shopTab {
		width: 100%;
		margin-top: 40px;
	}

	.shopTab table {
		width: 100%;
		border-collapse: collapse;
	}

	.shopTab table tr {
		margin-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}

	.shopTab table td {
		padding: 12px 20px;
		text-align: center;
	}

	.shopTab table td img {
		width: 70px;
		height: 100%;
	}

	.shopTab table thead {
		height: 40px;
		margin: 10px 0px;
	}

	.shopTab table h4 {
		margin: 0;
	}

	.newPrice {
		font-size: 18px;
		color: red;
	}

	.oldPrice {
		font-size: 12px;
		color: #ccc;
		text-decoration: line-through;
	}

	.caozuo {
		height: 60px;
		display: flex;
		padding: 10px;
		justify-content: space-between;
		align-items: center;
		background-color: #f6f6f6;
		border: 1px solid #ccc;
		margin-top: 30px;
	}

	.caozuo span {
		margin-right: 20px;
	}

	.caoRight span:hover {
		color: orangered;
		cursor: pointer;
	}
</style>
