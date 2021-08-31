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
			state.weekDay = WEEKDAY[day.getDay()];
			if (state.today == 1) {
				state.month += 1;
				if (state.month == 13) {
					state.year = day.setFullYear(state.year + 1);
					state.year = day.getFullYear();
					state.month = day.setMonth(state.month == 1);
					state.month = day.getMonth() + 1;
				}
			}
		},
		SET_PREVIOUS_DAY(state) {
			state.today = day.setDate(state.today - 1);
			state.today = day.getDate();
			state.weekDay = WEEKDAY[day.getDay()];
			if (state.today == 31) {
				if (
					state.month == 1 ||
					state.month == 3 ||
					state.month == 5 ||
					state.month == 7 ||
					state.month == 8 ||
					state.month == 10 ||
					state.month == 12
				) {
					state.month -= 1;
				} else if (state.month == 0) {
					state.year = day.setFullYear(state.year) - 1;
					state.year = day.getFullYear();
					state.month = day.setMonth(state.month == 12);
					state.month = day.getMonth() + 1;
				}
			} else if (state.today == 30) {
				if (state.month == 4 || state.month == 6 || state.month == 9 || state.month == 11) {
					state.month -= 1;
				}
			} else if (state.today == 29 && state.month == 2) {
				state.month -= 1;
			}
		},
	},
	actions: {},
	modules: {},
});
