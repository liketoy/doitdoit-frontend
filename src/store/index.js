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
			// if (
			// 	state.month == 1 ||
			// 	state.month == 3 ||
			// 	state.month == 5 ||
			// 	state.month == 7 ||
			// 	state.month == 8 ||
			// 	state.month == 10 ||
			// 	state.month == 12
			// ) {
			// 	while (state.today <= 31) {
			// 		state.today += 1;
			// 		state.weekDay = WEEKDAY[day.getDay() + 1];
			// 	}
			// 	state.month += 1;
			// 	state.today == 1;
			// }
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
