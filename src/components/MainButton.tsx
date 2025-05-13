import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
type TMainButton = {
	children: string;
};

export const MainButton = ({
	children,
	className,
	...props
}: TMainButton & React.ComponentProps<"button">) => {
	return (
		<Button
			className={cn(
				"bg-main-blue capitalize flex items-center justify-center hover:bg-secondary-blue text-white duration-200",
				className
			)}
			{...props}
		>
			{children}
		</Button>
	);
};
