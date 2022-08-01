<template>
	<div class="shoppingGuide">
		<div class="content">
			<h3>配送方式</h3>
			<ol type="1">
				<p>一、六大书城邮费标准罗湖书城、中心书城、南山书城、宝安书城、龙岗书城、龙华书城的快递公司为京东快递。每天16点前订单当日发货，其余次日发货.该表时效仅供参考，以京东快递官网具体时效为准。</p>
				<div class="imgs">
					<img src="../../../assets/img/emailPrice1.png" alt="">
				</div>
				<div>
					<p>二、其他商户的快递方式及运费按照商户所发快递和设定运费收取。</p>
					<p>给香港顾客的温馨提示：由于快递公司规定，音像制品仅音乐类和教育类光盘可寄往香港，且每个订单限制数量在5张以内。超出邮寄范围的商品无法发货，请您谅解！</p>
				</div>
			</ol>
		</div>
	</div>
</template>

<script></script>

<style scoped="scoped">
	.shoppingGuide{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content{
		width: 90%;
		height: 90%;
		overflow: hidden;
		background-color: #fff;
	}
	.content ol{
		width: 90%;
		margin: 0;
		padding-left: 30px;
	}
	.content ol li{
		margin-top: 20px;
		list-style-type:unset !important;
	}
	.content  p{
		width: 100%;
		margin-top: 20px;
		color: #555;
		font-size: 14px;
		word-wrap: break-word;
	}
	.imgs{
		width: 100%;
		height: 400px;
		margin: 20px 0px;
	}
	.imgs img{
		width: 100%;
		height: 100%;
	}
</style>
