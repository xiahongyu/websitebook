<template>
	<!-- 注册页面 -->
	<div class="content" @keyup.enter="regEnter">
		<div class="formCont">
			<h3>用户注册</h3>
			<el-form ref="form" label-width="70px">
				<el-form-item label="用户名"><el-input v-model="form.username" placeholder="用户名长度不能小于两个字符"></el-input></el-form-item>
				<el-form-item label="密码"><el-input v-model="form.password" type="password" placeholder="以字母开头，长度在6~18之间，只能包含字母、数字和下划线"></el-input></el-form-item>
				<el-form-item label="手机号"><el-input v-model="form.cellphone" placeholder="号码长度不能小于11位"></el-input></el-form-item>
				<el-form-item label="邮箱地址"><el-input v-model="form.email" placeholder="字符中必须含有@字符"></el-input></el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="form.sex">
						<el-radio label="男"></el-radio>
						<el-radio label="女"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="">
					<el-checkbox-group v-model="checkXie"><el-checkbox label="我已阅读相关协议" name="type"></el-checkbox></el-checkbox-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="regster" style="margin-right: 40px;">注册</el-button>
					<el-button @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
			<router-link to="/login" class="aLogin">如已有账户请点击这里进行登录</router-link>
		</div>
	</div>
</template>

<script>
import { request } from '../../network/index.js';
export default {
	data() {
		return {
			timer: null, //用于防抖
			form: {
				username: '',
				password: '',
				cellphone: '',
				email: '',
				sex: '',
				id: Number
			},
			checkXie: [], //同意协议
			userList: [], //获取用户信息，用于判断数据库有无当前注册用户
			isHave: false
		};
	},
	methods: {
		regEnter(){
			this.regster();
		},
		regster() {
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				//防抖操作
				var username = this.form.username;
				var password = this.form.password;
				var cellphone = this.form.cellphone;
				var email = this.form.email;
				var sex = this.form.sex;
				if (username.trim() != '' && password.trim() != '' && cellphone.trim() != '' && email.trim() != '' && sex.trim() != '') {
					if (this.checkXie.length > 0) {
						var pwdTest = /^[a-z0-9_-]{6,18}$/;//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
						var phoneTest = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
						var emailTest =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
						if(username.length>2 && pwdTest.test(password) && phoneTest.test(cellphone) && emailTest.test(email)){
							let that = this;
							that.isHave = that.userList.some(item => {
								if (item.username === username && item.password === password) {
									return true;
								} else {
									return false;
								}
							});

							if (!this.isHave) {
								request({
									url: 'login',
									method: 'post',
									data: this.form
								}).then(res => {
									if (res.status == 200 || res.status == 201) {
										this.$message({
											message: '注册成功!即将为您跳转登录页面...',
											type: 'success'
										});
										setTimeout(() => {
											this.$router.push('/login');
										}, 2000);
									} else {
										this.$message.error('注册失败!');
									}
								});
							} else {
								this.$message.error('已有该用户,请勿重复注册!');
							}
						}else{
							this.$message({
								message:'您输入的字符不符合规范!',
								type:'warning'
							})
						}
					} else {
						this.$message.error('您必须同意用户协议!');
					}
				} else {
					this.$message.error('所有内容不能为空!');
				}
			}, 800);
		},
		reset() {
			this.form = {
				name: '',
				password: '',
				cellphone: '',
				email: '',
				type: [],
				sex: ''
			};
		}
	},
	created() {
		request({
			url: 'login',
			method: 'get'
		}).then(res => {
			this.userList = res.data;
		});
	}
};
</script>

<style scoped="scoped">
.content {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(../../assets/img/bodyBackround/body2.jpeg) no-repeat;
	background-size: cover;
}
.formCont {
	width: 500px;
	height: 600px;
	padding: 30px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0 0 40px #fff;
	background: rgba(255,255,255,0.1);
}
.formCont h3 {
	text-align: center;
	margin-bottom: 60px;
}
.aLogin {
	width: 172px;
	font-size: 12px;
	color: #eee;
	margin: 20px 76px;
	text-decoration: underline;
}
.aLogin:hover {
	color: skyblue;
	font-weight: bold;
}
</style>
