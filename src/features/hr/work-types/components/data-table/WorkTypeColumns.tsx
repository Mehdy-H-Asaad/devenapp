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

import { TWorkTypeDTO } from "../../index";
import { useDeleteWorkType } from "../../index";
import { WorkTypeUpdate } from "../../index";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useDropDownStore } from "@/shared/store/drop-down.store";

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
			const workType = row.original;

			const { setData } = useDropDownStore();

			return (
				<DropdownMenu
					onOpenChange={open => setData({ isDropDownOpen: open })}
					modal={false}
				>
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
						<DeleteDialog
							deleteFunc={deleteWorkType}
							isLoading={isDeletingWorkType}
							trigger="Delete Work Type"
						/>

						<WorkTypeUpdate {...workType} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
