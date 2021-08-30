import axios from "axios";

// 요청을 쉽게할 수 있게 만들어야 하고, url을 복사붙이기를 하지 않도록 만들어야함
// post, get , delete, put 요청이 가능해야함
// jwt를 쉽게 보낼 수 있어야함

const callApi = async (method, path, data, jwt, params = {}) => {
	const headers = {
		Authorization: `Bearer ${jwt}`,
		"Content-Type": "application/json",
	};
	const baseUrl = "https://doitdoit-backend.herokuapp.com/api/v1";
	const fullUrl = `${baseUrl}${path}`;
	if (method === "get" || method === "delete") {
		return axios[method](fullUrl, { headers, params });
	} else {
		return axios[method](fullUrl, data, { headers });
	}
};

export default {
	kakaoLogin: () => callApi("get", "/login/kakao/callback/"),
};
