import Vue from 'vue'
import App from './app/App'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick';
import store from './vuex'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	store,
	template: '<App />',
	components: {App}
});
