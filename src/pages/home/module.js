import {SET_DATA, AJAX_GET_DATA} from "./types"
import axios from 'axios'

export default {
	state: {
		homeData: [],
		citiesVal: "北京"
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.homeData = payload
		},
		getCitiesVal(state, payload) {
			state.citiesVal = payload;
			localStorage.citiesVal = payload
			
		},
		initCitiesVal(state) {
			if(localStorage.citiesVal){
				state.citiesVal = localStorage.citiesVal
			}
		}
		
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get("/static/data/home.json")
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
		}
		
	}
};