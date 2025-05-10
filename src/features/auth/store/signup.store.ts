import { create } from "zustand";
import { TSignUp } from "../types/auth.types";

type TSignUpStore = {
	data: Partial<TSignUp>;
	admin: string | null;
	setAdmin: (admin: string | null) => void;
	setSignupData: (values: Partial<TSignUp>) => void;
	resetSignupData: () => void;
};

export const useSignUpStore = create<TSignUpStore>(set => {
	const accessToken = localStorage.getItem("accessToken");
	return {
		data: {
			email: "",
			password: "",
			firstname: "",
			lastname: "",
		},
		admin: accessToken || null,
		setAdmin: (admin: string | null) => set({ admin }),
		setSignupData: values =>
			set(state => ({ data: { ...state.data, ...values } })),
		resetSignupData: () =>
			set({
				data: {
					email: "",
					password: "",
					firstname: "",
					lastname: "",
				},
			}),
	};
});
