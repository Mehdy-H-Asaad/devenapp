import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./features/dashboard/layout/DashboardLayout";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Reports } from "./features/dashboard/finance/component/Reports";
import { Login } from "./features/auth/components/Login";
import { StaticsCards } from "./features/dashboard/overview/components/StaticsCards";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Protect all dashboard routes */}
				<Route
					element={
						<ProtectedRoutes>
							<DashboardLayout />
						</ProtectedRoutes>
					}
				>
					{/* Render DashboardLayout once for all nested dashboard routes */}
					<Route path="/" element={<StaticsCards />} />
					{/* <Route index element={<DashboardHome />} /> */}
					<Route path="reports" element={<Reports />} />
					{/* Add more dashboard routes here */}
				</Route>

				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
