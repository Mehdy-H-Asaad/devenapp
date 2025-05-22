import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TShiftDTO, TCreateShiftDTO } from "../index";
import { SHIFTS } from "../../index";
import { shiftSchema } from "../index";

export const useCreateShift = () => {
	const { mutate, isPending: isCreatingShift } = useApiMutation<
		TShiftDTO,
		TCreateShiftDTO
	>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/shift/",
		successMsg: "Shift created successfully",
		queryKey: [SHIFTS],
		onSuccess: () => CreateShiftForm.reset(),
	});

	const createShiftSchema = shiftSchema;

	type TCreateShiftSchema = z.infer<typeof createShiftSchema>;

	const CreateShiftForm = useForm<TCreateShiftSchema>({
		resolver: zodResolver(createShiftSchema),
		defaultValues: {
			end_time: undefined,
			name: "",
			start_time: undefined,
		},
	});

	const onCreateShift = (values: TCreateShiftSchema) => {
		mutate(values);
	};

	return { CreateShiftForm, onCreateShift, isCreatingShift };
};
