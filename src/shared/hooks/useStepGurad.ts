import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useStepGuard = (
	guards: Record<string, () => boolean>,
	options?: {
		resetExit?: boolean;
		resetFn?: () => void;
	}
) => {
	const location = useLocation();

	useEffect(() => {
		if (options?.resetExit && options.resetFn) options.resetFn();
	}, []);

	return guards[location.pathname]?.() ?? false;
};
