<template>
	<div class="shoppingGuide">
		<div class="content">
			<h3>微信支付</h3>
			<ol type="1">
				<li>PC端扫码支付</li>
				<p>在书城购物车提交订单之后，选择微信支付，打开手机微信扫描PC端二维码跳转至微信支付交易页面，完成交易流程。</p>
				<p>2.移动端（微信线上书城/掌上书城APP）微信支付。关注“书城”微信公众号，点击菜单“线上服务-线上书城”/在各大应用市场书城APP掌上书城，移动端书城内完成商品挑选和提交订单，选择微信支付，完成微信支付交易流程。</p>
				<p>*温馨提示：</p>
				<div>
					<p>1.如果系统没有提示支付失败或成功，您可通过微信钱包查询微信零钱余额或银行APP查询银行卡余额，如果款项已被扣除，说明您已支付成功。</p>
					<p>2.如果出现微信余额不足、网络中断等导致支付不成功，请您登录书城官网或移动端>我的订单>待付款，找到该未支付成功的订单，重新完成支付。</p>
					<p>3.成功全额线上支付的订单，若在商户缺货或部分缺货的情况下，在取得您的同意后，可以全额退款（订单取消）或部分退款（部分发货），退款将退回您的微信钱包或者绑定的银行卡。</p>
				</div>
			</ol>
			<h3>支付宝支付</h3>
			<ol type="1">
				<li>PC端扫码支付</li>
				<p>在书城购物车提交订单之后，选择支付宝支付，打开手机支付宝扫描PC端二维码跳转至支付宝支付交易页面，完成交易流程。</p>
				<p>*温馨提示：</p>
				<div>
					<p>1.如果系统没有提示支付失败或成功，您可通过支付宝钱包查询支付宝零钱余额或银行APP查询银行卡余额，如果款项已被扣除，说明您已支付成功。</p>
					<p>2.如果出现支付宝余额不足、网络中断等导致支付不成功，请您登录书城官网或移动端>我的订单>待付款，找到该未支付成功的订单，重新完成支付。</p>
				</div>
			</ol>
			
			<h3>线下支付</h3>
			<ol type="1">
				<li>PC端扫码支付</li>
				<p>线下支付仅适用于大单采购客户，请先联系在线客服或0755-15432135745，协商订单内容及支付时间。大单采购可以先在线上选好书，再联系客服线下对公转账。如有团体签购或大单采购业务请联系0755-13547654341。</p>
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
		height: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	.content h3{
		margin:10px 0px ;
	}
	.content ol{
		width: 90%;
		margin: 0;
		padding-left: 30px;
	}
	.content ol li{
		margin-top: 12px;
		list-style-type:unset !important;
	}
	.content  p{
		width: 100%;
		margin-top: 10px;
		color: #555;
		font-size: 14px;
		word-wrap: break-word;
	}
</style>
