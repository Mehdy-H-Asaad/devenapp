import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TCreateDepartmentDTO, TDepartmentsDTO } from "../index";

import { DEPARTMENTS } from "../../index";

export const useCreateDepartment = () => {
	const { mutate, isPending: isCreatingDepartment } = useApiMutation<
		TDepartmentsDTO,
		TCreateDepartmentDTO
	>({
		axiosRequestMethod: "post",
		queryKey: [DEPARTMENTS],
		requestURL: "/api/v1/departments/",
		successMsg: "Department created successfully",
		onSuccess: () => CreateDepartmentForm.reset(),
	});

	const createDepartmentSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TCreateDepartmentSchema = z.infer<typeof createDepartmentSchema>;

	const CreateDepartmentForm = useForm<TCreateDepartmentSchema>({
		resolver: zodResolver(createDepartmentSchema),
		defaultValues: {
			name: "",
		},
	});

	const onCreateDepartment = (values: TCreateDepartmentSchema) => {
		mutate(values);
	};

	return {
		onCreateDepartment,
		CreateDepartmentForm,
		isCreatingDepartment,
	};
};
