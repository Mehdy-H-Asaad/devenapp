import { CustomDialog } from "@/components/CustomDialog";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateWorkType } from "../hooks/useUpdateWorkType";

export const WorkTypeUpdate = ({ id }: { id: number }) => {
	const { UpdateWorkTypeForm, isUpdatingWorkType, onUpdateWorkType } =
		useUpdateWorkType(id);

	return (
		<CustomDialog
			isLoading={isUpdatingWorkType}
			isLoadingTitle="Updating..."
			mainButtonTitle="Update Work Type"
			onSubmit={UpdateWorkTypeForm.handleSubmit(onUpdateWorkType)}
			trigger="update work type"
		>
			<Form {...UpdateWorkTypeForm}>
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
			</Form>
		</CustomDialog>
	);
};
