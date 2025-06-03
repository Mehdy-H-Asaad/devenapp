import { MainButton } from "@/components/common/MainButton";
import { Link } from "react-router-dom";
import Select from "react-select";
export const EmployeeFilters = () => {
	const selectData = [
		{
			label: "Name",
		},
	];
	return (
		<div className="grid grid-cols-4  gap-6">
			<Select
				className="basic-single"
				classNamePrefix="select"
				defaultValue={selectData[0]}
				// isLoading={isLoading}
				isClearable
				isSearchable
				name="color"
				options={selectData}
			/>
			<Select
				className="basic-single"
				classNamePrefix="select"
				defaultValue={selectData[0]}
				// isLoading={isLoading}
				isClearable
				isSearchable
				name="color"
				options={selectData}
			/>
			<Select
				className="basic-single"
				classNamePrefix="select"
				defaultValue={selectData[0]}
				// isLoading={isLoading}
				isClearable
				isSearchable
				name="color"
				options={selectData}
			/>
			<Link to={"/employee/create-employee"}>
				<MainButton>Add Employee</MainButton>
			</Link>
		</div>
	);
};
