import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateJobPosition } from "../index";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useEffect } from "react";
import { TJobPositionsDTO } from "../index";

export const JobPositionUpdate = (jobPosition: TJobPositionsDTO) => {
	const { UpdateJobPositionForm, isUpdatingJobPosition, onUpdateJobPosition } =
		useUpdateJobPosition(jobPosition.id);

	const { isValid, isDirty } = useFormState({
		control: UpdateJobPositionForm.control,
	});

	useEffect(() => {
		if (jobPosition) {
			UpdateJobPositionForm.reset(jobPosition);
		}
	}, [jobPosition, UpdateJobPositionForm]);

	return (
		<CustomDialog title="Job Positions" trigger="update Job Position">
			<Form {...UpdateJobPositionForm}>
				<form
					className="grid gap-4"
					onSubmit={UpdateJobPositionForm.handleSubmit(onUpdateJobPosition)}
				>
					<FormField
						control={UpdateJobPositionForm.control}
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
						<MainButton
							disabled={!isValid || isUpdatingJobPosition || !isDirty}
						>
							{isUpdatingJobPosition ? "Updating..." : "Update Job Position"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
