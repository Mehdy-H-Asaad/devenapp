import { CustomDialog } from "@/components/CustomDialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useCreateWorkType } from "../hooks/useCreateWorkType";
import { Input } from "@/components/ui/input";

export const WorkTypeCreate = () => {
	const { CreateWorkTypeForm, isCreatingWorkType, onCreateWorkType } =
		useCreateWorkType();
	return (
		<CustomDialog
			isLoading={isCreatingWorkType}
			isLoadingTitle="Creating..."
			mainButtonTitle="Create Work Type"
			onSubmit={CreateWorkTypeForm.handleSubmit(onCreateWorkType)}
			trigger="create work type"
		>
			<Form {...CreateWorkTypeForm}>
				<FormField
					control={CreateWorkTypeForm.control}
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
