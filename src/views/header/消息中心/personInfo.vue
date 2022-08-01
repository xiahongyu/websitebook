<template>
	<div class="personInfo">
		<div class="userContent" v-if=" getUserId ">
			<div class="userHave">
				<el-descriptions class="margin-top" title="用户信息" :column="3" :size="size" border>
				    <el-descriptions-item>
				      <template slot="label">
				        <i class="el-icon-user"></i>
				        用户名
				      </template>
				      {{users.username}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        <i class="el-icon-mobile-phone"></i>
				        手机号
				      </template>
				      {{users.cellphone}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        <i class="el-icon-location-outline"></i>
				        邮箱地址
				      </template>
						{{users.email}}
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        <i class="el-icon-tickets"></i>
				        备注
				      </template>
				      <el-tag size="small">当前用户</el-tag>
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template slot="label">
				        <i class="el-icon-finished"></i>
				        性别
				      </template>
					  {{users.sex}}
				    </el-descriptions-item>
					<el-descriptions-item>
					  <template slot="label">
					    <i class="el-icon-price-tag"></i>
					    详细信息
					  </template>
						无
					</el-descriptions-item>
				  </el-descriptions>
			</div>
		</div>
	
		<div class="userContent" v-else>
			<div class="userNone">
				<el-empty description="当前还没有用户,去注册一个">
				  <router-link to="/register"><el-button type="primary">go!</el-button></router-link>
				</el-empty>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../../../network/index.js'
	export default{
		data(){
			return{
				users:[],
				loginThisId:null,
				size: '',
			}
		},
		computed:{
			getUserId(){
				if(this.loginThisId == null){
					return false
				}else{
					return true
				}
			}
		},
		created() {
			// this.userId = this.$store.state.userId;
			this.loginThisId = window.localStorage.getItem('loginThisId');
			if(this.loginThisId == null){
				
			}else{
				request({
					url:'/login/'+this.loginThisId,
				}).then(res=>{
					this.users= res.data
				})
			}
			
		}
	}
</script>

<style scoped="scoped">
	.personInfo{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.userContent{
		width: 100%;
		height: 600px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.userHave{
		width: 90%;
		padding: 30px;
		box-shadow: 0 0 4px #ccc;
	}
</style>
