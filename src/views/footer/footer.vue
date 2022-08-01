<template>
	<!-- 尾部 -->
	<div class="footer">
		<div class="footerContent">
			<div class="footLeft"><router-link to="/home"><img src="../../assets/img/bookLogo.jpeg" alt=""></router-link></div>
			<div class="footRight">
				<div class="rightDiv">
					<h5>购物指南</h5>
					<ul>
						<li><router-link to="/login">登录</router-link><router-link to="/register">注册</router-link></li>
						<li><router-link to="/personHome/shoppingGuide">购物指南</router-link></li>
						<li>常见问题</li>
					</ul>
				</div>
				
				<div class="rightDiv">
					<h5>支付方式</h5>
					<ul>
						<li><router-link to="/personHome/methodPayment">微信支付</router-link></li>
						<li><router-link to="/personHome/methodPayment">支付宝支付</router-link></li>
						<li><router-link to="/personHome/methodPayment">线下支付</router-link></li>
					</ul>
				</div>
				
				<div class="rightDiv">
					<h5>平台规则</h5>
					<ul>
						<li><router-link to="/personHome/logisticsInfo">发票制度</router-link></li>
						<li><router-link to="/personHome/refundMessage">配送方式</router-link></li>
						<li><router-link to="/personHome/advMessage">售后服务</router-link></li>
					</ul>
				</div>
				
				<div class="rightDiv">
					<h5>特色服务</h5>
					<ul>
						<li><router-link to="/personHome/rulesPlatform">书城会员</router-link></li>
						<li>大单采购</li>
						<li><router-link to="/personHome/advMessage"></router-link>售后服务</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="footBottom">
			<p>读书破万卷，下笔如有神</p>
			<p>读万卷书，行万里路</p>
			<p>读书有三到，谓心到，眼到，口到。心不在此，则眼看不仔细，心眼既不专一，却只漫诵浪读，决不能记，久也不能久也。三到之中，心到最急，心既到矣，眼口岂不到乎？</p>
			<p>书是灯，读书照亮了前面的路；书是桥，读书接通了彼此的岸；书是帆，读书推动了人生的船。读书是一门人生的艺术，因为读书，人生才更精彩！</p>
			<p>读书可供消遣，可供装饰，也可供增长才干。为消遣而读书，常见于独处退居之时；为装饰而读书，多用于高谈阔论之中；为增长才干而读书，主要在于对事物的判断和处理。</p>
			<p>读书是一种感悟人生的艺术。读杜甫的诗使人感悟人生的辛酸，读李白的诗使人领悟官场的不好，读鲁迅的文章使人认清社会的黑暗，读巴金的文章使人感到未来的希望。每一本书都是一个朋友，教会我们如何去看待人生。读书是人生的一门最不缺少的功课，阅读书籍，感悟人生，助我们走好人生的每一步。</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.footer{
		width: 100vw;
		padding: 30px 0px 30px 0px;
		border-top: 1px solid #ccc;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.footerContent{
		height: 260px;
		margin: 20px auto;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 4px #ccc;
	}
	.footLeft{
		width: 200px;
		height: 100%;
	}
	.footLeft img{
		width: 100%;
		height: 100%;
	}
	.footRight{
		width: 800px;
		height: 100%;
		display: flex;
		justify-content: space-around;
	}
	.footRight .rightDiv{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footRight .rightDiv h5{
		text-align: center;
		margin: 30px 0px;
	}
	.footRight ul{
		margin: 0px;
	}
	.footRight ul li{
		margin-top: 10px;
		font-size: 12px;
		color: #666;
		cursor: pointer;
	}
	.footRight ul li a{
		color: #666;
		text-decoration: none;
	}
	.footRight ul li:hover{
		color: deepskyblue;
		text-decoration: underline;
		transition: all 0.3s;
	}
	.footBottom{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footBottom p{
		margin-top: 12px;
		font-size: 12px;
		color: #666;
	}
</style>
