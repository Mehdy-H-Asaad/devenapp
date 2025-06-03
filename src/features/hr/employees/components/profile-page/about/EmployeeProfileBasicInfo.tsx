import { useParams } from "react-router-dom";
import { useGetEmployeeById } from "../../../hooks/useGetEmployeeById";
import { NotFound } from "@/components/NotFound";
import { EmployeeProfileOtherInfo } from "./EmployeeProfileOtherInfo";
import { EmployeeProfileContact } from "./EmployeeProfileContact";
import { EmployeeProfileEducation } from "./EmployeeProfileEducation";
import { EmployeeProfileAddress } from "./EmployeeProfileAddress";
import { EmployeeProfileWorkDetails } from "./EmployeeProfileWorkDetails";
import { EmployeeProfileProbation } from "./EmployeeProfileProbation";
import { Skeleton } from "@/components/ui/skeleton";

export const EmployeeProfileBasicInfo = () => {
	const { id } = useParams<{ id: string }>();

	const { employee, isLoadingEmployee } = useGetEmployeeById(Number(id));

	if (isLoadingEmployee)
		return (
			<div className="flex gap-10">
				<div className="grid gap-8 flex-4">
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton key={index} className="h-[200px] w-full" />
					))}
				</div>
				<div className="grid gap-8 flex-2">
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton key={index} className="h-[200px] w-full" />
					))}
				</div>
			</div>
		);

	if (!employee) return <NotFound />;

	return (
		<div className="flex gap-10 font-[500]">
			<div className="flex flex-col gap-10 flex-4">
				<div className="bg-main-form p-main-spacing rounded-md flex flex-col gap-4 w-full ">
					<div className="flex items-center gap-3">
						<div className="bg-main-blue size-14 flex items-center text-white justify-center rounded-md">
							{`${employee.firstname[0]}${employee.lastname[0]}`}
						</div>

						<div className="flex flex-col">
							<div className="font-[600] text-2xl">{`${employee.firstname} ${employee.lastname}`}</div>
							<div className="text-sm">{employee.work_email}</div>
						</div>
					</div>

					<div className="flex gap-4 items-center justify-between flex-wrap ">
						<div className="flex flex-col border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Job Position</div>
							<div>{employee.job_title.name}</div>
						</div>
						<div className="flex flex-col border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Department</div>
							<div>{employee.department.name}</div>
						</div>
						<div className="flex flex-col border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Work Type</div>
							<div>Remote - {employee.work_type.name} </div>
						</div>

						<div className="flex flex-col border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Joined on</div>
							<div>{employee.date_of_joining}</div>
						</div>
					</div>
				</div>
				<EmployeeProfileContact {...employee} />
				<EmployeeProfileEducation {...employee} />
				<EmployeeProfileAddress {...employee} />
			</div>
			<div className="flex flex-col mb-10 gap-10 flex-2">
				<EmployeeProfileWorkDetails {...employee} />
				<EmployeeProfileProbation {...employee} />
				<EmployeeProfileOtherInfo {...employee} />
			</div>
		</div>
	);
};
