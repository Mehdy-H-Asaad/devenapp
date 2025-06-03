import { baseAuthSchema } from "../../schema/base-auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TUser, TSignUp } from "../../types/auth.types";
import { useSignUpStore } from "../../store/signup.store";

export const useBasicInfoSignUp = () => {
	const navigate = useNavigate();
	const { setSignupData, data } = useSignUpStore();
	const {
		data: SignupData,
		queryClient,
		mutate,
		isPending,
	} = useApiMutation<TUser, TSignUp>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/authentication/signup",
		successMsg: "Welcome to Deven",
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			setSignupData({ ...variables });
			navigate("/signup/step-2");
		},
	});

	const basicInfoSchema = baseAuthSchema.pick({
		firstname: true,
		lastname: true,
		email: true,
		password: true,
	});

	type TBasicInfoSchema = z.infer<typeof basicInfoSchema>;

	const BasicInfoForm = useForm<TBasicInfoSchema>({
		resolver: zodResolver(basicInfoSchema),
		defaultValues: {
			email: "",
			firstname: "",
			lastname: "",
			password: "",
		},
	});

	const onBasicInfoSubmit = (values: TBasicInfoSchema) => {
		mutate(values);
	};

	console.log(data);
	console.log(SignupData);

	return {
		BasicInfoForm,
		onBasicInfoSubmit,
		isSigningUp: isPending,
	};
};
