import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { TEmployeesDTO } from "../../../types/employee.types";

export const EmployeeProfileWorkDetails = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form flex flex-col p-main-spacing gap-y-4">
			<div className="flex flex-col gap-1">
				<SectionMainTitle title="Work Details" />
				<p className="text-sm text-main-gray">
					General information about {employee.firstname}.
				</p>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<FiUserCheck size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-main-green w-fit py-1 px-3 rounded-lg bg-secondary-green font-[600]">
						Active
					</div>
					<div className="text-main-gray">System Status</div>
				</div>
			</div>

			<div className="flex items-center justify-between flex-row-reverse">
				<FaMoneyCheckDollar size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-2xl font-bold">$1200</div>
					<div className="text-main-gray">Current Salary</div>
				</div>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<IoTimeOutline size={24} />
				<div className="felx flex-col gap-1">
					<div>{employee.shift.name}</div>
					<div className="text-main-gray">Shift</div>
				</div>
			</div>
		</div>
	);
};
