<template>
	<layout-vue>
		<div id="right">
			<div id="user" class="position" style="cursor: pointer" onclick="location.href='#';"><a href="#"></a></div>
			<div id="add" class="position" style="cursor: pointer" onclick="location.href='#';"><a href="#"></a></div>
			<div class="calendar">
				<div class="year-month position"></div>
				<div class="nav">
					<div class="left position" style="cursor: pointer" onclick="prevMonth()"></div>
					<div class="right position" style="cursor: pointer" onclick="nextMonth()"></div>
				</div>
				<div class="main">
					<div class="position days">
						<div class="day">SUN</div>
						<div class="day">MON</div>
						<div class="day">TUE</div>
						<div class="day">WEN</div>
						<div class="day">THU</div>
						<div class="day">FRI</div>
						<div class="day">SAT</div>
					</div>
					<div class="position dates"></div>
				</div>
			</div>
		</div>
	</layout-vue>
</template>

<style>
	.position {
		position: absolute;
	}
	.dates {
		width: 1036px;
		top: 426px;
		left: 733px;
		display: flex;
		flex-flow: row wrap;
		/* height: 500px; */
		/* background-color: bisque; */
	}

	.year-month {
		top: 200px;
		left: 1120px;
		font-size: 30px;
	}

	#right {
		float: right;
		top: 0px;
		left: 500px;
		width: 75%;
		height: 100%;
		background: #f7f7f7 0% 0% no-repeat padding-box;
		opacity: 1;
	}

	#user {
		top: 45px;
		left: 1720px;
		width: 60px;
		height: 60px;
		background: transparent url("../assets/user2.png") 0% 0% no-repeat padding-box;
		opacity: 1;
	}

	#add {
		top: 196px;
		left: 1680px;
		width: 40px;
		height: 40px;
		background: transparent url("../assets/add.png") 0% 0% no-repeat padding-box;
		outline: 1;
	}

	.days {
		top: 307px;
		left: 686px;
		letter-spacing: 0px;
		color: #121212;
		opacity: 1;
	}

	.days div {
		list-style-type: none;
		float: left;
		width: 118px;
		height: 69px;
		margin: 15px;
		font-size: 50px;
		text-align: center;
		font: normal normal bold 50px/69px S-Core Dream 6;
	}

	.left {
		top: 201px;
		left: 1096px;
		width: 30px;
		height: 30px;
		background: transparent url("../assets/left.png") 0% 0% no-repeat padding-box;
		opacity: 1;
	}

	.right {
		top: 201px;
		left: 1281px;
		width: 30px;
		height: 30px;
		background: transparent url("../assets/right.png") 0% 0% no-repeat padding-box;
		opacity: 1;
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
			// 데이터에 접근이 가능한 첫 번째 라이프 사이클
			const date = new Date();
			this.currentYear = date.getFullYear(); // 이하 현재 년, 월 가지고 있기
			this.currentMonth = date.getMonth() + 1;
			this.year = this.currentYear;
			this.month = this.currentMonth;
			this.today = date.getDate(); // 오늘 날짜
			this.calendarData();
		},
		methods: {
			calendarData(arg) {
				// 인자를 추가
				if (arg < 0) {
					// -1이 들어오면 지난 달 달력으로 이동
					this.month -= 1;
				} else if (arg === 1) {
					// 1이 들어오면 다음 달 달력으로 이동
					this.month += 1;
				}
				if (this.month === 0) {
					// 작년 12월
					this.year -= 1;
					this.month = 12;
				} else if (this.month > 12) {
					// 내년 1월
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
						// 1일이 어느 요일인지에 따라 테이블에 그리기 위한 지난 셀의 날짜들을 구할 필요가 있다.
						for (let j = 0; j < monthFirstDay; j += 1) {
							if (j === 0) this.lastMonthStart = prevDay; // 지난 달에서 제일 작은 날짜
							weekOfDays.push(prevDay);
							prevDay += 1;
						}
					}
					weekOfDays.push(day);
					if (weekOfDays.length === 7) {
						// 일주일 채우면
						dates.push(weekOfDays);
						weekOfDays = []; // 초기화
					}
					day += 1;
				}
				const len = weekOfDays.length;
				if (len > 0 && len < 7) {
					for (let k = 1; k <= 7 - len; k += 1) {
						weekOfDays.push(k);
					}
				}
				if (weekOfDays.length > 0) dates.push(weekOfDays); // 남은 날짜 추가
				this.nextMonthStart = weekOfDays[0]; // 이번 달 마지막 주에서 제일 작은 날짜
				return dates;
			},
		},

		// year-month 채우기
		// document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

		// Dates 기본 배열들
		// const prevDates = [];
		// const thisDates = [...Array(TLDate + 1).keys()].slice(1);
		// const nextDates = [];
	};
</script>
