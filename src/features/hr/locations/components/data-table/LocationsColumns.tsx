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

import { TLocationDTO } from "../../index";
import { useDeleteLocation } from "../../index";
import { LocationUpdate } from "../../index";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useDropDownStore } from "@/shared/store/drop-down.store";

export const LocationsColumns: ColumnDef<TLocationDTO>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "country",
		header: "Country",
	},
	{
		accessorKey: "state",
		header: "State",
	},
	{
		accessorKey: "city",
		header: "City",
	},
	{
		accessorKey: "address_line1",
		header: "Address One",
	},
	{
		accessorKey: "address_line2",
		header: "Address Two",
	},
	{
		accessorKey: "postal_code",
		header: "Postal Code",
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const locationId = row.original.id;
			const location = row.original;
			const { deleteLocation, isDeletingLocation } =
				useDeleteLocation(locationId);

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
							deleteFunc={deleteLocation}
							isLoading={isDeletingLocation}
							trigger="Delete Location"
						/>
						<LocationUpdate {...location} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
