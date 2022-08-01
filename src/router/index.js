import Vue from "vue"
import VueRouter from "vue-router"
import home from '../views/home.vue'
import {
	MessageBox
} from 'element-ui';
import personInfo from '../views/header/消息中心/personInfo.vue'
import allOrder from '../views/header/我的订单/orderState/allOrder.vue'
Vue.use(VueRouter)

const routes = [{
		path: '*',
		redirect: 'home'
	},
	{
		path: '/',
		redirect: 'home'
	}, //首页
	{
		path: '/login',
		component: () => import( /* webpackChunkName:"login" */ '../views/login/login.vue')
	}, //登录
	{
		path: '/register',
		component: () => import( /* webpackChunkName:"register" */ '../views/login/register.vue')
	}, //注册页面
	{
		path: '/home',
		name: home,
		component: home
	},
	//头部
	{
		path: '/BookItem/bookDetail/:item',
		name: 'BookItem/bookDetail',
		component: () => import( /* webpackChunkName:"bookDetail" */
			'../views/contentBody/BookItemDetail/bookDetail.vue')
	}, //书籍详情2022年杂志征订
	{
		path: '/contentNav',
		component: () => import( /* webpackChunkName:"contentNav" */ '../views/contentNav/contentNav.vue')
	}, //正文导航列表
	{
		path: '/shoppingCar',
		component: () => import( /* webpackChunkName:"shoppingCar" */ '../views/shoppingCar/shoppingCar.vue')
	}, //加入购物车
	{
		path: '/nowShopping',
		component: () => import( /* webpackChunkName:"nowShopping" */ '../views/shoppingCar/nowShopping.vue')
	}, //立即购买
	{
		path: '/personHome',
		component: () => import( /* webpackChunkName:"personHome" */ '../views/personHome/personHome.vue'), //个人信息
		children: [{
				path: '/',
				redirect: 'personInfo'
			},
			{
				path: '/personHome/personInfo',
				component: () => import( /* webpackChunkName:"personInfo" */
					'../views/header/消息中心/personInfo.vue')
			}, //个人信息
			{
				path: '/personHome/myCollect',
				component: () => import( /* webpackChunkName:"myCollect" */
					'../views/header/我的账户/myCollect.vue')
			}, //我的收藏
			{
				path: '/personHome/myAddress',
				component: () => import( /* webpackChunkName:"myAddress" */
					'../views/header/我的账户/myAddress.vue')
			}, //我的地址
			{
				path: '/personHome/myOrder',
				component: () => import( /* webpackChunkName:"myOrder" */ '../views/header/我的订单/myOrder.vue'),
				children: [{
						path: '/',
						redirect: 'allOrder'
					}, //全部订单
					{
						path: '/personHome/myOrder/allOrder',
						component: () => import( /* webpackChunkName:"allOrder" */
							'../views/header/我的订单/orderState/allOrder.vue')
					}, //全部订单
					{
						path: '/personHome/myOrder/payment',
						component: () => import( /* webpackChunkName:"payment" */
							'../views/header/我的订单/orderState/payment.vue')
					}, //待付款
					{
						path: '/personHome/myOrder/shipped',
						component: () => import( /* webpackChunkName:"shipped" */
							'../views/header/我的订单/orderState/shipped.vue')
					}, //待发货
					{
						path: '/personHome/myOrder/sendGoods',
						component: () => import( /* webpackChunkName:"sendGoods" */
							'../views/header/我的订单/orderState/sendGoods.vue')
					}, //已发货
					{
						path: '/personHome/myOrder/completed',
						component: () => import( /* webpackChunkName:"completed" */
							'../views/header/我的订单/orderState/completed.vue')
					}, //已完成
					{
						path: '/personHome/myOrder/closed',
						component: () => import( /* webpackChunkName:"closed" */
							'../views/header/我的订单/orderState/closed.vue')
					}, //已关闭
					{
						path: '/personHome/myOrder/refund',
						component: () => import( /* webpackChunkName:"refund" */
							'../views/header/我的订单/orderState/refund.vue')
					}, //退款
				]
			}, //我的订单
			{
				path: '/personHome/shoppingGuide',
				component: () => import( /* webpackChunkName:"shoppingGuide" */
					'../views/header/帮助中心/shoppingGuide.vue')
			}, //购物指南
			{
				path: '/personHome/methodPayment',
				component: () => import( /* webpackChunkName:"methodPayment" */
					'../views/header/帮助中心/methodPayment.vue')
			}, //支付方式
			{
				path: '/personHome/rulesPlatform',
				component: () => import( /* webpackChunkName:"rulesPlatform" */
					'../views/header/帮助中心/rulesPlatform.vue')
			}, //书城会员
			{
				path: '/personHome/securityCenter',
				component: () => import( /* webpackChunkName:"securityCenter" */
					'../views/header/消息中心/securityCenter.vue')
			}, //安全中心=修改密码
			{
				path: '/personHome/logisticsInfo',
				component: () => import( /* webpackChunkName:"logisticsInfo" */
					'../views/header/消息中心/logisticsInfo.vue')
			}, //发票制度
			{
				path: '/personHome/refundMessage',
				component: () => import( /* webpackChunkName:"refundMessage" */
					'../views/header/消息中心/refundMessage.vue')
			}, //配送方式
			{
				path: '/personHome/advMessage',
				component: () => import( /* webpackChunkName:"advMessage" */
					'../views/header/消息中心/advMessage.vue')
			}, //售后服务
		]
	}, //个人中心
	{
		path: '/baokuan',
		component: () => import( /* webpackChunkName:"baokuan" */ '../views/contentNav/contentView/baokuan.vue')
	}, //爆款
	{
		path: '/mingjia',
		component: () => import( /* webpackChunkName:"logicians" */ '../views/contentNav/contentView/mingjia.vue')
	}, //名家绘本
	{
		path: '/highQuality',
		component: () => import( /* webpackChunkName:"highQuality" */
			'../views/contentNav/contentView/highQuality.vue')
	}, //精品文创
	{
		path: '/eduToys',
		component: () => import( /* webpackChunkName:"eduToys" */ '../views/contentNav/contentView/eduToys.vue')
	}, //益智玩具
	{
		path: '/digitalApp',
		component: () => import( /* webpackChunkName:"digitalApp" */
			'../views/contentNav/contentView/digitalApp.vue')
	}, //数码家电
	{
		path: '/householdBest',
		component: () => import( /* webpackChunkName:"householdBest" */
			'../views/contentNav/contentView/householdBest.vue')
	}, //家居日百
	{
		path: '/stationery',
		component: () => import( /* webpackChunkName:"stationery" */
			'../views/contentNav/contentView/stationery.vue')
	}, //文具
	{
		path: '/searchInfo',
		component: () => import( /* webpackChunkName:"searchInfo" */ '../views/contentSearch/searchInfo.vue')
	} //搜索展示内容

]



const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})

router.beforeEach((to, from, next) => {
	const nextRoute = ['/nowShopping', '/shoppingCar', '/personHome/personInfo', '/personHome/securityCenter',
		'/personHome/myOrder/allOrder', '/personHome/myOrder', '/personHome/myOrder/payment',
		'/personHome/myOrder/shipped',
		'/personHome/myOrder/sendGoods', '/personHome/myOrder/completed', '/personHome/myOrder/closed',
		'/personHome/myOrder/refund', '/personHome/myCollect', '/personHome/myAddress'
	];
	let loginTok = window.localStorage.getItem('loginInfo');
	if (nextRoute.indexOf(to.path) >= 0) {
		if (loginTok == null) {
			MessageBox.confirm('请您先登录，是否登录', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
				center: true
			}).then(() => {
				router.push({
					path: "/login"
				});
			}).catch(() => {
				router.go(-1);
			});
			next();
		} else {
			next();
		}

	}
	next();
})

export default router
