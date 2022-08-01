<template>
	<div class="myCollect">
		<div class="collectCont">
			<div class="shoppingCollect">
				<table>
					<thead>
						<tr>
							<th>商品ID</th>
							<th>商品名称</th>
							<th>价格</th>
							<th>作者</th>
							<th>时间</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody v-if="this.shoppingArr.length>0">
						<tr v-for="(item,index) in shoppingArr" :key="index">
							<td>{{item.id}}</td>
							<td>{{item.title | sliceTxt }}</td>
							<td>￥{{item.price}}</td>
							<td>{{item.author}}</td>
							<td>{{item.time}}</td>
							<td><el-button type="danger" icon="el-icon-delete" circle @click="deletes(index)"></el-button></td>
						</tr>
					</tbody>
					<tbody v-else>
						<el-empty :image-size="200"></el-empty>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shoppingArr:[]
			}
		},
		methods:{
			deletes(index){
				this.shoppingArr.splice(index,1);
			}
		},
		created() {
			// this.shoppingArr=this.$store.state.shouList;
			let lists=this.$store.state.shouList;
			let obj = {};
			this.shoppingArr = lists.reduce((cur,next)=>{
				obj[next.id] ? '' :(obj[next.id] = true && cur.push(next));
				return cur;
			},[]);
			
		},
		filters:{
			sliceTxt(value){
				return value.slice(0,12)+"...";
			}
		}
	}
</script>

<style scoped="scoped">
	.myCollect{
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.collectCont{
		width: 90%;
		height: 90%;
		background-color: #fff;
	}
	.shoppingCollect{
		width: 100%;
		padding: 24px 0px;
	}
	.shoppingCollect table{
		width: 100%;
		border-collapse: collapse;
	}
	.shoppingCollect table thead{
		height: 50px;
		background-color: #eee;
		border: 1px solid #ccc;
	}
	.shoppingCollect table  td{
		text-align: center;
		padding: 12px 16px;
	}
</style>
