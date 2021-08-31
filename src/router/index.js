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
		path: "/Monthly/:today",
		name: "Monthly",
		component: () => import("@/views/Daily.vue"),
		props: true,
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
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

// const Daily = {
// 	props: ["today"],
// 	template: "<p>Daily {{ today }}<p>",
// };

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
