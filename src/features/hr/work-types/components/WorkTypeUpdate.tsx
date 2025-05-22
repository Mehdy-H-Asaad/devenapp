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
import { TWorkTypeDTO, useUpdateWorkType } from "../index";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useEffect } from "react";

export const WorkTypeUpdate = (workType: TWorkTypeDTO) => {
	const { UpdateWorkTypeForm, isUpdatingWorkType, onUpdateWorkType } =
		useUpdateWorkType(workType.id);

	const { isValid, isDirty } = useFormState({
		control: UpdateWorkTypeForm.control,
	});

	useEffect(() => {
		if (workType) {
			UpdateWorkTypeForm.reset(workType);
		}
	}, [workType, UpdateWorkTypeForm]);

	return (
		<CustomDialog title="Work Types" trigger="update work type">
			<Form {...UpdateWorkTypeForm}>
				<form
					onSubmit={UpdateWorkTypeForm.handleSubmit(onUpdateWorkType)}
					className="grid gap-4"
				>
					<FormField
						control={UpdateWorkTypeForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Work Type</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Work Type" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton disabled={!isValid || isUpdatingWorkType || !isDirty}>
							{isUpdatingWorkType ? "Updating..." : "Update Work Type"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
