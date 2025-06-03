import { useParams } from "react-router-dom";
import { useGetEmployeeById } from "../hooks/useGetEmployeeById";
import { EmployeeUpdate } from "../components/employee-update/EmployeeUpdate";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { HiOutlineIdentification } from "react-icons/hi2";
import { NotFound } from "@/components/NotFound";

export const EmployeeUpdatePage = () => {
	const { id } = useParams();
	const { employee, isLoadingEmployee } = useGetEmployeeById(Number(id));
	return (
		<>
			<div className="flex flex-col mb-10 ">
				<div className="flex gap-2 ">
					<HiOutlineIdentification size={35} />
					<SectionMainTitle title="Update Employee" />
				</div>

				<div className="text-sm text-gray-400">
					Modify Your Team - Update an existing Employee
				</div>
			</div>
			{isLoadingEmployee ? (
				<div className="grid gap-10">
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton key={index} className="h-[200px] w-full" />
					))}
				</div>
			) : !employee ? (
				<NotFound description="Employee Not Found ):" />
			) : (
				<EmployeeUpdate {...employee} />
			)}
		</>
	);
};
