<template>
	<div id="web">
		<div class="black-bg" v-if="modal == true">
			<div class="white-bg">
				<div>
					<h1>To Do</h1>
					<button style="float: right" @click="modal = false">X</button>
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

		<div id="app" class="container">
			<p id="title">To Do List</p>
			<button type="button" id="plus" @click="modal = true">
				<img src="./assets/add.png" />
			</button>
			<TodoVue
				id="daliy"
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@toggle-checkbox="toggleCheckbox"
				@click-delete="deleteTodo"
			/>
		</div>
	</div>
</template>

<script>
	import TodoVue from "./views/Todo.vue";

	export default {
		components: {
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

<style scoped>
	.white-bg > div {
		display: flex;
		justify-content: center;
		padding-bottom: 7px;
		align-items: center;
	}
	label {
		flex: 1;
		text-align: left;
	}
	#title {
		width: 190px;
		height: 56px;
		float: left;
		font-family: "Dream6";
		font-weight: 40px;
		font-size: 36px;
		color: #121212;
	}
	div {
		box-sizing: border-box;
	}
	.black-bg {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		padding: 20px;
		z-index: 1000;
	}
	.white-bg {
		position: fixed;
		width: 700px;
		height: 472px;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: white;
		padding: 70px;
	}

	#web {
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
	}
	#app {
		position: fixed;
		top: 251px;
		left: 400px;
		width: 480px;
		height: 280px;
		text-align: left;
		font: normal normal medium 30px/42px S-Core Dream 5;
		letter-spacing: 0px;
		color: #121212;
		opacity: 1;
	}
	#plus {
		border: none;
	}

	@font-face {
		font-family: "Dream6";
		src: url("./assets/SCDream6.otf");
	}
</style>
