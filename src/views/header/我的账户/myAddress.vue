<template>
	<div class="myaddress">
		<div class="addHead">
			<div class="addManager">
				<h3>收货地址管理</h3>
				<span>
					<router-link to="/nowShopping">立即购买</router-link>
				</span>
				<span>
					<router-link to="/shoppingCar">前往购物车</router-link>
				</span>
				<el-button type="text" @click="dialogFormVisible = true">添加收货地址</el-button>
			</div>

			<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="收货人" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" :label-width="formLabelWidth">
						<el-input v-model="form.cellphone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="所在地区" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择区域">
							<el-option label="北京" value="北京"></el-option>
							<el-option label="湖南省" value="湖南省"></el-option>
							<el-option label="江苏省" value="江苏省"></el-option>
							<el-option label="湖北省" value="湖北省"></el-option>
							<el-option label="云南省" value="云南省"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="详细地址" :label-width="formLabelWidth">
						<el-input v-model="form.address" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="默认地址" :label-width="formLabelWidth">
						<el-switch v-model="value1"></el-switch>
					</el-form-item>
				</el-form>

				<div slot="footer" class="dialog-footer">
					<el-button @click="quxiao">取 消</el-button>
					<el-button type="primary" @click="determine">确 定</el-button>
				</div>
			</el-dialog>

			<div class="addressTab" v-if="this.addressArr.length>0">
				<table>
					<thead>
						<tr>
							<th>姓名</th>
							<th>手机号</th>
							<th>所在地区</th>
							<th>详细地址</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in addressArr" :key="index">
							<td>{{item.name}}</td>
							<td>{{item.cellphone}}</td>
							<td>{{item.region}}</td>
							<td>{{item.address}}</td>
							<td>
								<el-button type="danger" icon="el-icon-delete" circle @click="deletes(index)">
								</el-button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="addressTab" v-else>
				<el-empty :image-size="200" description="暂无收获地址"></el-empty>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: true,
				dialogFormVisible: false,
				form: {
					name: '',
					cellphone: '',
					region: '',
					address: ''
				},
				formLabelWidth: '120px',
				addressArr: []
			}
		},
		methods: {
			quxiao() {
				this.dialogFormVisible = false;
				this.form = {
					name: '',
					cellphone: '',
					region: '',
					address: ''
				}
			},
			deletes(index) { //删除单个
				this.$confirm('您确定要删除吗', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => {
					this.addressArr.splice(index, 1);
					this.$store.commit('deleteAddress', index);
				}).catch(() => {
					this.$message({
						message: '已取消删除',
						type: 'success'
					});
				});

			},
			determine() { //确定按钮
				let cel = /^1[13456789]\d{9}$/;
				if (this.form.cellphone == '') {
					this.$message({
						message: '收货人不能为空',
						type: 'warning'
					});
					return false
				}
				if (!cel.test(this.form.cellphone)) {
					this.$message({
						message: '手机号码格式错误',
						type: 'warning'
					});
					return false;
				}
				if (this.form.region == '') {
					this.$message({
						message: '所在地区不能为空',
						type: 'warning'
					});
					return false
				}
				if (this.form.address == '') {
					this.$message({
						message: '详细地址不能为空',
						type: 'warning'
					});
					return false
				}
				this.dialogFormVisible = false;
				this.addressArr.unshift(this.form);
				this.$store.commit('addressTab', this.addressArr);
			}
		},
		created() {
			this.addressArr = this.$store.getters.getAddresslistArr;
		}
	}
</script>

<style scoped="scoped">
	.myaddress {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.addHead {
		width: 90%;
		height: 90%;
		background-color: #fff;
	}

	.addManager {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.addManager a {
		text-decoration: none;
		color: #409EFF;
		font-size: 14px;
	}

	.addressTab {
		width: 100%;
		padding: 20px 0px;
		margin-top: 40px;
	}

	.addressTab table {
		width: 100%;
		border-collapse: collapse;
	}

	.addressTab table thead {
		height: 50px;
		background-color: #eee;
		border: 1px solid #ccc;
	}

	.addressTab table td {
		text-align: center;
		padding: 12px 16px;
	}
</style>
