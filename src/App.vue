<template>
	<div class="fullscreen">
		<div class="userimg">
			<div class="usericon">
				<img src="./assets/user2.png" />
			</div>
		</div>
		<div class="topcontents">
			<div class="title">Doit Doit</div>
		</div>

		<div class="loginbox1">
			<div class="loginbox2">
				<div id="login">로그인</div>
				<button id="KB" @click="kakaoLogin()">
					<div id="ki"><img src="./assets/kakao.png" style="width: 20px; height: 20px" /></div>
					<div id="kw">카카오톡으로 로그인</div>
				</button>
				<button id="NB">
					<div id="ni">N</div>
					<div id="nw">네이버로 로그인</div>
				</button>
				<button id="GB">
					<div id="gi"><img src="./assets/google.png" style="width: 20px; height: 20px" /></div>
					<div id="gw">Google로 로그인</div>
				</button>
				<button id="finding">아이디·비밀번호 찾기</button>
				<div class="g-signin2" data-onsuccess="onSignIn"></div>
				<button @click="signout" align="left">signout</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},

		mounted() {
			window.gapi.signin2.render("my-signin2", {
				scope: "profile email",
				width: 368,
				height: 50,
				longtitle: true,
				theme: "dark",
				onsuccess: this.onSuccess,
				onfailure: this.onFailure,
			});
		},

		methods: {
			signout() {
				const authInst = window.gapi.auth2.getAuthInstance();
				authInst.signOut().then(() => {
					//eslint-disable-next-line
					console.log('user signed out');
				});
			},
		},
	};
</script>

<style>
	.topcontents {
		height: 181px;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 50px;
	}
	.fullscreen {
		width: 100vw;
		height: 100vh;
		background: #121212 0% 0% no-repeat padding-box;
		border: 1px solid #707070;
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title {
		width: 576px;
		height: 181px;
		text-align: center;
		font: normal normal normal 138px/181px Roboto;
		letter-spacing: 0px;
		color: #ffffff;
		opacity: 1;
	}
	.userimg {
		height: 60px;
		width: 100vw;
		opacity: 1;
		border: none;
		padding-bottom: 120px;
	}
	.usericon {
		padding-left: 1720px;
	}

	.loginbox1 {
		top: 456px;
		left: 660px;
		width: 600px;
		height: 399px;

		background: #ffffff 0% 0% no-repeat padding-box;
		box-shadow: 1px 1px 2px #00000029;
		border-radius: 8px;
		opacity: 1;
	}
	.loginbox2 {
		padding-top: 62px;
		top: 518px;
		left: 776px;
		width: 368px;
		height: 276px;
		opacity: 1;
		margin-left: 116px;
	}
	#login {
		width: 102px;
		height: 50px;
		text-align: left;
		font: normal normal bold 36px/50px S-Core Dream 6;
		letter-spacing: -0.9px;
		color: #000000;
		opacity: 1;
	}
	button {
		cursor: pointer;
	}
	#KB {
		width: 368px;
		height: 50px;
		background: #f5dc00 0% 0% no-repeat padding-box;
		opacity: 1;
		border: 0px;
		padding: 0px;
		display: grid;
		grid-template-columns: 50px 1fr;
	}
	#ki {
		width: 20px;
		height: 20px;
		top: 603px;
		left: 806px;
		opacity: 1;
		padding-left: 30px;
		padding-top: 15px;
	}
	#kw {
		top: 604px;
		left: 899px;
		width: 122px;
		height: 19px;
		text-align: left;
		font: normal normal bold 14px/19px S-Core Dream 6;
		letter-spacing: -0.35px;
		color: #ffffff;
		opacity: 1;
		padding-left: 73px;
		padding-top: 15px;
	}
	#NB {
		width: 368px;
		height: 50px;
		background: #00cf00 0% 0% no-repeat padding-box;
		opacity: 1;
		margin-top: 10px;
		margin-bottom: 10px;
		border: 0px;
		padding: 0px;
		display: grid;
		grid-template-columns: 50px 1fr;
	}

	#ni {
		top: 656px;
		left: 806px;
		width: 20px;
		height: 34px;
		text-align: left;
		font: normal normal bold 28px/34px Roboto;
		letter-spacing: -0.7px;
		color: #ffffff;
		opacity: 1;
		padding-left: 30px;
		padding-top: 8px;
	}
	#nw {
		top: 664px;
		left: 912px;
		width: 96px;
		height: 19px;
		text-align: left;
		font: normal normal bold 14px/19px S-Core Dream 6;
		letter-spacing: -0.35px;
		color: #ffffff;
		opacity: 1;
		padding-left: 86px;
		padding-top: 15px;
	}

	#GB {
		width: 368px;
		height: 50px;
		background: #eb4f4d 0% 0% no-repeat padding-box;
		opacity: 1;
		border: 0px;
		margin-bottom: 16px;
		padding: 0px;
		display: grid;
		grid-template-columns: 50px 1fr;
	}
	#gi {
		width: 20px;
		height: 20px;
		top: 603px;
		left: 806px;
		opacity: 1;
		padding-left: 30px;
		padding-top: 15px;
	}
	#gw {
		top: 724px;
		left: 910px;
		width: 101px;
		height: 19px;
		text-align: left;
		letter-spacing: -0.35px;
		color: #ffffff;
		opacity: 1;
		padding-left: 84px;
		padding-top: 15px;
	}
	#finding {
		border: 0px;
		background: transparent;
		width: 122px;
		height: 16px;
		text-align: left;
		padding: 0px;
		letter-spacing: -0.3px;
		color: #767676;
		opacity: 1;
	}

	@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

	.notosanskr * {
		font-family: "Noto Sans KR", sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #191919;
	}

	/* reset.css */
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1.5;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
