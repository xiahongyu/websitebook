<template>
	<div>
		<!-- 头部导航栏 -->
		<header>
			<div class="logo" @click="handleHome"><img src="../../assets/img/bookLogo.jpeg" alt="图书logo"></div>
			<ol>
				<li v-if="haveUser">欢迎你，请先<router-link tag="span" to="/register">注册</router-link> /
					<router-link tag="span" to="/login">登录</router-link>
				</li>
				<li v-else>
					<el-dropdown>
						<span class="el-dropdown-link">欢迎你,{{username}}</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/securityCenter">修改密码</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</li>
				<li>
					<el-dropdown>
						<span class="el-dropdown-link">个人中心</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/personInfo">个人信息</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/securityCenter">安全中心</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/register">登录注册</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</li>
				<li>
					<router-link to=""></router-link>
					<el-dropdown>
						<span class="el-dropdown-link">订单中心</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/myOrder">我的订单</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/myCollect">我的收藏</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/myAddress">收货地址</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</li>
				<li>
					<el-dropdown>
						<span class="el-dropdown-link">平台规则</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/logisticsInfo">发票制度</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/refundMessage">配送方式</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/advMessage">售后服务</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</li>
				<li>
					<el-dropdown>
						<span class="el-dropdown-link">帮助中心</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/shoppingGuide">购物指南</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/methodPayment">支付方式</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link tag="p" to="/personHome/rulesPlatform">书城会员</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</li>
			</ol>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				haveUser: true,
				isShow: false,
			}
		},
		created() {
			this.getstateData();
		},
		methods: {
			handleHome() {
				this.$router.replace('/home');
			},
			getstateData() {
				this.username = window.localStorage.getItem('username');
				if (this.username) {
					this.haveUser = false
					this.$store.commit('isLogin');
					this.$store.commit('loginUpdate', this.username);
				}
			},
			logout() { //退出登录
				this.$confirm('您确定要退出登录吗', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.$store.commit('logout');
					this.$message({
						message: '当前用户退出成功',
						type: 'success'
					});
					location.reload();
					if (this.$route.path != '/home') {
						this.$router.replace('/home');
					}
				}).catch(() => {});
			}
		},
	}
</script>

<style scoped="scoped">
	header {
		height: 55px;
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.logo {
		width: 200px;
		height: 55px;
		margin-right: 100px;
		cursor: pointer;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	ol {
		width: 60%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0;
	}

	ol li {
		line-height: 55px;
		color: white;
	}

	.el-dropdown-link {
		color: white;
	}

	a {
		cursor: pointer;
		color: white;
	}

	li,
	span {
		cursor: pointer;
	}

	ol p {
		cursor: pointer;
		padding: 6px 16px;
		display: block;
	}
</style>
