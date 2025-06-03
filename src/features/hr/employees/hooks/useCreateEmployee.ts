import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { EMPLOYEES } from "../../shared/query-keys";
import { employeeSchema } from "../schema/employee.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateEmployeeDTO, TEmployeesDTO } from "../types/employee.types";

export const useCreateEmployee = () => {
	const { mutate, isPending: isCreatingEmployees } = useApiMutation<
		TEmployeesDTO,
		TCreateEmployeeDTO
	>({
		axiosRequestMethod: "post",
		queryKey: [EMPLOYEES],
		requestURL: "/api/v1/employees/",
		successMsg: "Employee created successfully",
		onSuccess: () => CreateEmployeeForm.reset(),
	});

	const createEmployeeSchema = employeeSchema;

	type TCreateEmployeeSchema = z.infer<typeof createEmployeeSchema>;

	const CreateEmployeeForm = useForm<TCreateEmployeeSchema>({
		resolver: zodResolver(createEmployeeSchema),
		defaultValues: {
			address_line1: "",
			address_line2: "",
			children: undefined,
			city: "",
			country: "",
			date_of_birth: "",
			date_of_joining: "",
			department_id: undefined,
			education: [
				{
					degree: "",
					end_date: "",
					field_of_study: "",
					grade: "",
					institution: "",
					start_date: "",
					status: "",
				},
			],
			emergency_email: "",
			emergency_phone: "",
			firstname: "",
			gender: "",
			in_probation: undefined,
			job_title_id: undefined,
			lastname: "",
			location_id: undefined,
			martial_status: "",
			personal_email: "",
			phone: "",
			postal_code: "",
			probation_period: null,
			reporting_manager_id: null,
			shift_id: undefined,
			state: "",
			status: "",
			work_email: "",
			work_type_id: undefined,
			years_of_experience: undefined,
		},
	});

	const onCreateEmployee = (values: TCreateEmployeeSchema) => {
		mutate(values);
	};

	return { onCreateEmployee, isCreatingEmployees, CreateEmployeeForm };
};
