import { TEmployeesDTO } from "../../types/employee.types";
import { Form } from "@/components/ui/form";
import { useUpdateEmployee } from "../../hooks/useUpdateEmployee";
import { MainButton } from "@/components/common/MainButton";
import { EmployeeAddress } from "../employee-form/EmployeeAddress";
import { EmployeeEducation } from "../employee-form/EmployeeEducation";
import EmployeeJobInfo from "../employee-form/EmployeeJobInfo";
import { EmployeePersonalInfo } from "../employee-form/EmployeePersonalInfo";

export const EmployeeUpdate = (employee: TEmployeesDTO) => {
	const { UpdateEmployeeForm, isUpdatingEmployees, onUpdateEmployee } =
		useUpdateEmployee(employee);

	return (
		<div>
			<Form {...UpdateEmployeeForm}>
				<form
					className="flex flex-col gap-14"
					onSubmit={UpdateEmployeeForm.handleSubmit(onUpdateEmployee)}
				>
					<EmployeePersonalInfo form={UpdateEmployeeForm} />
					<EmployeeJobInfo form={UpdateEmployeeForm} />
					<EmployeeAddress form={UpdateEmployeeForm} />
					<EmployeeEducation form={UpdateEmployeeForm} />

					<MainButton className="w-fit ml-auto" disabled={isUpdatingEmployees}>
						{isUpdatingEmployees ? "Updating..." : "Update Employee"}
					</MainButton>
				</form>
			</Form>
		</div>
	);
};
