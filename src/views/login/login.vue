<template>
	<!-- 登录页面 -->
	<div class="login" @keyup.enter="loginEnter">
		<div class="content">
			<header>
				<span @click="$router.back(-1)"><i class="el-icon-arrow-left" style="cursor: pointer;"></i></span>
				<span>登录页面</span>
				<span>
					<router-link to="/home">首页</router-link>
				</span>
			</header>
			<div style="display: flex;justify-content: center;">
				<el-avatar icon="el-icon-user-solid" :size="90"
					style="font-size: 65px;margin-top: 10px;background: rgba(255,255,255,0.1);"></el-avatar>
			</div>

			<div class="demo-input-suffix">
				<el-input placeholder="请输入用户名" v-model="input1" width="100%" autofocus>
				</el-input>
				<el-input placeholder="请输入密码" v-model="input2" width="100%" type="password">
				</el-input>
				<p class="pBtn">
					<span @click="freeReg">免费注册</span>
					<span @click="forward">忘记密码</span>
				</p>
				<el-button type="danger" style="width: 100%;" @click="logins">登录</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		request
	} from '../../network/index.js'
	export default {
		name: 'login',
		data() {
			return {
				input1: 'root',
				input2: 'root',
				timer: null,
				userList: [],
				result: null,
				thisUserId: null
			}
		},
		created() {
			request({
				url: 'login',
				method: 'get'
			}).then(res => {
				this.userList = res.data;
			});
		},
		methods: {
			loginEnter() {
				this.logins();
			},
			logins() {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => { //防抖操作
					var isHave = false;
					if (this.input1.trim() == '' || this.input2.trim() == '') {
						this.$message.error('用户名和密码不能为空');
						return;
					} else {
						if (this.input1 == 'root' && this.input2 == 'root') {
							let randToken = Math.random() + "user"; //随机产生token
							let tokens = randToken.slice(-10);
							window.localStorage.setItem('loginInfo', tokens);
							this.$store.commit('loginUpdate', this.input1); //登录之后修改状态
							this.$store.commit('isLogin'); //是否登录
							this.$store.commit('userId', this.thisUserId); //传当前用户id
							const loading = this.$loading({
								lock: true,
								text: '光速加载中...',
								spinner: 'el-icon-loading',
								background: 'rgba(0, 0, 0, 0.5)'
							});
							setTimeout(() => {
								loading.close();
								this.$message({
									message: '恭喜你，登录成功!',
									type: 'success'
								});
								this.$router.push('/home');
							}, 1000);
						} else {
							this.$message.error('用户名或密码错误,请重新输入!');
						}
					}
				}, 800)
			},
			freeReg() {
				this.$router.push("/register");
			},
			forward() {

			}
		},
	}
</script>

<style scoped="scoped">
	.login {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: url(../../assets/img/bodyBackround/body1.jpeg) no-repeat;
		background-blend-mode: multiply;
		background-color: paleturquoise;
		background-size: cover;
	}

	.content {
		width: 500px;
		height: 500px;
		color: white;
		box-shadow: 0 0 3px #ccc;
		background-color: rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	header {
		display: flex;
		width: 100%;
		justify-content: space-around;
		margin-bottom: 20px;
	}

	header a {
		text-decoration: none;
		color: deepskyblue;
	}

	.demo-input-suffix {
		padding: 0 12px;
	}

	.el-input {
		margin-top: 20px;
	}

	.pBtn {
		display: flex;
		justify-content: space-between;
		padding: 20px 0px;
	}

	.pBtn span {
		cursor: pointer;
	}

	.pBtn span:first-child:hover {
		color: seagreen;
	}

	.pBtn span:last-child:hover {
		color: red;
	}
</style>
