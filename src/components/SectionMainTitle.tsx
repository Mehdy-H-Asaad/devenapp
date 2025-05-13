import { cn } from "@/lib/utils";
import React from "react";

export type TSectionMainTitle = {
	title: string;
};

export const SectionMainTitle = ({
	title,
	className,
	...props
}: TSectionMainTitle & React.ComponentProps<"div">) => {
	return (
		<div
			className={cn("text-2xl capitalize font-[600] w-fit", className)}
			{...props}
		>
			{title}
		</div>
	);
};
