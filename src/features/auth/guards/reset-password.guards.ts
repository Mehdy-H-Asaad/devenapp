import { useForgotPasswordStore } from "../store/forgot-password.store";

export const resetPasswordGuards = {
	"/forgot-password": () => true,
	"/reset-password": () => {
		const { data } = useForgotPasswordStore();
		return !!data.email;
	},
};
