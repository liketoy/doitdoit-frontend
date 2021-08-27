import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const day = new Date();
const WEEKDAY = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export default new Vuex.Store({
	state: {
		year: day.getFullYear(),
		month: day.getMonth() + 1,
		today: day.getDate(),
		weekDay: WEEKDAY[day.getDay()],
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
	actions: {},
	modules: {},
});
