import { MainButton } from "@/components/common/MainButton";
import { Form } from "@/components/ui/form";
import { useCreateEmployee } from "../../hooks/useCreateEmployee";
import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { EmployeePersonalInfo } from "../employee-form/EmployeePersonalInfo";
import { EmployeeAddress } from "../employee-form/EmployeeAddress";
import { EmployeeEducation } from "../employee-form/EmployeeEducation";
import { HiOutlineIdentification } from "react-icons/hi2";
import { EmployeeJobInfo } from "../employee-form/EmployeeJobInfo";
import React from "react";

export const EmployeeCreate = React.memo(() => {
	const { CreateEmployeeForm, isCreatingEmployees, onCreateEmployee } =
		useCreateEmployee();
	const isValid = CreateEmployeeForm.formState.isValid;

	return (
		<div>
			<div className="flex flex-col mb-10 ">
				<div className="flex gap-2 ">
					<HiOutlineIdentification size={35} />
					<SectionMainTitle title="Create Employee" />
				</div>

				<div className="text-sm text-gray-400">
					Expand Your Team - Add a New Employee
				</div>
			</div>
			<Form {...CreateEmployeeForm}>
				<form
					className="flex flex-col gap-14"
					onSubmit={CreateEmployeeForm.handleSubmit(onCreateEmployee)}
				>
					<EmployeePersonalInfo form={CreateEmployeeForm} />
					<EmployeeJobInfo form={CreateEmployeeForm} />
					<EmployeeAddress form={CreateEmployeeForm} />
					<EmployeeEducation form={CreateEmployeeForm} />

					<MainButton className="w-fit ml-auto" disabled={isCreatingEmployees}>
						{isCreatingEmployees ? "Creating..." : "Create Employee"}
					</MainButton>
				</form>
			</Form>
		</div>
	);
});
