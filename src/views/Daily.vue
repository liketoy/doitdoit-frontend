<template>
	<layout-vue>
		<div class="slot__date">
			<button class="day" @click="SET_PREVIOUS_DAY">
				<img src="@/assets/previous.png" alt="previous_button" />
			</button>
			<p>{{ month }}월 {{ today }}일</p>
			<button class="day" @click="SET_NEXT_DAY">
				<img src="@/assets/next.png" alt="next_button" />
			</button>
		</div>
		<ModalVue :modal="modal" @setModal="modal = !modal" />
		<div class="toDoList__container">
			<div class="toDoList__top">
				<p class="toDoList__title">To Do List</p>
				<button class="toDoList__btn" type="button" @click="modal = true">
					<img src="@/assets/add.png" alt="add_button" />
				</button>
			</div>
			<div class="toDoList__list">
				<TodoVue
					v-for="todo in todos"
					:key="todo.id"
					:todo="todo"
					@toggle-checkbox="toggleCheckbox"
					@click-delete="deleteTodo"
				/>
			</div>
		</div>
	</layout-vue>
</template>

<style scoped>
	.day {
		border: none;
		background: none;
		cursor: pointer;
	}
	.slot__date {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 30%;
		margin-bottom: 50px;
		margin-top: -40px;
	}
	.slot__date p {
		font-size: 40px;
		font-weight: 600;
	}
	.black-bg {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		padding: 20px;
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
	.toDoList__container {
		width: 500px;
	}
	.toDoList__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.toDoList__title {
		font-size: 40px;
		font-weight: 600;
		text-align: left;
	}
	.toDoList__btn {
		border: none;
		background: none;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
	.toDoList__btn img {
		width: 100%;
	}
</style>

<script>
	import { mapState, mapMutations } from "vuex";
	import LayoutVue from "../components/Layout.vue";
	import TodoVue from "../components/Todo.vue";
	import ModalVue from "../components/Modal.vue";

	export default {
		name: "Daily",
		components: {
			LayoutVue,
			TodoVue,
			ModalVue,
		},
		computed: {
			...mapState(["year", "month", "today"]),
		},
		data: function () {
			return {
				modal: false,
				todos: [],
			};
		},
		methods: {
			...mapMutations(["SET_NEXT_DAY", "SET_PREVIOUS_DAY"]),
			deleteTodo(id) {
				const index = this.todos.findIndex(todo => {
					return todo.id === id;
				});
				this.todos.splice(index, 1);
			},
			toggleCheckbox({ id, checked }) {
				const index = this.todos.findIndex(todo => {
					return todo.id === id;
				});
				this.todos[index].checked = checked;
			},
		},
	};
</script>
