import { ColumnDef } from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TWorkTypeDTO } from "../../types";
import { useDeleteWorkType } from "../../hooks/useDeleteWorkType";
import { WorkTypeUpdate } from "../WorkTypeUpdate";

export const WorkTypeColumns: ColumnDef<TWorkTypeDTO>[] = [
	{
		accessorKey: "name",
		header: "Work Type",
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const workTypeId = row.original.id;
			const { deleteWorkType, isDeletingWorkType } = useDeleteWorkType(
				workTypeId.toString()
			);
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="rtl:ml-auto" align="end">
						<DropdownMenuLabel className="rtl:text-right">
							Options
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<AlertDialog>
							<AlertDialogTrigger className="mb-2 bg-red-600 duration-200 text-white hover:!bg-red-800 hover:!text-white cursor-pointer w-full text-sm text-center justify-center px-4 py-2 font-[500] flex rounded-sm">
								Delete Work Type
							</AlertDialogTrigger>
							<AlertDialogContent className="bg-white text-black">
								<AlertDialogHeader>
									<AlertDialogTitle className="rtl:text-right">
										Are you absolutely sure?
									</AlertDialogTitle>
									<AlertDialogDescription className="rtl:text-right">
										This action cannot be undone. This will be permanently
										deleted and removed from our servers.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter className="rtl:justify-start rtl:gap-1">
									<AlertDialogCancel className="bg-black text-white duration-200">
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction asChild>
										<Button
											onClick={() => deleteWorkType()}
											className="capitalize duration-200 hover:bg-black hover:text-white text-white bg-red-600"
										>
											{isDeletingWorkType ? "Deleting..." : "Delete Work Type"}
										</Button>
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>

						<WorkTypeUpdate id={workTypeId} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
