<template>
	<div class="toDoItem__container">
		<div class="toDoItem__checkbox">
			<input type="checkbox" :checked="todo.checked" @change="toggleCheckbox" />
		</div>
		<div class="todoItem__context">
			<span :class="todo.checked ? 'text-muted' : ''">
				{{ todo.text }}
			</span>
			<button @click="clickDelete">X</button>
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
		margin-top: 40px;
	}
	.todoItem__context {
		border-bottom: 1px solid #191919;
	}
	.todoItem__context span {
		font-size: 30px;
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
