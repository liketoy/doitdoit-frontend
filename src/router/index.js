import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Calendar",
		component: () => import(/* webpackChunkName: "daily" */ "../views/Calendar.vue"),
	},
	{
		path: "/Daily",
		name: "Daily",
		component: () => import(/* webpackChunkName: "daily" */ "../views/Daily.vue"),
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
