import {SET_DATA, AJAX_GET_DATA} from "./types"
import axios from 'axios'

export default {
	state: {
		searchData:[]
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.searchData = payload
		},
		
		
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get("/static/data/search.json")
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
		}
		
	}
};