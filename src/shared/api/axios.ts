import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://deven-rho.vercel.app/",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);
