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
	DepartmentUpdate,
	TDepartmentsDTO,
	useDeleteDepartment,
} from "../../index";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useDropDownStore } from "@/shared/store/drop-down.store";

export const DepartmentsColumns: ColumnDef<TDepartmentsDTO>[] = [
	{
		accessorKey: "name",
		header: "Department",
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const department = row.original;
			const departmentId = row.original.id;
			const { deleteDepartment, isDeletingDepartment } =
				useDeleteDepartment(departmentId);

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
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Options</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DeleteDialog
							deleteFunc={deleteDepartment}
							isLoading={isDeletingDepartment}
							trigger="Delete Department"
						/>

						<DepartmentUpdate department={department} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
