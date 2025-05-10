import { useSignUpStore } from "../store/signup.store";

export const signupGuards = {
	"/signup": () => true,
	"/signup/step-2": () => {
		const { data } = useSignUpStore();
		return (
			!!data.email && !!data.firstname && !!data.lastname && !!data.password
		);
	},
};
