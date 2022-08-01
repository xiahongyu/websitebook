<template>
	<div class="myOrder">
		<div class="shoppingCont">
			<ul class="ulList">
				<li>
					<router-link to="/personHome/myOrder/allOrder">全部订单</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/payment">待付款</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/shipped">待发货</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/sendGoods">已发货</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/completed">已完成</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/closed">已关闭</router-link>
				</li>
				<li>
					<router-link to="/personHome/myOrder/refund">退款/售后</router-link>
				</li>
			</ul>
			<div class="shows">
				<table>
					<thead>
						<tr>
							<th>名称</th>
							<th>图片</th>
							<th>数量</th>
							<th>金额</th>
							<th>状态</th>
						</tr>
					</thead>
					<tbody v-if="shoppingArr.length>0">
						<tr v-for="(item,index) in shoppingArr" :key="index">
							<el-tooltip class="item" effect="dark" :content="item.title " placement="top">
								<td>
									{{item.title | filtext }}
								</td>
							</el-tooltip>
							<td><img class="imgs" :src="`${require(`../../../../assets/img/bookItem/${item.imgurl}`)}`"
									alt=""></td>
							<td>{{item.num}}</td>
							<td>{{item.price}}</td>
							<td>
								<el-tag>已付款</el-tag>
							</td>
						</tr>
					</tbody>
					<el-empty v-else :image-size="200"></el-empty>
				</table>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				shoppingArr: [],
			}
		},
		created() {
			let shoppingArr1 = this.$store.getters.getisokBuyList; //立即购买里列表
			let shoppingArr2 = this.$store.getters.getShoppingInfo; //购物车列表
			this.shoppingArr = shoppingArr1.concat(shoppingArr2);
		},
		methods: {},
		filters: {
			filtext(val) {
				return val.slice(0, 10) + '...'
			}
		}
	}
</script>

<style scoped="scoped">
	.router-link-active {
		color: black;
		font-weight: bold;
		border-bottom: 2px solid purple;
	}

	.myOrder {
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.shoppingCont {
		width: 90%;
		height: 90%;
		background-color: #fff;
	}

	.ulList {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
		border-bottom: 1px solid #ccc;
	}

	.ulList>li {
		padding: 20px 0px;
	}

	.ulList>li+li {
		margin-left: 16px;
	}

	.ulList>li a {
		padding: 20px 0px;
		color: #555;
		text-decoration: none;
	}

	.shows {
		width: 100%;
		padding: 24px 0px;
	}

	.shows table {
		width: 100%;
		border-collapse: collapse;
	}

	.shows table thead {
		height: 50px;
		background-color: #eee;
		border: 1px solid #ccc;
	}

	.shows table td {
		text-align: center;
		padding: 12px 16px;
	}

	.imgs {
		width: 80px;
		height: 80px;
	}
</style>
