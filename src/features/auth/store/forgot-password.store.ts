import { createCustomStore } from "@/utils/customStepStore";

type TForgotPasswordStore = {
	email: string;
	code: string;
};

export const useForgotPasswordStore = createCustomStore<TForgotPasswordStore>({
	email: "",
	code: "",
});
