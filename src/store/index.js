import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let day = new Date();
const WEEKDAY = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export default new Vuex.Store({
	state: {
		day: day,
		year: day.getFullYear(),
		month: day.getMonth() + 1,
		today: day.getDate(),
		weekDay: WEEKDAY[day.getDay()],
	},
	mutations: {
		SET_NEXT_DAY(state) {
			state.today = day.setDate(state.today + 1);
			state.today = day.getDate();
			if (state.today == 1) {
				state.month += 1;
			} else if (state.month == 13 && state.today == 1) {
				state.year = day.setFullYear(state.year + 1);
				state.year = day.getFullYear();
				state.month = day.setMonth(state.month == 1);
				state.month = day.getMonth() + 1;
			}
		},
		SET_PREVIOUS_DAY(state) {
			state.today = day.setDate(state.today - 1);
			state.today = day.getDate();
			if (state.today == 31) {
				state.month -= 1;
			}
		},
	},
	actions: {},
	modules: {},
});
