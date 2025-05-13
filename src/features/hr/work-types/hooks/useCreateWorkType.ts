import { useApiMutation } from "@/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TCreateWorkTypeDTO, TWorkTypeDTO } from "../types";

export const useCreateWorkType = () => {
	const {
		data,
		mutate,
		isPending: isCreatingWorkType,
	} = useApiMutation<TWorkTypeDTO, TCreateWorkTypeDTO>({
		axiosRequestMethod: "post",
		requestURL: "/api/v1/work-type/",
		successMsg: "Work Type created successfully",
		queryKey: ["work-types"],
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

	console.log(data);

	return { CreateWorkTypeForm, onCreateWorkType, isCreatingWorkType };
};
