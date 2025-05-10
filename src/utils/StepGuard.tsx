import { useStepGuard } from "@/hooks/useStepGurad";
import React from "react";
import { Navigate } from "react-router-dom";

type TStepGuard = {
	children: React.ReactNode;
	guards: Record<string, () => boolean>;
};

export const StepGuard = ({ children, guards }: TStepGuard) => {
	const isAllowed = useStepGuard(guards);

	if (!isAllowed) {
		const firstGuardPath = Object.keys(guards)[0];
		return <Navigate to={firstGuardPath} replace />;
	}

	return <>{children}</>;
};
