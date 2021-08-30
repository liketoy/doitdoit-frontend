import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/daily",
		name: "Daily",
		component: () => import("../views/Daily.vue"),
	},
	{
		path: "/monthly",
		name: "Monthly",
		component: () => import("../views/Calendar.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/LogIn.vue"),
	},
	{
		path: "/login/kakao",
		beforeEnter() {
			window.open("https://doitdoit-backend.herokuapp.com/api/v1/users/login/kakao", "_blank");
		},
	},
	{
		path: "/signin",
		name: "SignIn",
		component: () => import("../views/SignIn.vue"),
	},
	{
		path: "/profile",
		name: "Profile",
		component: () => import("../views/profile.vue"),
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
