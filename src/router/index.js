import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Header from '@/pages/home/Header'
import Cities from '@/pages/cities/Cities'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'
import TourList from '@/pages/oneDayTour/tourList/TourList'
import TourDetail from '@/pages/oneDayTour/tourDetail/TourDetail'


Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	},
		{
			path: '/',
			name: 'header',
			component: Header
			,
			children: [{
				path: '/list',
				name: 'list',
				component: List
			}, {
				path: '/tourlist',
				name: 'tourList',
				component: TourList
			}, {
				path: '/cities',
				name: 'cities',
				component: Cities
			}]
		}, {
			path: '/detail',
			name: 'detail',
			component: Detail
		}, {
			path: '/tourdetail',
			name: 'tourDetail',
			component: TourDetail
	}]
})
