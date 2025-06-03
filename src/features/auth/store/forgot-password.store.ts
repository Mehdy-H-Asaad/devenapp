import { useCustomStore } from "@/shared/hooks/useCustomStore";

type TForgotPasswordStore = {
	email: string;
	code: string;
};

export const useForgotPasswordStore = useCustomStore<TForgotPasswordStore>({
	email: "",
	code: "",
});
