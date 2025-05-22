import { RouteObject } from "react-router-dom";
import { StaticsCards } from "../../overview/components/StaticsCards";
import { Reports } from "../../finance/components/Reports";
import { ProtectedRoutes } from "@/components/common/ProtectedRoutes";
import { DashboardLayout } from "../layout/DashboardLayout";
import { EmployeesList } from "@/features/hr/employees/components/data-table/EmployeesList";
import { WorkTypeList } from "@/features/hr/work-types/components/data-table/WorkTypeList";
import { JobPositionsList } from "@/features/hr/job-positions/components/data-table/JobPositionsList";
import { DepartmentsList } from "@/features/hr/departments/components/data-table/DepartmentsList";
import { LocationsList } from "@/features/hr/locations/components/data-table/LocationsList";
import { ShiftsList } from "@/features/hr/shifts/components/data-table/ShiftList";

export const dashboardRoutes: RouteObject[] = [
	{
		path: "/",
		element: (
			<ProtectedRoutes>
				<DashboardLayout />
			</ProtectedRoutes>
		),
		children: [
			{
				index: true,
				element: <StaticsCards />,
			},
			{
				path: "reports",
				element: <Reports />,
			},
			{
				path: "employees",
				element: <EmployeesList />,
			},
			{
				path: "hr-settings",
				children: [
					{
						path: "work-type",
						element: <WorkTypeList />,
					},
					{
						path: "job-positions",
						element: <JobPositionsList />,
					},
					{
						path: "shifts",
						element: <ShiftsList />,
					},
				],
			},
			{
				path: "general-settings",
				children: [
					{
						path: "department",
						element: <DepartmentsList />,
					},
					{
						path: "locations",
						element: <LocationsList />,
					},
				],
			},
		],
	},
];
