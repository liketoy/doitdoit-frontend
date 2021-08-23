<template>
	<layout-vue>
		<div class="black-bg" v-if="modal == true">
			<div class="white-bg">
				<div>
					<h1>To Do</h1>
					<button @click="modal = false">X</button>
				</div>
				<div>
					<label>할일</label>
					<input
						v-model="todoText"
						class="input__todo"
						style="text-align: left; position: absolute; width: 474px; height: 50px"
						type="text"
						placeholder="할 일을 입력해주세요."
					/>
				</div>
				<div>
					<label>날짜</label>
					<input style="top: 339px; left: 1042px; width: 74px; height: 50px" type="number" placeholder="2021" />
					<input style="top: 339px; left: 1126px; width: 49px; height: 50px" type="number" placeholder="08" />
					<input style="top: 339px; left: 1185px; width: 49px; height: 50px" type="number" placeholder="01" />
				</div>
				<button @click="addTodo">생성 완료</button>
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
	.toDoList__container {
		width: 500px;
	}
	.toDoList__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
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
