import { customStepStore } from "@/utils/customStepStore";

type TResetPasswordDTO = {
	newPassword: string;
	confirmNewPassword: string;
};

export const useResetPasswordStore = customStepStore<TResetPasswordDTO>({
	confirmNewPassword: "",
	newPassword: "",
});
