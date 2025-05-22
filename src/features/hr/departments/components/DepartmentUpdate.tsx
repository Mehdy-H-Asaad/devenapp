import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useUpdateDepartment } from "../index";
import { useEffect } from "react";
import { TDepartmentsDTO } from "../index";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";

type TDepartmentUpdate = {
	department: TDepartmentsDTO;
};

export const DepartmentUpdate = ({ department }: TDepartmentUpdate) => {
	const { UpdateDepartmentForm, isUpdatingDepartment, onUpdateDepartment } =
		useUpdateDepartment(department.id);

	const { isValid, isDirty } = useFormState({
		control: UpdateDepartmentForm.control,
	});

	useEffect(() => {
		if (department) {
			UpdateDepartmentForm.reset(department);
		}
	}, [department, UpdateDepartmentForm]);

	return (
		<CustomDialog title="Departments" trigger="Update Department">
			<Form {...UpdateDepartmentForm}>
				<form
					className="grid gap-4"
					onSubmit={UpdateDepartmentForm.handleSubmit(onUpdateDepartment)}
				>
					<FormField
						control={UpdateDepartmentForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Department</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Department" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton disabled={isUpdatingDepartment || !isValid || !isDirty}>
							{isUpdatingDepartment ? "Updating..." : "Update Department"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
