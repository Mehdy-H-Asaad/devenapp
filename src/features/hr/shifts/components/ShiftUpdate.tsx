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
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useUpdateShift } from "../index";
import { TShiftDTO } from "../index";
import { useEffect } from "react";
import Select from "react-select";
import { HOURS } from "../../index";
export const ShiftUpdate = (shift: TShiftDTO) => {
	const { UpdateShiftForm, isUpdatingShift, onUpdateShift } = useUpdateShift(
		shift.id
	);

	useEffect(() => {
		if (shift) {
			const formattedShift = {
				...shift,
				start_time: shift.start_time.split(":").slice(0, 2).join(":"),
				end_time: shift.end_time.split(":").slice(0, 2).join(":"),
			};
			UpdateShiftForm.reset(formattedShift);
		}
	}, [shift, UpdateShiftForm]);

	const { isValid, isDirty } = useFormState({
		control: UpdateShiftForm.control,
	});

	return (
		<CustomDialog title="Shifts" trigger="update shift" className="w-full">
			<Form {...UpdateShiftForm}>
				<form
					onSubmit={UpdateShiftForm.handleSubmit(onUpdateShift)}
					className="grid gap-4"
				>
					<FormField
						control={UpdateShiftForm.control}
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
						control={UpdateShiftForm.control}
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
										options={HOURS}
										value={HOURS.find(option => field.value === option.value)}
										onChange={option => field.onChange(option?.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={UpdateShiftForm.control}
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
										options={HOURS}
										placeholder={
											HOURS.find(
												hour =>
													hour.value ===
													shift.end_time.split(":").slice(0, 2).join(":")
											)?.label
										}
										value={HOURS.find(option => option.value === field.value)}
										onChange={option => field.onChange(option?.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DialogFooter>
						<MainButton disabled={!isValid || isUpdatingShift || !isDirty}>
							{isUpdatingShift ? "Updating..." : "Update Shift"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
