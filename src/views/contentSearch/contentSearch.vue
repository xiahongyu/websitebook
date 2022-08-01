<template>
	<!-- 头部搜索栏 -->
	<div class="content">
		<div class="left">
			<img src="../../assets/img/dongtaiImg/d2.gif" alt="">
			理想的书籍，是智慧的钥匙</div>
		<div class="right">
			<el-input v-model="searchMes" placeholder="请输入内容" @focus="focusTrue(searchMes)"></el-input>
			<div v-show="focusShow" class="focusShow">
				<ul>
					<li v-for="(item,index) in searchList" :key="index" @click="searchThis(item)">{{item.title}}</li>
				</ul>
			</div>
			 <el-button type="primary" @click="searchInfo">搜索</el-button>
			<el-badge :value="shoppingLen">
				<router-link to="/shoppingCar"><i class="el-icon-goods"></i></router-link>
			</el-badge>
			<router-link to="/personHome"><i class="el-icon-user"></i></router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchMes: '',//搜索内容
			timer:'',//防抖，防止多次点击
			focusShow:false,//标识是否显示搜索内容框
			searchList:[//搜索框列表
				{"title":"2月刊起订【2-7岁】《儿童时代》"},
				{"title":"《三联生活周刊》 2022年全年52期"},
				{"title":"短史记"},
				{"title":"我能有什么坏心思呢"},
				{"title":"上校的大衣"},
				{"title":"听月亮的女孩"},
				{"title":"大大的城市,小小的你"},
				{"title":"深海浅说"},
				{"title":"环球追捕"}
			]
		};
	},
	methods: {
		searchInfo(){//搜索按钮
			clearTimeout(this.timer);
			this.focusShow = false;
			let that = this;
			that.timer = setTimeout(()=>{
				if(that.searchMes == ''){
					that.$message({
						message:'搜索内容不能为空!',
						type:'warning'
					});
				}else {
					this.$store.commit('sendSearch',that.searchMes);
					this.$router.push('/searchInfo');
				}
			},800)
		},
		focusTrue(){//搜索框获取焦点
			this.focusShow = true;
		},
		searchThis(item){//搜索框内容选中的内容
			this.searchMes = item.title;
			setTimeout(()=>{
				this.focusShow = false;
			},0)
		}
	},
	computed:{
		shoppingLen(){//根据搜索列表中有无数据来决定是否显示展示页面
			let shoplen = this.$store.getters.getShoppingLength;
			if(shoplen == 0){
				return 
			}else{
				return shoplen;
			}
		}
	}
};
</script>

<style scoped="scoped">
	.content{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}
	.focusShow{
		width: 284px;
		height: 331px;
		background: rgba(0,0,0,0.3);
		position: absolute;
		top: 91px;
		right: 414px;
		z-index: 99999;
		color: white;
		font-size: 13px;
	}
	.focusShow > ul{
		padding: 0;
		width: 100%;
		height: 100%;
		list-style: none;
	}
	.focusShow > ul li{
		margin: 0;
		padding: 8px 16px;
		cursor: pointer;
	}
	.focusShow > ul li:hover{
		background-color: skyblue;
	}
	.el-autocomplete{
		width: 300px;
	}
	.el-button{
		margin-left: 10px;
	}
	.left{
		display: flex;
		align-items: center;
	}
	.left img{
		width: 100px;
		height: 70px;
		margin-right: 10px;
	}
	.right{
		display: flex;
		align-items: center;
	}
	.right i{
		font-size: 30px;
		margin-left: 40px;
		cursor: pointer;
	}
	.right a{
		color: black;
		text-decoration: none;
	}
	.right a:hover{
		color: deepskyblue;
		transition: all 0.4s;
	}
</style>
