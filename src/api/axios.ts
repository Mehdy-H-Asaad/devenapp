import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://deven-rho.vercel.app/",
	headers: {
		"Content-Type": "application/json",
	},
});
