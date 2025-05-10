import { useApiMutation } from "@/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { baseAuthSchema } from "../../schema/base-auth.schema";
import { useForgotPasswordStore } from "../../store/forgot-password.store";

export const useForgotPassword = () => {
	const navigate = useNavigate();
	const { setData } = useForgotPasswordStore();
	const { mutate, isPending } = useApiMutation<void, { email: string }>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/authentication/request-password-reset-otp",
		successMsg: "OTP sent to your email",
		onSuccess: (_, variables) => {
			setData({ email: variables.email });
			navigate("/forgot-password/otp");
		},
	});

	const forgotPasswordSchema = baseAuthSchema.pick({
		email: true,
	});

	type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

	const ForgotPasswordForm = useForm<TForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onForgotPassword = (values: TForgotPasswordSchema) => {
		mutate(values);
	};

	return {
		ForgotPasswordForm,
		onForgotPassword,
		isSendingEmail: isPending,
	};
};
