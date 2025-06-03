import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TJobPositionsDTO, TUpdateJobPositionDTO } from "../index";
import { JOB_POSITIONS } from "../../index";

export const useUpdateJobPosition = (id: number) => {
	const { mutate, isPending: isUpdatingJobPosition } = useApiMutation<
		TJobPositionsDTO,
		TUpdateJobPositionDTO
	>({
		axiosRequestMethod: "put",
		queryKey: [JOB_POSITIONS],
		requestURL: `/api/v1/job-titles/${id}`,
		successMsg: "Job Position updated successfully",
	});

	const updateJobPositionSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TUpdateJobPositionSchema = z.infer<typeof updateJobPositionSchema>;

	const UpdateJobPositionForm = useForm<TUpdateJobPositionSchema>({
		resolver: zodResolver(updateJobPositionSchema),
		defaultValues: {
			name: "",
		},
	});

	const onUpdateJobPosition = (values: TUpdateJobPositionSchema) => {
		mutate(values);
	};

	return {
		onUpdateJobPosition,
		UpdateJobPositionForm,
		isUpdatingJobPosition,
	};
};
