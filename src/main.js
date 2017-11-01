import Vue from 'vue'
import App from './app/App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick';

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
})
