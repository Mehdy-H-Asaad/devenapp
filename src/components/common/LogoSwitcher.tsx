import React from "react";
import LightLogo from "../../assets/imgs/deven-high-resolution-logo-transparent-light.png";
import DarkLogo from "../../assets/imgs/deven-high-resolution-logo-transparent.png";
import { useTheme } from "@/shared/services/ThemeProvider";
import { cn } from "@/lib/utils";

export const LogoSwitcher = ({
	className,
}: React.ComponentPropsWithoutRef<"div">) => {
	const { theme } = useTheme();

	return (
		<img
			src={theme == "light" ? LightLogo : DarkLogo}
			className={cn("w-30 p-2", className)}
			alt="Logo"
		/>
	);
};
