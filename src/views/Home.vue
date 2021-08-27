<template>
	<div class="home">
		<h1 class="home__title">Doit Doit</h1>
		<div class="card__container">
			<router-link to="/daily" class="card__wrapper">
				<span>Daily</span>
			</router-link>
			<router-link to="/monthly" class="card__wrapper">
				<span>Monthly</span>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	.home {
		width: 100vw;
		height: 100vh;
		background: #121212;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 108px;
	}
	.home__title {
		font-size: 150px;
		color: #fff;
	}
	.card__container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
	.card__wrapper {
		display: block;
		width: 200px;
		padding: 116px 180px;
		background: linear-gradient(122deg, #ff6d65 0%, #91cce8 100%);
		border-radius: 8px;
	}
	.card__wrapper span {
		color: #fff;
		font-size: 50px;
	}
</style>

<script>
	// @ is an alias to /src

	export default {
		name: "Home",
		components: {},
	};
</script>
