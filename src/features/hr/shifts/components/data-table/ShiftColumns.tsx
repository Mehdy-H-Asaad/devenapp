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
import { TShiftDTO } from "../../index";
import { useDeleteShift } from "../../index";
import { ShiftUpdate } from "../../index";
import { HOURS, useDropDownStore } from "../../../index";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useTimeFormatSotre } from "../../time-format.store";

export const ShiftColumns: ColumnDef<TShiftDTO>[] = [
	{
		accessorKey: "name",
		header: "Shift",
	},
	{
		accessorKey: "start_time",
		header: "Start Time",

		cell: ({ row }) => {
			const { data } = useTimeFormatSotre();
			return (
				<div>
					{data.timeFormat === 12
						? HOURS.find(
								hour =>
									hour.value ==
									row.original.start_time.split(":").slice(0, 2).join(":")
						  )?.label
						: HOURS.find(
								hour =>
									hour.value ==
									row.original.start_time.split(":").slice(0, 2).join(":")
						  )?.value}
				</div>
			);
		},
	},
	{
		accessorKey: "end_time",
		header: "End Time",
		cell: ({ row }) => {
			const { data } = useTimeFormatSotre();
			return (
				<div>
					{data.timeFormat === 12
						? HOURS.find(
								hour =>
									hour.value ==
									row.original.end_time.split(":").slice(0, 2).join(":")
						  )?.label
						: HOURS.find(
								hour =>
									hour.value ==
									row.original.end_time.split(":").slice(0, 2).join(":")
						  )?.value}
				</div>
			);
		},
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const shiftId = row.original.id;
			const { deleteShift, isDeletingShift } = useDeleteShift(
				shiftId.toString()
			);
			const shift = row.original;
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
							deleteFunc={deleteShift}
							isLoading={isDeletingShift}
							trigger="Delete Shift"
						/>

						<ShiftUpdate {...shift} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
