<template>
	<div class="black-bg" v-if="modal == true">
		<div class="white-bg">
			<div class="modal">
				<h1>TO DO</h1>
				<button class="modal__cancel" @click="onEmit">
					<img src="@/assets/cancel.png" alt="cancel_button" />
				</button>
			</div>
			<div class="modal__item">
				<div class="modal__text">
					<p class="modal__title">할 일</p>
					<input v-model="todoText" class="input__todo" type="text" placeholder="할 일을 입력해주세요." />
				</div>
				<div class="modal__date">
					<p class="modal__title">날짜</p>
					<input class="modal__year" type="text" :placeholder="year" />
					<input class="modal__month" type="text" :placeholder="month" />
					<input class="modal__day" type="text" :placeholder="today" />
				</div>
			</div>
			<button class="modal__add" @click="addTodo">생성 완료</button>
		</div>
	</div>
</template>

<style scoped>
	.black-bg {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		padding: 20px;
		z-index: 999;
		left: 0;
		top: 0;
	}
	.white-bg {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 600px;
		height: 372px;
		position: fixed;
		background: #ffffff;
		top: 10%;
		left: 50%;
	}
	.modal {
		width: 100%;
	}
	.modal__cancel {
		border: none;
		background: none;
		cursor: pointer;
		float: right;
		margin-right: 10px;
	}
	.modal h1 {
		font-size: 24px;
		font-weight: 600;
		display: inline-block;
	}
	.modal__text {
		width: 100%;
		display: flex;
		margin-bottom: 50px;
	}
	.modal__title {
		font-size: 20px;
		font-weight: 500;
		flex-shrink: 0;
		flex-basis: 120px;
		align-self: center;
	}
	.input__todo {
		width: 474px;
		background-color: #dbdbdb;
		font-size: 20px;
		font-weight: 500;
		color: #121212;
		border: none;
		padding: 10px;
	}
	.input__todo::placeholder {
		font-size: 20px;
		font-weight: 500;
		color: #121212;
	}
	.modal__date {
		width: 100%;
		display: flex;
	}
	.modal__year {
		width: 74px;
		border: none;
		background-color: #dbdbdb;
		font-size: 20px;
		font-weight: 500;
		color: #121212;
		margin-right: 20px;
		text-align: center;
		padding: 5px;
	}
	.modal__year::placeholder {
		font-size: 20px;
		font-weight: 500;
		color: #121212;
	}
	.modal__month {
		width: 49px;
		border: none;
		background-color: #dbdbdb;
		font-size: 20px;
		font-weight: 500;
		color: #121212;
		margin-right: 20px;
		text-align: center;
		padding: 5px;
	}
	.modal__month::placeholder {
		font-size: 20px;
		font-weight: 500;
		color: #121212;
	}
	.modal__day {
		width: 49px;
		border: none;
		background-color: #dbdbdb;
		font-size: 20px;
		font-weight: 500;
		color: #121212;
		text-align: center;
		padding: 5px;
	}
	.modal__day::placeholder {
		font-size: 20px;
		font-weight: 500;
		color: #121212;
	}
	.modal__add {
		width: 200px;
		height: 60px;
		border-radius: 10px;
		font-size: 24px;
		font-weight: 600;
		color: #ffffff;
		background: #121212;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "Modal",
		props: ["modal"],
		data() {
			return {
				todoText: "",
			};
		},
		computed: {
			...mapState(["year", "month", "today"]),
		},
		methods: {
			onEmit() {
				this.$emit("setModal");
			},
			addTodo() {
				this.todos.push({
					id: Math.random(),
					text: this.todoText,
					checked: false,
				});
				this.todoText = "";
			},
		},
	};
</script>
