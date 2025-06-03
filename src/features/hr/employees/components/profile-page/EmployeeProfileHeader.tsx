import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { employeeRoutes } from "../../routes/employee.routes";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const EmployeeProfileHeader = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<div>
			<SectionMainTitle title="Employee Profile" />
			<div className="flex items-center mt-4 mb-10  gap-4 flex-wrap">
				{employeeRoutes.map(route => (
					<NavLink
						key={route.title}
						to={`/employee/profile/${id}${route.href}`}
						className={({ isActive }) =>
							`capitalize border ${
								isActive ? "bg-black text-white" : ""
							} border-black text-black px-4 py-1 font-[600] rounded-2xl duration-200 hover:bg-black hover:text-white w-fit`
						}
					>
						{route.title}
					</NavLink>
				))}
			</div>

			<Outlet />
		</div>
	);
};
