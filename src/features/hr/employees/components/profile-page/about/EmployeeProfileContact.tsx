import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { TEmployeesDTO } from "../../../types/employee.types";

export const EmployeeProfileContact = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form self-start p-main-spacing rounded-md flex flex-col gap-4 w-full">
			<SectionMainTitle title="Contact Details" />

			<div className="grid grid-cols-3 gap-4">
				<div className="border-l-[2px] pl-4 break-words">
					<div className="text-main-gray font-[500]">Work Email</div>
					<div>{employee.work_email}</div>
				</div>
				<div className="border-l-[2px] pl-4 break-words">
					<div className="text-main-gray font-[500]">Personal Email</div>
					<div>{employee.personal_email}</div>
				</div>
				<div className="border-l-[2px] pl-4 break-words">
					<div className=" text-main-gray font-[500]">Phone Number</div>
					<div>{employee.phone ? employee.phone : "NA"}</div>
				</div>
				<div className="border-l-[2px] pl-4 break-words">
					<div className=" text-main-gray font-[500]">Emergency Email</div>
					<div>
						{employee.emergency_email ? employee.emergency_email : "NA"}
					</div>
				</div>

				<div className="border-l-[2px] pl-4">
					<div className="text-main-gray font-[500]">Emergency Phone</div>
					<div>
						{employee.emergency_phone ? employee.emergency_phone : "NA"}
					</div>
				</div>
			</div>
		</div>
	);
};
