import {SET_DATA, AJAX_GET_DATA} from "./types"
import axios from 'axios'

export default {
	state: {
		list:[],
		listMenu:[]
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.list = payload.list;
			state.listMenu = payload.listMenu
		},
		
		
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get("/static/data/list.json")
				.then((response) => {
					context.commit(SET_DATA, response.data.data)
				})
		}
		
	}
};