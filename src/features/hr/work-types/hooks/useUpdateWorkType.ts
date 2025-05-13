import { useApiMutation } from "@/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TWorkTypeDTO } from "../types";

export const useUpdateWorkType = (id: number) => {
	const { mutate, isPending: isUpdatingWorkType } = useApiMutation<
		TWorkTypeDTO,
		TUpdateWorkTypeSchema
	>({
		axiosRequestMethod: "put",
		queryKey: ["work-types"],
		requestURL: `/api/v1/work-type/${id}`,
		successMsg: "Work Type updated successfully",
	});

	const updateWorkTypeSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TUpdateWorkTypeSchema = z.infer<typeof updateWorkTypeSchema>;

	const UpdateWorkTypeForm = useForm<TUpdateWorkTypeSchema>({
		resolver: zodResolver(updateWorkTypeSchema),
		defaultValues: {
			name: "",
		},
	});

	const onUpdateWorkType = (values: TUpdateWorkTypeSchema) => {
		mutate(values);
	};

	return { onUpdateWorkType, UpdateWorkTypeForm, isUpdatingWorkType };
};
