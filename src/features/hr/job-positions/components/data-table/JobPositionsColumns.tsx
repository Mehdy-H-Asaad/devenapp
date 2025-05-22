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
import { TJobPositionsDTO } from "../../index";
import { useDeleteJobPosition } from "../../index";
import { JobPositionUpdate } from "../../index";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useDropDownStore } from "@/shared/store/drop-down.store";

export const JobPositionsColumns: ColumnDef<TJobPositionsDTO>[] = [
	{
		accessorKey: "name",
		header: "Job Position",
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const jobPositionId = row.original.id;
			const jobPosition = row.original;
			const { deleteJobPosition, isDeletingJobPosition } =
				useDeleteJobPosition(jobPositionId);

			const { setData } = useDropDownStore();

			return (
				<DropdownMenu
					modal={false}
					onOpenChange={open => setData({ isDropDownOpen: open })}
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
							deleteFunc={deleteJobPosition}
							isLoading={isDeletingJobPosition}
							trigger="Delete Job Position"
						/>

						<JobPositionUpdate {...jobPosition} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
