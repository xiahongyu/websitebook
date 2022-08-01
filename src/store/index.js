import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		loginInfo: null,
		isLogin: true,
		shoppingList: [], //购物车列表
		nowShopList: [], //立即购买
		nowId: false, //标识是否点击了立即购买按钮
		shouList: [], //收藏列表
		userId: null, //当前登录用户id
		addressList: [], //收货地址列表
		searchInfo: null,
		isokBuyList: [] //已经购买了的列表
	},
	mutations: {
		setisokBuyList(state, payload) { //设置已经购买了的列表
			state.isokBuyList.push(...payload);
			window.localStorage.setItem('isokBuyList', JSON.stringify(state.isokBuyList));
		},
		deleteisokBuyList(state, payload) {
			if (state.isokBuyList.length <= 0) {
				window.localStorage.removeItem('isokBuyList');
			} else {
				state.isokBuyList.splice(payload, 1);
			}
		},
		loginUpdate(state, payload) { //登录之后修改状态（用户名）
			state.loginInfo = payload
			window.localStorage.setItem('username', payload);
		},
		isLogin(state, payload) { //标识是否登录
			state.isLogin = false
		},
		logout(state, payload) { //退出登录
			window.localStorage.removeItem('loginInfo');
			window.localStorage.removeItem('username');
			window.localStorage.removeItem('loginThisId');
			state.isLogin = true;
		},
		uploadShop(state, payload) { //加入购物车列表
			state.shoppingList.push(payload);
			window.localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
		},
		deleteShoppingList(state, payload) {
			if (payload == 'all') {
				state.shoppingList.splice(0);
				window.localStorage.removeItem('shoppingList');
			} else {
				state.shoppingList.splice(payload, 1);
				window.localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
			}
		},
		updateNowId(state, payload) { //立即购买标识
			state.nowId = payload
		},
		buyNow(state, payload) { //立即购买
			state.nowShopList.splice(0, 1);
			state.nowShopList.push(payload)
		},
		clearbuyNow(state, payload) {
			state.nowShopList.splice(0); //购买完之后清空立即购买数组
		},
		nowShop(state, payload) { //加入购物车修改立即购买标识
			state.nowId = payload
		},
		shoucangList(state, payload) { //收藏列表
			state.shouList.push(payload);
		},
		userId(state, payload) { //存储当前登录用户id,用于显示当前用户信息
			state.userId = payload
			window.localStorage.setItem('loginThisId', payload); //本地存储当前登录用户id
		},
		addressTab(state, payload) { //添加收货地址
			state.addressList.concat(payload);
			window.localStorage.setItem('addressList', JSON.stringify(state.addressList));
		},
		deleteAddress(state, payload) { //删除收货地址当前列
			state.addressList.splice(payload, 1);
			window.localStorage.setItem('addressList', JSON.stringify(state.addressList));
		},
		sendSearch(state, payload) {
			state.searchInfo = payload;
		}
	},
	getters: {
		getShoppingInfo(state) { //获取购物列表
			let list = JSON.parse(window.localStorage.getItem('shoppingList'))
			if (list) {
				state.shoppingList = list
				return list
			} else {
				window.localStorage.removeItem('shoppingList');
				return state.shoppingList
			}
		},
		getShoppingLength(state) { //获取购物列表长度
			return state.shoppingList.length
		},
		getAddresslistArr(state) { //获取收获地址列表
			let list = JSON.parse(window.localStorage.getItem('addressList'))
			if (list) {
				state.addressList = list
				return list
			} else {
				window.localStorage.removeItem('addressList');
				return state.addressList
			}
		},
		getNowId(state) { //获取是否点击了立即购买标识
			return state.nowId
		},
		getNowShop(state) { //获取立即购买列表
			return state.nowShopList
		},
		getSearchInfo(state) {
			return state.searchInfo;
		},
		getisokBuyList(state) {
			let list = JSON.parse(window.localStorage.getItem('isokBuyList'))
			if (list) {
				state.isokBuyList = list
				return list;
			} else {
				window.localStorage.removeItem('isokBuyList');
				return state.isokBuyList; //获取已经购买了的列表
			}
		}
	}

})

export default store
