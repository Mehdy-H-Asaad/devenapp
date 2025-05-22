import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { useCreateDepartment } from "../index";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";

export const DepartmentCreate = () => {
	const { CreateDepartmentForm, isCreatingDepartment, onCreateDepartment } =
		useCreateDepartment();

	const { isValid } = useFormState({ control: CreateDepartmentForm.control });

	return (
		<CustomDialog title="departments" trigger="create Department">
			<Form {...CreateDepartmentForm}>
				<form
					className="grid gap-4"
					onSubmit={CreateDepartmentForm.handleSubmit(onCreateDepartment)}
				>
					<FormField
						control={CreateDepartmentForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Department</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Department" className="" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton
							// onClick={handleChange}
							disabled={!isValid || isCreatingDepartment}
						>
							{isCreatingDepartment ? "Creating..." : "Create Department"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
