import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type TMainButton = {
	title: string;
};

export const MainButton = ({
	title,
	className,
	...props
}: TMainButton & React.ComponentProps<"button">) => {
	return (
		<Button
			className={cn(
				"bg-main-blue hover:bg-secondary-blue text-white duration-200",
				className
			)}
			{...props}
		>
			{title}
		</Button>
	);
};
