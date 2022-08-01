import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
// axios.defaults.baseURL = 'http://localhost:3000/'
// axios.defaults.timeout=5000 
new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
