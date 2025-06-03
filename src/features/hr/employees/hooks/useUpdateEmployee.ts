import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { EMPLOYEES } from "../../shared/query-keys";
import { employeeSchema } from "../schema/employee.schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEmployeesDTO, TUpdateEmployeeDTO } from "../types/employee.types";

export const useUpdateEmployee = (employee: TEmployeesDTO) => {
	const { mutate, isPending: isUpdatingEmployees } = useApiMutation<
		TEmployeesDTO,
		TUpdateEmployeeDTO
	>({
		axiosRequestMethod: "put",
		queryKey: [EMPLOYEES],
		requestURL: `/api/v1/employees/${employee.id}`,
		successMsg: "Employee updated successfully",
	});

	const updateEmployeeSchema = employeeSchema;

	type TUpdateEmployeeSchema = z.infer<typeof updateEmployeeSchema>;

	const UpdateEmployeeForm = useForm<TUpdateEmployeeSchema>({
		resolver: zodResolver(updateEmployeeSchema),
		defaultValues: {
			address_line1: employee.address_line1,
			address_line2: employee.address_line2,
			children: employee.children,
			city: employee.city,
			country: employee.country,
			date_of_birth: employee.date_of_birth,
			date_of_joining: employee.date_of_joining,
			department_id: employee.department.id,
			education: employee.education,
			emergency_email: employee.emergency_email,
			emergency_phone: employee.phone,
			firstname: employee.firstname,
			gender: employee.gender,
			in_probation: employee.in_probation,
			job_title_id: employee.job_title.id,
			lastname: employee.lastname,
			location_id: employee.location.id,
			martial_status: employee.martial_status,
			personal_email: employee.personal_email,
			phone: employee.phone,
			postal_code: employee.postal_code,
			probation_period: employee.probation_period,
			reporting_manager_id: employee.reporting_manager_id,
			shift_id: employee.shift.id,
			state: employee.state,
			status: employee.status,
			work_email: employee.work_email,
			work_type_id: employee.work_type.id,
			years_of_experience: employee.years_of_experience,
		},
	});

	const onUpdateEmployee = (values: TUpdateEmployeeSchema) => {
		mutate(values);
	};

	return { onUpdateEmployee, isUpdatingEmployees, UpdateEmployeeForm };
};
