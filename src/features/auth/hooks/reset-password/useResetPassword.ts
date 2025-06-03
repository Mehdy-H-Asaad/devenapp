import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useNavigate } from "react-router-dom";
import { baseAuthSchema } from "../../schema/base-auth.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TResetPasswordDTO } from "../../types/auth.types";
import { useForgotPasswordStore } from "../../store/forgot-password.store";

export const useResetPassword = () => {
	const navigate = useNavigate();
	const { data } = useForgotPasswordStore();
	const { mutate, isPending } = useApiMutation<void, TResetPasswordDTO>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/authentication/reset-password",
		successMsg: "Password Updated",
		queryKey: ["password"],
		onSuccess: () => {
			navigate("/");
		},
	});

	const resetPasswordSchema = baseAuthSchema
		.pick({
			password: true,
			confirm_password: true,
		})
		.refine(data => data.password == data.confirm_password, {
			message: "Password does not match",
			path: ["confirm_password"],
		});

	type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

	const ResetPasswordForm = useForm<TResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			confirm_password: "",
			password: "",
		},
	});

	const onResetPassword = (values: TResetPasswordSchema) => {
		mutate({ ...values, email: data.email });
	};

	return { ResetPasswordForm, onResetPassword, isVerifying: isPending };
};
