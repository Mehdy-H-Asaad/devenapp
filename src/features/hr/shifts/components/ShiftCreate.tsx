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
import Select from "react-select";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useCreateShift } from "../index";
import { HOURS } from "../../index";
import { useTimeFormatSotre } from "../time-format.store";

export const ShiftCreate = () => {
	const { CreateShiftForm, isCreatingShift, onCreateShift } = useCreateShift();

	const { isValid } = useFormState({ control: CreateShiftForm.control });

	const { data } = useTimeFormatSotre();

	const timeFormatData =
		data.timeFormat === 12
			? HOURS
			: [
					...HOURS.map(hour => ({
						label: hour.value,
						value: hour.value,
					})),
			  ];

	return (
		<CustomDialog title="Shifts" trigger="create shift">
			<Form {...CreateShiftForm}>
				<form
					onSubmit={CreateShiftForm.handleSubmit(onCreateShift)}
					className="grid gap-4"
				>
					<FormField
						control={CreateShiftForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Shift</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Shift" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={CreateShiftForm.control}
						name="start_time"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Start Time</FormLabel>
								<FormControl>
									<Select
										{...field}
										isSearchable
										className="basic-single"
										classNamePrefix="select"
										options={timeFormatData}
										value={timeFormatData.find(
											option => field.value === option.value
										)}
										onChange={option => field.onChange(option?.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={CreateShiftForm.control}
						name="end_time"
						render={({ field }) => (
							<FormItem>
								<FormLabel>End Time</FormLabel>
								<FormControl>
									<Select
										{...field}
										isSearchable
										className="basic-single"
										classNamePrefix="select"
										options={timeFormatData}
										value={timeFormatData.find(
											option => option.value === field.value
										)}
										onChange={option => field.onChange(option?.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton disabled={!isValid || isCreatingShift}>
							{isCreatingShift ? "Creating..." : "Create shift"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
