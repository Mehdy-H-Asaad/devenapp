import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { baseAuthSchema } from "../../schema/base-auth.schema";

export const useEmailVerification = () => {
	const navigate = useNavigate();
	const { data, mutate, isPending } = useApiMutation<void, { code: string }>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/authentication/verify-otp",
		successMsg: "Verified",
		onSuccess: () => {
			navigate("/");
		},
	});

	const emailVerificationSchema = baseAuthSchema.pick({
		code: true,
	});

	type TEmailVerificationSchema = z.infer<typeof emailVerificationSchema>;

	const EmailVerificationForm = useForm<TEmailVerificationSchema>({
		resolver: zodResolver(emailVerificationSchema),
		defaultValues: {
			code: "",
		},
	});

	console.log(data);

	const onEmailVerification = (values: TEmailVerificationSchema) => {
		mutate(values);
	};

	return { EmailVerificationForm, isVerifying: isPending, onEmailVerification };
};
