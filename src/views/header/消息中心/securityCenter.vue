<template>
	<div id="resetForm">
		<div class="titles"><el-alert
    title="请注意个人隐私!"
    type="warning"
    :closable="false">
  </el-alert></div>
		<div class="demo-ruleForm">
			<h3>修改用户信息</h3>
			<el-form label-width="70px">
				<el-form-item label="用户名">
				  <el-input type="text" v-model="updateUser.username" autocomplete="off"></el-input>
				</el-form-item>
			  <el-form-item label="密码">
			    <el-input type="password" v-model="updateUser.password" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码">
			    <el-input type="password" v-model="password2" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号码">
			    <el-input type="text" v-model="updateUser.cellphone" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱地址">
			    <el-input type="text" v-model="updateUser.email" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm">修改</el-button>
			    <el-button @click="resetForm">重置</el-button>
			  </el-form-item>
			</el-form>
			<span class="el-icon-arrow-left backHome" @click="backHome">返回首页</span>
		</div>
	</div>
</template>

<script>
	import {request} from '../../../network/index.js'
	export default{
		data(){
			return{
				password2:'',
				timer:null,
				userList:[],
				userId:this.$store.state.userId,//当前登录的用户id
				updateUser:{
					"username": "",
					"password": "",
					"cellphone": "",
					"email": "",
					"sex": "",
					"id": this.userId
				}
			}
		},
		methods:{
			submitForm(){
				clearTimeout(this.timer);
				this.timer=setTimeout(()=>{
					var username=this.updateUser.username;
					var pwd1= this.updateUser.password;
					var pwd2= this.password2;
					var cellphone = this.updateUser.cellphone;
					var email = this.updateUser.email;
					if(username.trim()=='' || pwd1.trim()=='' || pwd2.trim()==''|| cellphone.trim()==''|| email.trim()==''){
						this.$message.error('所有内容不能为空');
						return;
					}else{
						if(pwd1 != pwd2){
							this.$message.error('两次输入的密码不相同，请重新输入');
							return;
						}else{
							request({
								url:'login/'+this.userId,
								method:'put',
								data:this.updateUser
							}).then(res=>{
									if(res.status == 200 || res.status==201){
										this.$message({
										    message: '用户名和密码修改成功，请重新登录',
											type: 'success'
										});
										setTimeout(()=>{
											this.$router.push('/login');
										},2000)
									}else{
										 this.$message({
										  showClose: true,
										  message: '修改失败,网络出现异常',
										  type: 'warning'
										});
									}
								})
						}
					}
				},1500)
			},
			resetForm(){
				this.password2='';
				updateUser={
					"username": "",
					"password": "",
					"cellphone": "",
					"email": "",
					"sex": ""
				}
			},
			backHome(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style scoped="scoped">
	#resetForm{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.titles{
		width: 50%;
		margin: 20px 0px;
	}
	.demo-ruleForm{
		width: 450px;
		height: 500px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 0 3px #ccc;
		background-color: #fff;
		position: relative;
	}
	.demo-ruleForm h3{
		text-align: center;
		margin-bottom: 40px;
	}
	.backHome{
		font-size: 14px;
		color: #ccc;
		margin-left: 100px;
		position: absolute;
		top: 64px;
		left: -58px;
		cursor: pointer;
	}
	.backHome:hover{
		color: deepskyblue;
	}
</style>
