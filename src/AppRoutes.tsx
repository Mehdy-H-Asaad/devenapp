import { useRoutes } from "react-router-dom";
import { authRoutes } from "./features/auth/routes/auth.routes";
import { dashboardRoutes } from "./features/dashboard/routes/dashboard.routes";

export const AppRoutes = () => {
	const routes = [...authRoutes, ...dashboardRoutes];
	return useRoutes(routes);
};
