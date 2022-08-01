<template>
	<!-- 书籍购物车 -->
	<div class="shoppingCont">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="shoppingCar">
			<div class="shopContent">
				<header><span>全部商品</span></header>
				<!-- 加入购物车列表 -->
				<div class="shopTab" v-if="shoppingList.length>0">
					<table>
						<thead>
							<tr>
								<td>
									<el-checkbox v-model="allCheck" @change="handleAllCheck">全选</el-checkbox>
								</td>
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
							<tr v-for="(item, index) in shoppingList" :key="index">
								<td>
									<el-checkbox v-model="item.checkT" @change="handleCheck(item,index)">
									</el-checkbox>
								</td>
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
									<el-button size="mini" @click="descBtn(item,index)" class="el-icon-minus">
									</el-button>
									{{ item.num }}
									<el-button size="mini" @click="addBtn(item)" class="el-icon-plus"></el-button>
								</td>
								<td>
									<span>￥{{ parseInt(item.price * item.num) }}</span>
								</td>
								<td>
									<el-button type="danger" icon="el-icon-delete" @click="deletes(index)"></el-button>
									<!-- <el-button type="primary" icon="el-icon-edit" @click="edits(index)"></el-button> -->
								</td>
							</tr>
						</tbody>
					</table>
					<div class="caozuo">
						<div class="caoLeft">
							<el-button type="danger" size="mini" @click="deleteAll">删除全部</el-button>
						</div>

						<div class="caoRight">
							<span>已选择商品{{count}}件</span>
							<span>合计（不含运费）￥{{ total }}</span>
							<el-button type="success" round @click="openFullScreen2" :disabled="count==0">结算</el-button>
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
				addressListLen: this.$store.getters.getAddressList,
				shoppingList: [], //加入购物车商品列表
				total: 0, //总价格
				allCheck: false, //是否全选
				count: 0, //选择了多少件
				getAddresslistArr: []
			};
		},
		methods: {
			computedTotal() { //计算总价格
				let tal = 0;
				let count = 0
				this.shoppingList.forEach(item => {
					if (item.checkT) {
						tal += item.price * item.num
						count += 1;
					}
				})
				this.total = tal
				this.count = count;
			},
			handleCheck(item, index) { //单选
				if (item.checkT) {
					this.computedTotal();
					if (this.shoppingList.every(item => item.checkT)) {
						this.allCheck = true
					} else {
						this.allCheck = false
					}
				} else {
					this.computedTotal();
					this.allCheck = false
				}
			},
			handleAllCheck() { //全选
				this.allCheck = !this.allCheck;
				this.shoppingList.forEach(item => {
					if (this.allCheck) {
						item.checkT = true
					} else {
						item.checkT = false
					}
				})
				this.computedTotal();
			},
			deletes(index) { //加入购物车列表删除操作
				//删除单条数据
				this.$confirm('您确定要删除当前商品吗', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.shoppingList.splice(index, 1);
					this.$store.commit('deleteShoppingList', index);
				})
			},
			deleteAll() {
				//删除全部
				this.$confirm('确定要删除全部商品吗, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',
						center: true
					})
					.then(() => {
						this.shoppingList.splice(0);
						this.$store.commit('deleteShoppingList', 'all');
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
			},
			descBtn(item, index) {
				//商品个数减
				item.num--;
				if (item.num == 0) {
					this.shoppingList.splice(index, 1);
					this.$store.commit('deleteShoppingList', index);
				}
				this.computedTotal();
			},
			addBtn(item) {
				//商品个数加
				item.num++;
				this.computedTotal();
			},
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
					this.$store.commit('setisokBuyList', this.shoppingList);
					const loading = this.$loading({
						lock: true,
						text: '正在支付...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						this.shoppingList.forEach((item, index) => {
							if (item.checkT) {
								this.shoppingList.splice(index, 1);
								this.$store.commit('deleteShoppingList', index);
							}
						})
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
		created() {
			let arrList = JSON.parse(window.localStorage.getItem('shoppingList')); //获取购物列表
			this.getAddresslistArr = this.$store.getters.getAddresslistArr;
			let obj = {};
			let peon = arrList.reduce((cur, next) => {
				//去重处理
				obj[next.id] ? '' : (obj[next.id] = true && cur.push(next));
				return cur;
			}, []); //设置cur默认类型为数组，并且初始值为空的数组
			this.shoppingList = peon;
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
			},
		},
		watch: {
			immediate: true,
			deep: true,
			allCheck(newval, oldval) {
				if (newval) {
					this.computedTotal();
				}
			}
		},
	};
</script>

<style scoped="scoped">
	.shoppingCont {
		width: 100vw;
		overflow: auto;
	}

	.shoppingCar {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.shopContent {
		width: 1200px;
		padding: 30px;
		background-color: #fff;
	}

	.shopContent header {
		width: 100%;
		border-bottom: 1px solid #ccc;
		margin-bottom: 30px;
	}

	.shopContent header span {
		width: 140px;
		height: 40px;
		padding: 10px 0px;
		line-height: 40px;
		border-bottom: 1px solid purple;
		font-weight: bold;
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
