<template>
	<div>
		<div class="fullscreen">
			<h1 class="title">Doit Doit</h1>
			<div class="loginbox__container">
				<h2 class="loginbox__title">로그인</h2>
				<div class="loginbox__wrapper">
					<button class="loginbox__btn kakako">
						<img class="logo__img" src="@/assets/kakao.png" />
						<p class="btn__text">카카오톡으로 로그인</p>
					</button>
					<button class="loginbox__btn naver">
						<div class="logo__img" style="font-size: 20px; font-weight: 600">N</div>
						<p class="btn__text">네이버로 로그인</p>
					</button>
					<button class="loginbox__btn google">
						<img class="logo__img" src="@/assets/google.png" />
						<p class="btn__text">Google로 로그인</p>
					</button>
					<div class="letter__btns">
						<button class="letter__btn">아이디 비밀번호찾기</button>
						<button class="letter__btn" @click="$router.push({ name: 'SignIn' })">회원가입</button>
					</div>
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
		color: #fff;
		font-size: 150px;
		margin-bottom: 50px;
	}
	.loginbox__container {
		box-sizing: border-box;
		background: #fff;
		border-radius: 8px;
		padding: 60px 116px;
		width: 600px;
	}
	.loginbox__title {
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 20px;
		text-align: left;
	}
	.loginbox__wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.loginbox__btn {
		cursor: pointer;
		width: 100%;
		height: 50px;
		border: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #fff;
		position: relative;
		margin-bottom: 10px;
	}
	.kakako {
		background: #f5dc00;
	}
	.naver {
		background: #00cf00;
	}
	.google {
		background: #eb4f4d;
	}
	.logo__img {
		position: absolute;
		left: 30px;
		width: 20px;
		height: 20px;
	}
	.btn__text {
		font-size: 16px;
		font-weight: 600;
	}
	.letter__btns {
		width: 100%;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	.letter__btn {
		padding: 0;
		cursor: pointer;
		align-self: flex-end;
		font-size: 12px;
		border: none;
		background: transparent;
	}
</style>

<script>
	export default {
		name: "LogIn",
		methods: {},
	};
</script>
