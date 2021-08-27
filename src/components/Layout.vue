<template>
	<div class="container">
		<div class="side__menu" v-show="!navVisible">
			<div class="menu__icon" @click="showNav">
				<img src="@/assets/hamburger.png" alt="hamburgerIcon" />
			</div>
			<div class="today__info">
				<h2>{{ today }}</h2>
				<h3>{{ weekDay }}</h3>
			</div>
		</div>
		<div class="side__menu" v-show="navVisible">
			<div class="menu__arrow" @click="hideNav">
				<img src="@/assets/right-arrow.png" alt="right-arrow" />
			</div>
			<div class="menu__nav">
				<router-link :to="{ name: 'Daily' }">Daily</router-link>
				<router-link :to="{ name: 'Monthly' }">Monthly</router-link>
				<router-link :to="{ name: 'Challenge' }">Challenge</router-link>
				<router-link :to="{ name: 'Badge' }">Badge</router-link>
			</div>
		</div>
		<div class="slot__container">
			<div class="slot__header">
				<p>{{ year }}</p>
				<div><img src="@/assets/user_default.png" alt="user" /></div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: 1fr 3fr;
		width: 100vw;
		height: 100vh;
	}
	.side__menu {
		display: flex;
		color: #ffffff;
		flex-direction: column;
		background: #121212;
		padding: 50px 25px;
	}
	.menu__icon {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
	.menu__icon img {
		width: 100%;
	}
	.menu__arrow {
		width: 30px;
		height: 30px;
		align-self: flex-end;
		cursor: pointer;
		margin-bottom: 60px;
	}
	.menu__arrow img {
		width: 100%;
	}
	.today__info {
		align-self: flex-end;
		margin-right: 35px;
	}
	.today__info h2 {
		font-size: 150px;
	}
	.today__info h3 {
		font-size: 40px;
	}
	.menu__nav {
		color: #ffffff;
		font-size: 30px;
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: flex-start;
		margin-left: 100px;
	}
	.slot__container {
		background-color: #ffffff;
		padding: 45px 140px 45px 50px;
	}
	.slot__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 102px;
	}
	.slot__header p {
		font-size: 40px;
		font-weight: 600;
		border-bottom: 1px solid #191919;
	}
	.slot__header div {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
	.slot__header div img {
		width: 100%;
	}
</style>

<script>
	import { mapState } from "vuex";

	export default {
		name: "Layout",
		data: function () {
			return {
				navVisible: false,
			};
		},
		computed: {
			...mapState(["year", "today", "weekDay"]),
		},
		methods: {
			showNav: function () {
				this.navVisible = true;
			},
			hideNav: function () {
				this.navVisible = false;
			},
		},
	};
</script>
