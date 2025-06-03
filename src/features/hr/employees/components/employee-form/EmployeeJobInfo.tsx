import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";
import { TCreateEmployeeDTO } from "../../types/employee.types";
import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import CustomDatePicker from "@/components/common/CustomDatePicker";
import { useGetJobPositions } from "@/features/hr/job-positions";
import { useGetDepartments } from "@/features/hr/departments";
import { useGetShifts } from "@/features/hr/shifts";
import { useGetWorkTypes } from "@/features/hr/work-types";
import { handleNumberFieldChecker } from "@/shared/utils/NumberFieldChecker";

import { CustomSelect } from "@/components/common/CustomSelect";
export const EmployeeJobInfo = ({
	form,
}: {
	form: UseFormReturn<TCreateEmployeeDTO>;
}) => {
	const { jobPositions, isLoadingJobPositions } = useGetJobPositions();
	const { departments, isLoadingDepartments } = useGetDepartments();
	const { shifts, isLoadingShifts } = useGetShifts();
	const { workTypes, isLoadingWorkTypes } = useGetWorkTypes();

	const jobPositionsOptios = jobPositions?.map(ele => ({
		label: ele.name,
		value: ele.id,
	}));
	const departmentsOptions = departments?.map(ele => ({
		label: ele.name,
		value: ele.id,
	}));
	const shiftsOptions = shifts?.map(ele => ({
		label: ele.name,
		value: ele.id,
	}));
	const workTypesOptions = workTypes?.map(ele => ({
		label: ele.name,
		value: ele.id,
	}));

	return (
		<div className="bg-main-form p-6 rounded-xl">
			<SectionMainTitle
				title="Job Info"
				className="border border-black rounded-md text-base mb-6 py-2 px-4"
			/>
			<div className="grid grid-cols-4 gap-8">
				<FormField
					control={form.control}
					name="work_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Work Email</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Work Email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="job_title_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Job Position</FormLabel>

							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									options={jobPositionsOptios || []}
									placeholder={
										jobPositionsOptios?.find(pos => pos.value === field.value)
											?.label || "Job Position"
									}
									isLoading={isLoadingJobPositions}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="department_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Department</FormLabel>
							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									options={departmentsOptions || []}
									value={field.value}
									placeholder="Department"
									isLoading={isLoadingDepartments}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="shift_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Shift</FormLabel>
							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									options={shiftsOptions || []}
									placeholder={
										shiftsOptions?.find(shift => shift.value === field.value)
											?.label || "Shift"
									}
									isLoading={isLoadingShifts}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="work_type_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Work Type</FormLabel>
							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									options={workTypesOptions || []}
									placeholder={
										workTypesOptions?.find(
											workType => workType.value === field.value
										)?.label || "Work Type"
									}
									isLoading={isLoadingWorkTypes}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="years_of_experience"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Years Of Experience</FormLabel>
							<FormControl>
								<Input
									{...field}
									onChange={event => handleNumberFieldChecker({ event, field })}
									value={field.value === undefined ? "" : field.value}
									placeholder="Years Of Experience"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Status</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Status" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="date_of_joining"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Joining Date</FormLabel>
							<FormControl>
								<CustomDatePicker field={field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* <FormField
					control={form.control}
					name="reporting_manager_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Reporting Manager</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Reporting Manager" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/> */}
				<FormField
					control={form.control}
					name="in_probation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>In Probation</FormLabel>
							<FormControl>
								<Select onValueChange={value => field.onChange(Boolean(value))}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="In Probation" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>In Probation</SelectLabel>
											<SelectItem value="true">Yes</SelectItem>
											<SelectItem value="false">No</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="probation_period"
					render={({ field }) => {
						console.log(field.value);

						return (
							<FormItem>
								<FormLabel>Probation Period</FormLabel>
								<FormControl>
									<Input
										{...field}
										onChange={event =>
											handleNumberFieldChecker({ event, field })
										}
										value={field.value === null ? "" : field.value}
										placeholder="Probation Period"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="emergency_phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Emergency Phone</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Emergency Phone" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="emergency_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Emergency Email</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Emergency Email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};
export default EmployeeJobInfo;
