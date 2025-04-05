import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { SideHeader } from "../overview/components/SideHeader";

export const DashboardLayout = () => {
	return (
		<div className="flex justify-between">
			<DashboardSidebar />
			<div className="flex flex-col flex-1">
				<SideHeader />
				<div className="container py-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
