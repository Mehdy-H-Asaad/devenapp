import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TCreateWorkTypeDTO, TWorkTypeDTO } from "../index";
import { WORK_TYPES } from "../../index";

export const useCreateWorkType = () => {
	const { mutate, isPending: isCreatingWorkType } = useApiMutation<
		TWorkTypeDTO,
		TCreateWorkTypeDTO
	>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/work-type/",
		successMsg: "Work Type created successfully",
		queryKey: [WORK_TYPES],
		onSuccess: () => CreateWorkTypeForm.reset(),
	});

	const createWorkTypeSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TCreateWorkTypeSchema = z.infer<typeof createWorkTypeSchema>;

	const CreateWorkTypeForm = useForm<TCreateWorkTypeSchema>({
		resolver: zodResolver(createWorkTypeSchema),
		defaultValues: {
			name: "",
		},
	});

	const onCreateWorkType = (values: TCreateWorkTypeSchema) => {
		mutate(values);
	};

	return { CreateWorkTypeForm, onCreateWorkType, isCreatingWorkType };
};
