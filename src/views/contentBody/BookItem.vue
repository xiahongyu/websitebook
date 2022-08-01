<template>
	<!-- 书籍展示列表 -->
	<div class="bookContent">
		<div class="booksDiv">
			<header>
				<h3>2022年杂志征订</h3><span></span>
			</header>
			<div class="contentDiv">
				<router-link :to="{'name':'BookItem/bookDetail',params:{'item':item}}" v-for="(item,index) in bookList1"
					:key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="`${require(`../../assets/img/bookItem/${item.imgurl}`)}`" alt="">
						</div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span
								class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
			</div>
		</div>

		<div class="booksDiv">
			<header>
				<h3>读书月2021“年度十大童书”</h3><span></span>
			</header>
			<div class="contentDiv">
				<router-link :to="{'name':'BookItem/bookDetail',params:{'item':item}}" v-for="(item,index) in bookList2"
					:key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="`${require(`../../assets/img/bookItem/${item.imgurl}`)}`" alt="">
						</div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span
								class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
			</div>
		</div>


		<div class="booksDiv">
			<header class="cainiLike"><span class="likes">猜你喜欢</span></header>
			<div class="contentDiv">
				<router-link :to="{'name':'BookItem/bookDetail',params:{'item':item}}" v-for="(item,index) in bookList3"
					:key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="`${require(`../../assets/img/bookItem/${item.imgurl}`)}`" alt="">
						</div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span
								class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
	import bookdata from '../../common/index.js'
	export default {
		data() {
			return {
				bookList1: [],
				bookList2: [],
				bookList3: [],
				bookdata: bookdata
			}
		},
		created() {

		},
		mounted() {
			this.bookList1 = this.bookdata.bookInfo.slice(0, 10);
			this.bookList2 = this.bookdata.bookInfo.slice(10, 20);
			this.bookList3 = this.bookdata.bookInfo.slice(20, 25);
		},
		filters: {
			slices(value) {
				return value.slice(0, 13) + "...";
			},
		}
	}
</script>

<style scoped="scoped">
	.bookContent {
		width: 100vw;
		background-color: #F6F6F6;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 0px;
	}

	.booksDiv {
		width: 1200px;
	}

	.booksDiv header {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.booksDiv header span:last-child {
		cursor: pointer;
	}

	.booksDiv header span:last-child:hover {
		color: skyblue;
		font-weight: bold;
	}

	.booksDiv .contentDiv {
		width: 100%;
		padding: 20px 10px;
		background-color: #fff;
		border-radius: 6px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.booksDiv .contentDiv a {
		color: #333;
		margin-bottom: 24px;
	}

	.booksDiv .contentDiv a:hover {
		color: deepskyblue;
		transition: all 0.3s;
	}

	.contentItem {
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-shadow: 0 0 4px #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		cursor: pointer;
	}

	.contentItem .imgs {
		width: 100%;
		height: 200px;
	}

	.contentItem .imgs img {
		width: 100%;
		height: 100%;
	}

	.contentItem .titles,
	.author {
		margin: 5px 0px;
		font-size: 14px;
	}

	.contentItem .prices {
		text-align: center;
	}

	.contentItem .prices span {
		margin: 0px 6px;
	}

	.contentItem .price {
		font-size: 18px;
		color: red;
		font-weight: bold;
	}

	.oldprice {
		font-size: 14px;
		color: #ccc;
		text-decoration: line-through;
	}

	.cainiLike {
		border-bottom: 2px solid #ccc;
	}

	.cainiLike .likes {
		border-bottom: 2px solid purple;
		padding: 10px;
	}
</style>
