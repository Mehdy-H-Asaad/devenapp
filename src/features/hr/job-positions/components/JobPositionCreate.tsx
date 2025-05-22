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
import { useCreateJobPosition } from "../index";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";

export const JobPositionsCreate = () => {
	const { CreateJobPositionForm, isCreatingJobPosition, onCreateJobPosition } =
		useCreateJobPosition();

	const { isValid } = useFormState({ control: CreateJobPositionForm.control });

	return (
		<CustomDialog title="Job Positions" trigger="create Job Position">
			<Form {...CreateJobPositionForm}>
				<form
					className="grid gap-4"
					onSubmit={CreateJobPositionForm.handleSubmit(onCreateJobPosition)}
				>
					<FormField
						control={CreateJobPositionForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Job Position</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Job Position" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton disabled={!isValid || isCreatingJobPosition}>
							{isCreatingJobPosition ? "Creating..." : "Create Job Position"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
