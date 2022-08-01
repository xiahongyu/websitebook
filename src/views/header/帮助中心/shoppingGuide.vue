<template>
	<div class="shoppingGuide">
		<div class="content">
			<h3>登录注册</h3>
			<ol type="1">
				<li>新用户如何注册</li>
				<p>官网：进入书城官方网站首页，单击顶部的“登录/注册”。跳出“登录/注册”窗口，输入用户名和密码，首次登录即注册，系统将自动为您创建账号。</p>
				<p>移动端：在书城APP掌上书城或 “书城”微信公众号的线上书城，点击“我的”即会出现登录页面。输入手机码获取验证码，首次登录即注册，系统将自动为您创建账号。</p>
				<li>用户登录</li>
				<p>官网：进入书城官方网站首页，单击顶部中央的“登录/注册”。可使用手机验证码登录或者账号密码登录。</p>
				<p>移动端：点击底部导航“购物车”或者“我的”即出现登录页面。</p>
				<p>*温馨提示：</p>
				<div>
					<p>1.官网、APP、线上书城的账号是统一的，在任意渠道登录过即成为深圳书城会员，购物车和订单信息也互通。</p>
					<p>2.使用手机验证码登录后建议您设置登录密码，以便您手机无法接收验证码时登录账号。请务必填写正确有效的邮箱地址，以便忘记登录密码时，可以找回密码。</p>
					<p>3.手机号若曾经注册过，将直接登录您的账号。</p>
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
