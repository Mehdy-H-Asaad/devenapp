import { useApiMutation } from "@/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { baseAuthSchema } from "../../schema/base-auth.schema";
import { useNavigate } from "react-router-dom";

export const useForgotPasswordVerification = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useApiMutation<void, { code: string }>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/authentication/verify-otp",
		successMsg: "Verified",
		onSuccess: () => {
			navigate("/reset-password");
		},
	});

	const forgotPasswordVerificationSchema = baseAuthSchema.pick({ code: true });

	type TForgotPasswordVerificationSchema = z.infer<
		typeof forgotPasswordVerificationSchema
	>;

	const ForgotPasswordVerificationForm =
		useForm<TForgotPasswordVerificationSchema>({
			resolver: zodResolver(forgotPasswordVerificationSchema),
			defaultValues: {
				code: "",
			},
		});

	const onForgotPasswordVerification = (
		values: TForgotPasswordVerificationSchema
	) => {
		mutate(values);
	};

	return {
		onForgotPasswordVerification,
		ForgotPasswordVerificationForm,
		isVerifying: isPending,
	};
};
