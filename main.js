import Vue from 'vue'
import App from './App'

Vue.prototype.islogin = function() {
	var isLogin = uni.getStorageSync('login');
	if (!isLogin) {
		uni.navigateTo({
			url: '../login/login'
		});
		return false
	}else{
		return true
	}
}

import pageHead from './components/page-head.vue'
Vue.component('page-head',pageHead)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
