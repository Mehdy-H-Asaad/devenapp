import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { TEmployeesDTO } from "../../../types/employee.types";

export const EmployeeProfileAddress = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form self-start p-main-spacing rounded-md flex flex-col gap-4 w-full">
			<SectionMainTitle title="Address Details" />

			<div className="grid grid-cols-4 gap-4">
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">Country</div>
					<div>{employee.country}</div>
				</div>
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">State</div>
					<div>{employee.state}</div>
				</div>
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">City</div>
					<div>{employee.city}</div>
				</div>
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">First Address</div>
					<div>{employee.address_line1}</div>
				</div>
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">Second Address</div>
					<div>{employee.address_line2}</div>
				</div>
				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">Location</div>
					<div>{employee.location.name}</div>
				</div>
			</div>
		</div>
	);
};
