<template>
	<div class="shoppingGuide">
		<div class="content">
			<h3>发票制度</h3>
			<ol type="1">
				<p>会员在书城购买商品时，如果需要开发票，请在提交订单的时候勾选“需要发票”，并填写开票信息（公司名称+纳税人识别号），我们将在订单完成时（您点击“确认收货”）为您发送电子发票到您的邮箱。</p>
				<p>*温馨提示：</p>
				<div>
					<p>1.发票是按实收金额（即如果是属于指定优惠价的商品，则按折后的书款）开出的，邮寄费不包括在发票内 。</p>
					<p>2.如果在您提交订单时没有填写发票需求，您可在下单后一个月内申请补开发票。</p>
					<p>3.智慧卡由于在购卡时已开具发票，购物时不再开具发票。团体会员余额消费也是已开具发票给团体单位，购物时不再开具发票。</p>
					<p>4.需要开增值税专用发票请联系在线客服。</p>
					<p>5.由于电子发票没有部分冲红，所以一旦订单内有商品退款了，发票会自动整张冲红，如需重开发票请联系人工客服</p>
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
</style>
