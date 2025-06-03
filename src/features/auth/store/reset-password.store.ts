import { customStepStore } from "@/shared/hooks/useCustomStore";

type TResetPasswordDTO = {
	newPassword: string;
	confirmNewPassword: string;
};

export const useResetPasswordStore = customStepStore<TResetPasswordDTO>({
	confirmNewPassword: "",
	newPassword: "",
});
