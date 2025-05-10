import { useSignUpStore } from "@/features/auth/store/signup.store";
import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { admin } = useSignUpStore();
	return admin ? children : <Navigate to={"/login"} />;
};
