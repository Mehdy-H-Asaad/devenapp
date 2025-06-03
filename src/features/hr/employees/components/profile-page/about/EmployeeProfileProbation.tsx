import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { IoIosTimer } from "react-icons/io";
import { TbCalendarClock } from "react-icons/tb";
import { TEmployeesDTO } from "../../../types/employee.types";

export const EmployeeProfileProbation = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form flex flex-col p-main-spacing gap-y-4">
			<div className="flex flex-col gap-1">
				<SectionMainTitle title="Probation" />
				<p className="text-sm text-main-gray">
					Other Information about {employee.firstname}.
				</p>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<TbCalendarClock size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-main-gray ">In probation</div>
					<div className="capitalize">
						{employee.in_probation ? "Yes" : "No"}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<IoIosTimer size={24} />
				<div className="felx flex-col gap-1 text-left">
					<div className="text-main-gray">Probation Period</div>
					<div>
						{employee.probation_period ? employee.probation_period : "NA"}
					</div>
				</div>
			</div>
		</div>
	);
};
