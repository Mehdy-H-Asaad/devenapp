import { useAuthStore } from "@/features/auth/store/auth.store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { admin } = useAuthStore();
	return admin ? children : <Navigate to={"/login"} />;
};
