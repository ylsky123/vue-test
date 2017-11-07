import {SET_DATA, AJAX_GET_DATA} from "./types"
import axios from 'axios'

export default {
	state: {
		citiesData: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.citiesData = payload
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get("/static/data/cities.json")
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
			
		}
	}
};