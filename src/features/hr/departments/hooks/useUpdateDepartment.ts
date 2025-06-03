import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TDepartmentsDTO, TUpdateDepartmentDTO } from "../index";
import { DEPARTMENTS } from "../../index";
import { useEffect } from "react";

export const useUpdateDepartment = (id: number) => {
	const {
		isSuccess,
		mutate,
		isPending: isUpdatingDepartment,
	} = useApiMutation<TDepartmentsDTO, TUpdateDepartmentDTO>({
		axiosRequestMethod: "put",
		queryKey: [DEPARTMENTS],
		requestURL: `/api/v1/departments/${id}`,
		successMsg: "Department updated successfully",
	});

	const updateDepartmentSchema = z.object({
		name: z.string().min(1, "Required"),
	});

	type TUpdateDepartmentSchema = z.infer<typeof updateDepartmentSchema>;

	const UpdateDepartmentForm = useForm<TUpdateDepartmentSchema>({
		resolver: zodResolver(updateDepartmentSchema),
		defaultValues: {
			name: "",
		},
	});

	useEffect(() => {
		if (isSuccess) console.log("YES");
	}, [isSuccess]);

	const onUpdateDepartment = (values: TUpdateDepartmentSchema) => {
		mutate(values, {
			onSuccess: () => {},
		});
	};

	return {
		isSuccess,
		onUpdateDepartment,
		isUpdatingDepartment,
		UpdateDepartmentForm,
	};
};
