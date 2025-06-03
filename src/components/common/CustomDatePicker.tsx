import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { CustomSelect } from "./CustomSelect";

type TCustomDatePicker<T extends FieldValues, K extends Path<T>> = {
	field: ControllerRenderProps<T, K>;
};

const CustomDatePicker = <T extends FieldValues, K extends Path<T>>({
	field,
}: TCustomDatePicker<T, K>) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const initialDate = field.value ? new Date(field.value) : new Date();
	const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

	const YEARS_OPTIONS = Array.from({ length: 100 }, (_, i) => {
		const year = new Date().getFullYear() - i;
		return { value: year, label: year.toString() };
	});

	const handleYearChange = (
		option: { value: number; label: string } | null
	) => {
		if (!option) return;

		const updatedDate = new Date(selectedDate);
		updatedDate.setFullYear(option.value);
		setSelectedDate(updatedDate);
		field.onChange(updatedDate);
	};

	const handleDateSelect = (date: Date | undefined) => {
		if (!date) return;
		setSelectedDate(date);
		const formattedDate = format(date, "yyyy-MM-dd");
		field.onChange(formattedDate);
	};

	const handleMonthChange = (date: Date) => {
		setSelectedDate(date);
		const formattedDate = format(date, "yyyy-MM-dd");
		field.onChange(formattedDate);
	};

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className="w-full border pl-3 text-left font-normal"
				>
					{field.value ? (
						format(new Date(selectedDate), "PPP")
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<div className="p-2">
					{/* <Select
						isSearchable
						value={{
							value: selectedDate.getFullYear(),
							label: selectedDate.getFullYear().toString(),
						}}
						onChange={handleYearChange}
						options={YEARS_OPTIONS}
						placeholder="Select year"
					/> */}
					<CustomSelect
						onChange={handleYearChange}
						options={YEARS_OPTIONS}
						placeholder="Select Year"
						value={{
							value: selectedDate.getFullYear(),
							label: selectedDate.getFullYear().toString(),
						}}
					/>
				</div>
				<Calendar
					mode="single"
					selected={selectedDate}
					onSelect={handleDateSelect}
					month={selectedDate}
					onMonthChange={handleMonthChange}
					className="rounded-md border shadow"
				/>
			</PopoverContent>
		</Popover>
	);
};

export default CustomDatePicker;
