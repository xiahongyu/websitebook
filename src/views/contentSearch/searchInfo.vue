<template>
	<!-- 展示搜索详情页 -->
	<div class="searchInfo">
		<headers></headers>
		<contentNav></contentNav>
		<div class="contentSearch" v-if="this.filterList.length>0">
			<div class="pageContent">
				<div class="contentDiv">
					<router-link :to="'/BookItem/bookDetail/'+item.id" v-for="(item,index) in filterList" :key="index">
						<div class="contentItem">
							<div class="imgs"><img :src="item.imgurl" alt=""></div>
							<p class="titles">{{item.title | slices}}</p>
							<p class="author">{{item.author}}</p>
							<p class="prices"><span class="price">￥{{item.price}}</span><span class="oldprice">￥{{item.oldprice}}</span></p>
						</div>
					</router-link>
				</div>
				
				<el-pagination class="tabListPage" background
				 layout="prev,pager,next" :total="filterList.length" 
				 :page-size="this.pageSize"  :current-page.sync="currentPage1">
				  </el-pagination>
			</div>
		</div>
		
		<div class="contentSearch" v-else>
			<div class="pageContent">
				<el-empty description="sorry!没有匹配到内容...">
					<router-link to="/home"><el-button type="primary">回首页</el-button></router-link>
				</el-empty>
			</div>
		</div>
		<footers></footers>
		<backTop></backTop>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	import headers from '../header/header.vue'
	import contentNav from '../contentNav/contentNav.vue'
	import footers from '../footer/footer.vue'
	import backTop from '../backTop/backTop.vue'
	export default{
		components:{
		 headers,
		 contentNav,
		 footers,
		 backTop
		},
		data(){
			return{
				message:'',//搜索框中输入的内容
				arrList:null,//请求的全部数据用来遍历
				filterList:[],//根据搜索内容过滤出的列表
				currentPage1:1,//页数
				pageSize:15,//每页多少条数据
			}
		},
		created() {
			this.message = this.$store.getters.getSearchInfo;
			request({
				url:'bookInfo'
			}).then(res=>{
				let that = this;
				that.arrList = res.data;
				that.arrList.forEach(e=>{
					if(e.title.includes(that.message)){
						that.filterList.push(e);
					}
				})
			})
		},
		watch:{
			pageSize(){
				let dataLen = parseInt(this.filterList.length / this.pageSize);
				if(dataLen == 0){
					return 1;
				}else{
					return dataLen+1;
				}
			}
		},
		filters:{
			slices(val){
				return val.slice(0,10)+'...'
			}
		}
	}
</script>

<style scoped="scoped">
	.searchInfo{
		width: 100vw;
	}
	.contentSearch{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px 0px;
	}
	.pageContent{
		width: 1200px;
		border: 1px solid #ccc;
		padding-bottom: 16px;
	}
	.contentDiv{
		width: 100%;
		padding-top: 20px;
		background-color: #fff;
		border-radius: 6px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.contentDiv a{
		color: #333;
		margin-bottom: 24px;
	}
	.contentDiv a:hover{
		color: deepskyblue;
		transition: all 0.3s;
	}
	.contentItem{
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-shadow: 0 0 4px #ccc ;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		cursor: pointer;
	}
	.contentItem .imgs{
		width: 100%;
		height: 200px;
	}
	.contentItem .imgs img{
		width: 100%;
		height: 100%;
	}
	.contentItem .titles, .author{
		margin: 5px 0px;
		font-size: 14px;
	}
	.contentItem .prices{
		text-align: center;
	}
	.contentItem .prices span{
		margin: 0px 6px;
	}
	.contentItem .price{
		font-size: 18px;
		color: red;
		font-weight: bold;
	}
	.oldprice{
		font-size: 14px;
		color: #ccc;
		text-decoration: line-through;
	}
</style>
