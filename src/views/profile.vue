<template>
	<LayoutVue>
		<div class="bg__white">
			<div class="top__container">
				<h1 class="myinfo">내 정보</h1>
			</div>
			<div class="profile__img"></div>
			<div class="profile__container">
				<button class="upload__btn">
					<h1 class="upload__btn__text">프로필 사진 등록</h1>
				</button>
				<div class="profile__wrapper">
					<div class="profile__info__left">
						<label for="email" style="margin-bottom: 50px">이메일(아이디)</label>

						<label for="name" style="margin-bottom: 50px">이름</label>

						<label for="nickname" style="margin-bottom: 50px">닉네임</label>
					</div>
					<div class="profile__info__right">
						<h2 style="margin-bottom: 50px">abc@email.com</h2>
						<h2 style="margin-bottom: 50px">abc</h2>
						<h2 style="margin-bottom: 50px">abcchocolate</h2>
					</div>
				</div>
			</div>
			<button class="changecomplete__btn">
				<h1 class="changecomplete__btn__text">변경 완료</h1>
			</button>
		</div>
	</LayoutVue>
</template>

<style scoped>
	.bg__white {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.top__container {
		box-sizing: boder-box;
		display: flex;
		width: 100%;
		margin-bottom: 30px;
		font-size: 50px;
		font-weight: 600;
	}
	.usericon {
		width: 60px;
		height: 60px;
	}
	.profile__container {
		box-sizing: border-box;
		width: 607px;
		margin-bottom: 40px;
	}

	.profile__img {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		background: #3a3a3a;
	}
	.upload__btn {
		margin-bottom: 50px;
		margin-top: 30px;
		background: transparent;
		cursor: pointer;
		border: none;
	}
	.upload__btn__text {
		text-decoration: underline;
		font-size: 20px;
		font-weight: 600;
	}
	.profile__wrapper {
		display: grid;
		grid-template-columns: 239px 1fr;

		text-align: left;
		font-size: 30px;
		letter-spacing: -0.75px;
	}
	.profile__info__left {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #767676;
	}
	.profile__info__right {
		align-items: left;
	}
	.changecomplete__btn {
		background: black;
		border-radius: 10px;
		width: 200px;
		height: 60px;
		align-items: center;
		cursor: pointer;
	}
	.changecomplete__btn__text {
		font-size: 24px;
		font-weight: 600;
		color: white;
	}
	.pw__box {
		width: 368px;
		height: 50px;
		background: #f7f7f7 0% 0%;
		border: none;
		opacity: 1;
		font-size: 30px;
	}
</style>
<script>
	import LayoutVue from "../components/Layout.vue";
	export default {
		components: {
			LayoutVue,
		},
	};
</script>
