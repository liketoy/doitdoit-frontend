<template>
	<div>
		<div class="fullscreen">
			<h1 class="title">Doit Doit</h1>
			<div class="signinbox__container">
				<h2 class="signinbox__title">회원가입</h2>
				<div class="signin__wrapper">
					<button class="signin__btn kakao">
						<img class="logo__img" src="../assets/kakao.png" />
						<p class="btn__text">카카오톡으로 회원가입</p>
					</button>

					<button class="signin__btn google">
						<img class="logo__img" src="../assets/google.png" />
						<p class="btn__text">Google로 회원가입</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.fullscreen {
		width: 100vw;
		height: 100vh;
		background: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 150px;
		color: #ffffff;
		margin-bottom: 50px;
	}
	.signinbox__container {
		background: #ffffff;
		box-sizing: border-box;
		width: 600px;
		border-radius: 8px;
		padding: 80px 116px 79px 116px;
	}
	.signinbox__title {
		font-weight: 600;
		font-size: 36px;
		text-align: left;
		margin-bottom: 20px;
	}
	.signin__wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.signin__btn {
		position: relative;
		width: 100%;
		height: 50px;
		border: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #fff;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.kakao {
		background: #f5dc00;
	}

	.google {
		background: #eb4f4d;
	}
	.logo__img {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 15px;
		left: 30px;
	}
	.btn__text {
		font-size: 16px;
		text-align: left;
		font-weight: 600;
	}
</style>
