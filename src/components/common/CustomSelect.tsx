import Select, { SingleValue } from "react-select";

type TOptions = {
	label: string;
	value: string | number | boolean;
};

type TCustomSelect = {
	value?: string | number | boolean;
	onChange: (value: string | number | boolean | null) => void;
	options: TOptions[];
	placeholder?: string;
	isLoading?: boolean;
};

export const CustomSelect = ({
	value,
	placeholder,
	options,
	onChange,
	isLoading,
}: TCustomSelect) => {
	// console.log(value);

	// const selectedOption =
	// 	options.find(option => option.value.toString() === value?.toString()) ||
	// 	null;

	const handleChange = (selected: SingleValue<TOptions>) => {
		onChange(selected ? selected.value : null);
	};
	return (
		<Select
			isLoading={isLoading}
			className="border border-input flex flex-col rounded-md bg shadow-xs bg-transparent h-fit"
			styles={{
				control: provided => ({
					...provided,
					backgroundColor: "transparent",
					fontSize: "14px",
					borderWidth: "1px",
					borderColor: "#e7e3e4",
					outline: "none",
					border: "none",
					boxShadow: "none",
				}),
				menu: provided => ({
					...provided,
					paddingInline: "6px",
					borderRadius: "8px",
				}),
				option: (provided, state) => ({
					...provided,
					fontSize: "14px",
					paddingInline: "6px",
					paddingBlock: "6px",
					borderRadius: "8px",
					cursor: "pointer",
					backgroundColor: state.isSelected
						? "#2563eb"
						: state.isFocused
						? "oklch(0.967 0.001 286.375)"
						: "",
					":active": {
						backgroundColor: "oklch(0.967 0.001 286.375)",
						color: "black",
					},
					marginBlock: "2px",
				}),
			}}
			menuPlacement="auto"
			isDisabled={isLoading}
			isSearchable
			// value={selectedOption}
			onChange={handleChange}
			options={options}
			placeholder={placeholder}
		/>
	);
};
