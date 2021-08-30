import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

const day = new Date();
const WEEKDAY = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export default new Vuex.Store({
	state: {
		year: day.getFullYear(),
		month: day.getMonth() + 1,
		today: day.getDate(),
		weekDay: WEEKDAY[day.getDay()],
		token: null,
	},
	mutations: {
		SET_NEXT_DAY(state) {
			state.today += 1;
			state.weekDay = WEEKDAY[day.getDay() + 1];
		},
		SET_PREVIOUS_DAY(state) {
			state.today -= 1;
			state.weekDay = WEEKDAY[day.getDay() - 1];
		},
	},
	actions: {
		async GET_KAKAO_LOGIN() {
			const res = await api.kakaoLogin();
			console.log(res);
		},
	},
	modules: {},
});
