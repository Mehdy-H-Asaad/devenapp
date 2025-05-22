import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

type TDeleteDialog = {
	deleteFunc: () => void;
	trigger: string;
	isLoading: boolean;
};

export const DeleteDialog = ({
	deleteFunc,
	trigger,
	isLoading,
}: TDeleteDialog) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger className="mb-2 bg-red-600 duration-200 text-white hover:bg-red-700 hover:!text-white cursor-pointer w-full text-sm text-center justify-center px-4 py-2 font-[500] flex rounded-sm">
				{trigger}
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-white text-black">
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will be permanently deleted and
						removed from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="border text-black hover:bg-black hover:text-white  duration-200">
						Cancel
					</AlertDialogCancel>
					<Button
						disabled={isLoading}
						onClick={() => deleteFunc()}
						className="capitalize duration-200 hover:bg-red-700 hover:text-white text-white bg-red-600"
					>
						{isLoading ? "Deleting..." : trigger}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
