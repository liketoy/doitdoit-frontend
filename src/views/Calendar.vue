<template>
	<layout-vue>
		<div>
			<div id="add" class="position" style="cursor: pointer" onclick="location.href='#';"><a href="#"></a></div>
			<div>
				<div>
					<button class="left position" @click="calendarData(-1)">
						<img src="../assets/left.png" alt="이전 달로 가기" />
					</button>
					<h2 class="subtitle has-text-centered month position">{{ month }}월</h2>
					<button class="right position" @click="calendarData(1)">
						<img src="../assets/right.png" alt="다음 달로 가기" />
					</button>
				</div>
				<div>
					<div class="position days">
						<div class="day">SUN</div>
						<div class="day">MON</div>
						<div class="day">TUE</div>
						<div class="day">WEN</div>
						<div class="day">THU</div>
						<div class="day">FRI</div>
						<div class="day">SAT</div>
					</div>
					<div id="calendar" class="position">
						<table class="table has-text-centered is-fullwidth">
							<tbody>
								<tr v-for="(date, idx) in dates" :key="idx">
									<td
										v-for="(day, secondIdx) in date"
										:key="secondIdx"
										:class="{
											'has-text-info-dark': idx === 0 && day >= lastMonthStart,
											'has-text-danger': dates.length - 1 === idx && nextMonthStart > day,
											'has-text-primary': day === today && month === currentMonth && year === currentYear,
										}"
									>
										{{ day }}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</layout-vue>
</template>

<style>
	#add {
		top: 196px;
		left: 1680px;
		width: 40px;
		height: 40px;
		background: transparent url("../assets/add.png") 0% 0% no-repeat padding-box;
	}
	#calendar {
		top: 426px;
		left: 685px;
		width: 1040px;
		height: 550px;
		display: grid;
		font-size: 40px;
	}
	.position {
		position: absolute;
	}
	.left {
		top: 201px;
		left: 1086px;
		width: 30px;
		height: 30px;
		background-color: transparent;
		outline: 0;
		border: 0;
		cursor: pointer;
	}

	.right {
		top: 201px;
		left: 1280px;
		width: 30px;
		height: 30px;
		background-color: transparent;
		outline: 0;
		border: 0;
		cursor: pointer;
	}

	.month {
		top: 190px;
		right: 669px;
		width: 95px;
		height: 83px;
		font-size: 4vh;
	}

	.days {
		top: 307px;
		left: 686px;
		letter-spacing: 0px;
		color: #121212;
	}

	.days div {
		list-style-type: none;
		float: left;
		width: 118px;
		height: 69px;
		margin: 15px;
		font-size: 50px;
		text-align: center;
	}
</style>

<script>
	import LayoutVue from "../components/Layout.vue";

	export default {
		name: "Calendar",
		components: {
			LayoutVue,
		},
		data() {
			return {
				days: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"],
				dates: [],
				currentYear: 0,
				currentMonth: 0,
				year: 0,
				month: 0,
				lastMonthStart: 0,
				nextMonthStart: 0,
				today: 0,
			};
		},
		created() {
			const date = new Date();
			this.currentYear = date.getFullYear();
			this.currentMonth = date.getMonth() + 1;
			this.year = this.currentYear;
			this.month = this.currentMonth;
			this.today = date.getDate();
			this.calendarData();
		},
		methods: {
			calendarData(arg) {
				if (arg < 0) {
					this.month -= 1;
				} else if (arg === 1) {
					this.month += 1;
				}
				if (this.month === 0) {
					this.year -= 1;
					this.month = 12;
				} else if (this.month > 12) {
					this.year += 1;
					this.month = 1;
				}
				const [monthFirstDay, monthLastDate, lastMonthLastDate] = this.getFirstDayLastDate(this.year, this.month);
				this.dates = this.getMonthOfDays(monthFirstDay, monthLastDate, lastMonthLastDate);
			},
			getFirstDayLastDate(year, month) {
				const firstDay = new Date(year, month - 1, 1).getDay(); // 이번 달 시작 요일
				const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
				let lastYear = year;
				let lastMonth = month - 1;
				if (month === 1) {
					lastMonth = 12;
					lastYear -= 1;
				}
				const prevLastDate = new Date(lastYear, lastMonth, 0).getDate(); // 지난 달 마지막 날짜
				return [firstDay, lastDate, prevLastDate];
			},
			getMonthOfDays(monthFirstDay, monthLastDate, prevMonthLastDate) {
				let day = 1;
				let prevDay = prevMonthLastDate - monthFirstDay + 1;
				const dates = [];
				let weekOfDays = [];
				while (day <= monthLastDate) {
					if (day === 1) {
						for (let j = 0; j < monthFirstDay; j += 1) {
							if (j === 0) this.lastMonthStart = prevDay;
							weekOfDays.push(prevDay);
							prevDay += 1;
						}
					}
					weekOfDays.push(day);
					if (weekOfDays.length === 7) {
						dates.push(weekOfDays);
						weekOfDays = [];
					}
					day += 1;
				}
				const len = weekOfDays.length;
				if (len > 0 && len < 7) {
					for (let k = 1; k <= 7 - len; k += 1) {
						weekOfDays.push(k);
					}
				}
				if (weekOfDays.length > 0) dates.push(weekOfDays);
				this.nextMonthStart = weekOfDays[0];
				return dates;
			},
		},
	};
</script>
