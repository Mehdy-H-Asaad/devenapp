import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TCreateJobPositionDTO, TJobPositionsDTO } from "../index";
import { JOB_POSITIONS } from "../../index";

export const useCreateJobPosition = () => {
	const { mutate, isPending: isCreatingJobPosition } = useApiMutation<
		TJobPositionsDTO,
		TCreateJobPositionDTO
	>({
		axiosRequestMethod: "post",
		queryKey: [JOB_POSITIONS],
		requestURL: "/api/v1/job-title/",
		successMsg: "Job Position created successfully",
		onSuccess: () => CreateJobPositionForm.reset(),
	});

	const createJobPositionSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TCreateJobPositionSchema = z.infer<typeof createJobPositionSchema>;

	const CreateJobPositionForm = useForm<TCreateJobPositionSchema>({
		resolver: zodResolver(createJobPositionSchema),
		defaultValues: {
			name: "",
		},
	});

	const onCreateJobPosition = (values: TCreateJobPositionSchema) => {
		mutate(values);
	};

	return {
		CreateJobPositionForm,
		onCreateJobPosition,
		isCreatingJobPosition,
	};
};
