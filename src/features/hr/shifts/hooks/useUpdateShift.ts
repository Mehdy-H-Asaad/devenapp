import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TShiftDTO, TUpdateShiftDTO } from "../index";
import { SHIFTS } from "../../index";
import { shiftSchema } from "../index";

export const useUpdateShift = (id: number) => {
	const { mutate, isPending: isUpdatingShift } = useApiMutation<
		TShiftDTO,
		TUpdateShiftDTO
	>({
		axiosRequestMethod: "put",
		queryKey: [SHIFTS],
		requestURL: `/api/v1/shifts/${id}`,
		successMsg: "Shift updated successfully",
	});

	const updateShiftSchema = shiftSchema;

	type TUpdateShiftSchema = z.infer<typeof updateShiftSchema>;

	const UpdateShiftForm = useForm<TUpdateShiftSchema>({
		resolver: zodResolver(updateShiftSchema),
		defaultValues: {
			name: "",
		},
	});

	const onUpdateShift = (values: TUpdateShiftSchema) => {
		mutate(values);
	};

	return { onUpdateShift, UpdateShiftForm, isUpdatingShift };
};
