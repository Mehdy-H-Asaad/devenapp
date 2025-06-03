import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { baseAuthSchema } from "../../schema/base-auth.schema";
import { useSignUpStore } from "../../store/signup.store";
import { TUser, TSignUp } from "../../types/auth.types";

export const usePersonalInfoSignUp = () => {
	const { queryClient, mutate, isPending } = useApiMutation<TUser, TSignUp>({
		axiosRequestMethod: "post",
		requestURL: "",
		successMsg: "",
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			navigate("/");
		},
	});
	const { data, setSignupData } = useSignUpStore();
	const navigate = useNavigate();

	const personalInfoSchema = baseAuthSchema.pick({
		address: true,
		phone: true,
	});

	type TPersonalInfoSchema = z.infer<typeof personalInfoSchema>;

	const PersonalInfoForm = useForm<TPersonalInfoSchema>({
		resolver: zodResolver(personalInfoSchema),
		defaultValues: {
			address: "",
			phone: "",
		},
	});

	const onPersonalInfoSubmit = (values: TPersonalInfoSchema) => {
		setSignupData({ ...data, ...values });
		mutate(data as TSignUp);
	};

	return {
		PersonalInfoForm,
		onPersonalInfoSubmit,
		isSigningUp: isPending,
	};
};
