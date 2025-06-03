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
import { TEmployeesDTO } from "../../types/employee.types";
import { DeleteDialog } from "@/components/common/DeleteDialog";
import { useDeleteEmployee } from "../../hooks/useDeleteEmployee";
import { MainButton } from "@/components/common/MainButton";
import { Link } from "react-router-dom";

export const EmployeesColumns: ColumnDef<TEmployeesDTO>[] = [
	{
		accessorKey: "firstname",
		header: "First Name",
	},
	{
		accessorKey: "lastname",
		header: "Last Name",
	},
	{
		accessorKey: "work_email",
		header: "Email",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},

	{
		accessorKey: "job_title",
		header: "Job Title",
		cell: ({ row }) => {
			return (
				<div className="bg-[#def1e5] text-green-600 text-sm w-fit rounded-md py-1.5 px-4 font-[500]">
					{row.original.job_title?.name}
				</div>
			);
		},
	},
	{
		accessorKey: "department",
		header: "Department",
		cell: ({ row }) => {
			return <div>{row.original.department?.name}</div>;
		},
	},
	{
		accessorKey: "date_of_joining",
		header: "Joinded On",
	},

	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const employeeId = row.original.id;

			const { deleteEmployee, isDeletingEmployee } = useDeleteEmployee(
				Number(employeeId)
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
						<DeleteDialog
							deleteFunc={deleteEmployee}
							isLoading={isDeletingEmployee}
							trigger="Delete Employee"
						/>
						<Link to={`/employee/update-employee/${employeeId}`}>
							<MainButton>Update Employee</MainButton>
						</Link>
						<Link to={`/employee/profile/${employeeId}/about`}>
							<MainButton>View Employee</MainButton>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
