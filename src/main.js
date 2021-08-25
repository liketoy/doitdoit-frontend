import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import GAuth from "vue-google-oauth2";
const gauthOption = {
	clientId: "CLIENT_ID.apps.googleusercontent.com",
	scope: "profile email",
	prompt: "select_account",
};
Vue.use(GAuth, gauthOption);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
