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
import { MARTIAL_STATUS } from "@/features/hr/shared/constants";
import { handleNumberFieldChecker } from "@/shared/utils/NumberFieldChecker";
import { CustomSelect } from "@/components/common/CustomSelect";
import { GENDER, PROBATION } from "../../constants/employee.constant";

export const EmployeePersonalInfo = ({
	form,
}: {
	form: UseFormReturn<TCreateEmployeeDTO>;
}) => {
	return (
		<div className="bg-main-form p-6 rounded-xl">
			<SectionMainTitle
				title="Personal Info"
				className="border border-black rounded-md text-base mb-6 py-2 px-4"
			/>
			<div className="grid grid-cols-4 gap-8">
				<FormField
					control={form.control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="First name" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Last name" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="personal_email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Personal Email</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Personal Email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Phone" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Gender</FormLabel>
							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									value={field.value}
									options={GENDER}
									placeholder="Gender"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="date_of_birth"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Birth Date</FormLabel>
							<FormControl>
								<CustomDatePicker field={field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="martial_status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Martial Status</FormLabel>
							<FormControl>
								<CustomSelect
									onChange={field.onChange}
									value={field.value}
									options={MARTIAL_STATUS}
									placeholder="Martial Status"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="children"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Children</FormLabel>
							<FormControl>
								<Input
									{...field}
									onChange={event => handleNumberFieldChecker({ event, field })}
									value={field.value ?? ""}
									placeholder="Children"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};
