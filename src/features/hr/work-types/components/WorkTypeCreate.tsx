import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useCreateWorkType } from "../index";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";

export const WorkTypeCreate = () => {
	const { CreateWorkTypeForm, isCreatingWorkType, onCreateWorkType } =
		useCreateWorkType();

	const { isValid } = useFormState({ control: CreateWorkTypeForm.control });

	return (
		<CustomDialog title="Work Types" trigger="create work type">
			<Form {...CreateWorkTypeForm}>
				<form
					className="grid gap-4"
					onSubmit={CreateWorkTypeForm.handleSubmit(onCreateWorkType)}
				>
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
					<DialogFooter>
						<MainButton disabled={!isValid || isCreatingWorkType}>
							{isCreatingWorkType ? "Creating..." : "Create Work Type"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
