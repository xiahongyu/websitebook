<template>
	<!-- 个人中心 -->
	<div class="personHome">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="personContent">
			<div class="personLeft">
				<ul>
					<p>个人中心</p>
					<li>
						<router-link to="/personHome/personInfo">个人信息</router-link>
					</li>
					<li>
						<router-link to="/personHome/securityCenter">安全中心</router-link>
					</li>
				</ul>

				<ul>
					<p>订单中心</p>
					<li>
						<router-link to="/personHome/myOrder">我的订单</router-link>
					</li>
					<li>
						<router-link to="/personHome/myCollect">我的收藏</router-link>
					</li>
					<li>
						<router-link to="/personHome/myAddress">收获地址</router-link>
					</li>
				</ul>

				<ul>
					<p>帮助中心</p>
					<li>
						<router-link to="/personHome/shoppingGuide">购物指南</router-link>
					</li>
					<li>
						<router-link to="/personHome/methodPayment">支付方式</router-link>
					</li>
					<li>
						<router-link to="/personHome/rulesPlatform">书城会员</router-link>
					</li>
				</ul>

				<ul>
					<p>平台规则</p>
					<li>
						<router-link to="/personHome/logisticsInfo">发票制度</router-link>
					</li>
					<li>
						<router-link to="/personHome/refundMessage">配送方式</router-link>
					</li>
					<li>
						<router-link to="/personHome/advMessage">售后服务</router-link>
					</li>
				</ul>
			</div>
			<div class="personRight">
				<router-view></router-view>
			</div>
		</div>
		<footers></footers>
		<backTop></backTop>
	</div>
</template>

<script>
	import headers from '../header/header.vue'
	import contentSearch from '../contentSearch/contentSearch.vue'
	import contentNav from '../contentNav/contentNav.vue'
	import footers from '../footer/footer.vue'
	import backTop from '../backTop/backTop.vue'
	export default {
		components: {
			headers,
			contentSearch,
			contentNav,
			footers,
			backTop
		}
	}
</script>

<style scoped="scoped">
	.personHome {
		width: 100vw;
		overflow: auto;
	}

	.personContent {
		width: 100%;
		height: 700px;
		padding: 40px 0px;
		border-top: 1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.personLeft {
		width: 200px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 3px #ccc;
	}

	.personLeft ul {
		margin: 0;
		width: 100%;
		text-align: center;
		list-style: none;
	}

	.personLeft ul li {
		margin-top: 12px;
		font-size: 13px;
	}

	.personLeft ul p {
		font-size: 16px;
		font-weight: bold;
	}

	.personLeft ul a {
		color: #555;
		text-decoration: none;
	}

	.personLeft ul a:hover {
		color: skyblue;
	}

	.router-link-active {
		color: deepskyblue !important;
	}

	.personRight {
		width: 1000px;
		height: 100%;
		border: 1px solid #ccc;
	}
</style>
