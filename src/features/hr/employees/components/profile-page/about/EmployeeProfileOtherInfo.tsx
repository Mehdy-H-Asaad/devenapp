import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiLinkedRings } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TEmployeesDTO } from "../../../types/employee.types";

export const EmployeeProfileOtherInfo = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form flex flex-col p-main-spacing gap-y-4 rounded-lg">
			<div className="flex flex-col gap-1">
				<SectionMainTitle title="Other Info" />
				<p className="text-sm text-main-gray">
					Other Information about {employee.firstname}.
				</p>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<IoPersonOutline size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-main-gray ">Gender</div>
					<div className="capitalize">{employee.gender}</div>
				</div>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<LiaBirthdayCakeSolid size={24} />
				<div className="felx flex-col gap-1 text-left">
					<div className="text-main-gray">Birth Day</div>
					<div>{employee.date_of_birth}</div>
				</div>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<GiLinkedRings size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-main-gray">Martial Status</div>
					<div>{employee.martial_status}</div>
				</div>
			</div>
			<div className="flex items-center justify-between flex-row-reverse">
				<FaHandsHoldingChild size={24} />
				<div className="felx flex-col gap-1">
					<div className="text-main-gray">Children</div>
					<div>{employee.children}</div>
				</div>
			</div>
		</div>
	);
};
