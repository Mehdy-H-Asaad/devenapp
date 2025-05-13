import { RouteObject } from "react-router-dom";
import { StaticsCards } from "../../overview/components/StaticsCards";
import { Reports } from "../../finance/components/Reports";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";
import { DashboardLayout } from "../layout/DashboardLayout";
import { EmployeesList } from "@/features/hr/employees/components/data-table/EmployeesList";
import { WorkTypeList } from "@/features/hr/work-types/components/data-table/WorkTypeList";

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
				],
			},
		],
	},
];
