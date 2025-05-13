import { MainButton } from "@/components/MainButton";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type TCustomDialog = {
	children: React.ReactNode;
	trigger: string;
	onSubmit: () => void;
	isLoading: boolean;
	isLoadingTitle: string;
	mainButtonTitle: string;
};

export const CustomDialog = ({
	children,
	trigger,
	onSubmit,
	isLoading,
	isLoadingTitle,
	mainButtonTitle,
}: TCustomDialog) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<MainButton>{trigger}</MainButton>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="capitalize">{trigger}</DialogTitle>
					<DialogDescription>
						Make changes to your {trigger} here. Click Save Changes when you're
						done.
					</DialogDescription>
				</DialogHeader>

				{children}
				<form onSubmit={onSubmit}>
					<DialogFooter>
						<MainButton>
							{isLoading ? isLoadingTitle : mainButtonTitle}
						</MainButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
