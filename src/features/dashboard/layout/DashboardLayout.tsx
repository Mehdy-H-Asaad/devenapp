import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import { SideHeader } from "../components/SideHeader";

export const DashboardLayout = () => {
	return (
		<div className="flex h-screen">
			<DashboardSidebar />
			<div className="flex-1 overflow-x-hidden">
				<SideHeader />
				<div className="container py-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
