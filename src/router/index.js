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
		component: () => import("../views/Monthly.vue"),
		props: true,
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/LogIn.vue"),
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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
