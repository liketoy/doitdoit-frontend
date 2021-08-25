<template>
	<layout-vue>
		<div class="black-bg" v-if="modal == true">
			<div class="white-bg">
				<div class="modal">
					<h1>To Do</h1>
					<button class="modal__cancel" @click="modal = false">
						<img src="@/assets/cancel.png" alt="cancel_button" />
					</button>
				</div>
				<div class="modal__text">
					<p class="modal__title">할일</p>
					<input v-model="todoText" class="input__todo" type="text" placeholder="할 일을 입력해주세요." />
				</div>
				<div>
					<p class="modal__date">날짜</p>
					<input class="modal__year" type="number" placeholder="2021" />
					<input class="modal__month" type="number" placeholder="08" />
					<input class="modal__day" type="number" placeholder="01" />
				</div>
				<button class="modal__add" @click="addTodo">생성 완료</button>
			</div>
		</div>
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
	.modal__cancel {
		border: none;
		background: none;
		cursor: pointer;
	}
	.input__todo {
		background-color: #767676;
		color: #121212;
		border: none;
		text-align: center;
		padding: 5px;
	}
	.input__todo::placeholder {
		color: #121212;
	}
	.modal__year {
		width: 54px;
		border: none;
		background-color: #767676;
		color: #121212;
		margin-right: 20px;
		text-align: center;
		padding: 5px;
	}
	.modal__year::placeholder {
		color: #121212;
	}
	.modal__month {
		width: 49px;
		border: none;
		background-color: #767676;
		color: #121212;
		margin-right: 20px;
		text-align: center;
		padding: 5px;
	}
	.modal__month::placeholder {
		color: #121212;
	}
	.modal__day {
		width: 49px;
		border: none;
		background-color: #767676;
		color: #121212;
		text-align: center;
		padding: 5px;
	}
	.modal__day::placeholder {
		color: #121212;
	}
	.modal__add {
		width: 200px;
		height: 60px;
		border-radius: 10px;
		font-size: 24px;
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
	import LayoutVue from "../components/Layout.vue";
	import TodoVue from "../components/Todo.vue";

	export default {
		name: "Daily",
		components: {
			LayoutVue,
			TodoVue,
		},
		data() {
			return {
				todoText: "",
				todos: [],
				modal: false,
			};
		},
		methods: {
			deleteTodo(id) {
				const index = this.todos.findIndex(todo => {
					return todo.id === id;
				});
				this.todos.splice(index, 1);
			},
			addTodo() {
				this.todos.push({
					id: Math.random(),
					text: this.todoText,
					checked: false,
				});
				this.todoText = "";
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
