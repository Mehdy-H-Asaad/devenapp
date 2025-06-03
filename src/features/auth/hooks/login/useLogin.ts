import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useNavigate } from "react-router-dom";
import { baseAuthSchema } from "../../schema/base-auth.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUser } from "../../types/auth.types";
import { useEffect } from "react";

export const useLogin = () => {
	const navigate = useNavigate();
	const { isPending, queryClient, mutate, data } = useApiMutation<
		TUser,
		TLoginSchema
	>({
		axiosRequestMethod: "post",
		requestURL: "api/v1/authentication/login",
		successMsg: "Welcome back",
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			navigate("/");
		},
		queryKey: ["user"],
	});

	const loginSchema = baseAuthSchema.pick({
		email: true,
		password: true,
	});

	useEffect(() => {
		if (data) {
			localStorage.setItem("token", data.access_token);
		}
	}, [data]);

	console.log(data);

	type TLoginSchema = z.infer<typeof loginSchema>;

	const LoginForm = useForm<TLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onLogin = (values: TLoginSchema) => {
		mutate(values);
	};

	return {
		isLogginIn: isPending,
		onLogin,
		LoginForm,
	};
};
