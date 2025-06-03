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
import { useGetLocations } from "@/features/hr/locations";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const EmployeeAddress = ({
	form,
}: {
	form: UseFormReturn<TCreateEmployeeDTO>;
}) => {
	const { locations } = useGetLocations();

	return (
		<div className="bg-main-form p-6 rounded-xl">
			<SectionMainTitle
				title="Address"
				className="border border-black rounded-md text-base mb-6 py-2 px-4"
			/>
			<div className="grid grid-cols-4 gap-8">
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Country" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="state"
					render={({ field }) => (
						<FormItem>
							<FormLabel>State</FormLabel>
							<FormControl>
								<Input {...field} placeholder="State" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>City</FormLabel>
							<FormControl>
								<Input {...field} placeholder="City" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address_line1"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Address</FormLabel>
							<FormControl>
								<Input {...field} placeholder="First Address" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address_line2"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Second Address</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Martial Status" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="postal_code"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Postal Code</FormLabel>
							<FormControl>
								<Input {...field} placeholder="Postal Code" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="location_id"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Location</FormLabel>
							<FormControl>
								<Select
									onValueChange={value =>
										field.onChange(Number(value.toString()))
									}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Location" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Locations</SelectLabel>
											{locations?.map(location => (
												<SelectItem
													key={location.id}
													value={location.id.toString()}
												>
													{location.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};
