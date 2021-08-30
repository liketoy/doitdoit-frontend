<template>
	<div class="toDoItem__container">
		<div class="toDoItem__checkbox">
			<input id="toDoItem__item" type="checkbox" :checked="todo.checked" @change="toggleCheckbox" />
			<label for="toDoItem__item"></label>
		</div>
		<div class="todoItem__context">
			<span :style="todo.checked ? 'text-decoration: line-through' : ''">
				{{ todo.text }}
			</span>
			<button class="todoItem__cancel" @click="clickDelete">
				<img src="@/assets/cancel.png" alt="cancel_button" />
			</button>
		</div>
	</div>
</template>

<style scoped>
	.toDoItem__container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
	}
	.toDoItem__container:not(:first-child) {
		margin-top: 20px;
	}
	.todoItem__context {
		border-bottom: 1px solid #191919;
	}
	.todoItem__context span {
		font-size: 30px;
	}
	.todoItem__cancel {
		border: none;
		background: none;
		cursor: pointer;
	}
	input[id="toDoItem__item"] {
		display: none;
	}
	input[id="toDoItem__item"] + label {
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 2px solid #121212;
		border-radius: 50%;
		cursor: pointer;
	}
	input[id="toDoItem__item"]:checked + label {
		background-color: #121212;
	}
</style>

<script>
	export default {
		name: "Todo",
		props: {
			todo: {
				type: Object,
				required: true,
			},
		},
		methods: {
			toggleCheckbox(e) {
				this.$emit("toggle-checkbox", {
					id: this.todo.id,
					checked: e.target.checked,
				});
			},
			clickDelete() {
				this.$emit("click-delete", this.todo.id);
			},
		},
	};
</script>
