import { useTimeFormatSotre } from "../time-format.store";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
export const TimeFormat = () => {
	const timeFormateOptions = [
		{
			label: "12 Hour Format",
			value: 12,
		},
		{
			label: "24 Hour Format",
			value: 24,
		},
	];

	const { setData, data } = useTimeFormatSotre();

	return (
		<Select
			value={data.timeFormat.toString()}
			onValueChange={time => setData({ timeFormat: parseInt(time) })}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue
					placeholder={
						timeFormateOptions.find(time => time.value === data.timeFormat)
							?.label
					}
				/>
			</SelectTrigger>
			<SelectContent>
				{timeFormateOptions.map(time => (
					<SelectItem key={time.value} value={time.value.toString()}>
						{time.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
