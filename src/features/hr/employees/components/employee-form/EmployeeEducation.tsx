import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdDelete } from "react-icons/md";

import { useFieldArray, UseFormReturn } from "react-hook-form";
import { TCreateEmployeeDTO } from "../../types/employee.types";
import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import CustomDatePicker from "@/components/common/CustomDatePicker";
import { Button } from "@/components/ui/button";

export const EmployeeEducation = ({
	form,
}: {
	form: UseFormReturn<TCreateEmployeeDTO>;
}) => {
	const { append, fields, remove } = useFieldArray({
		control: form.control,
		name: "education",
	});

	return (
		<div className="bg-main-form p-6 rounded-xl">
			<SectionMainTitle
				title="Education"
				className="border border-black rounded-md text-base mb-6 py-2 px-4"
			/>
			<div className="flex flex-col gap-6">
				{fields.map((field, index) => (
					<div key={field.id} className="flex flex-col gap-4">
						<MdDelete
							onClick={() => remove(index)}
							size={20}
							className="hover:text-red-600 duration-200 cursor-pointer"
						/>
						<div key={field.id} className="grid grid-cols-4 gap-8">
							<FormField
								control={form.control}
								name={`education.${index}.degree`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Degree</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Degree" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`education.${index}.field_of_study`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Field Of Study</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Field Of Study" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`education.${index}.institution`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Institution</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Institution" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name={`education.${index}.grade`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Grade</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Grade" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`education.${index}.start_date`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Start Date</FormLabel>
										<FormControl>
											<CustomDatePicker field={field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name={`education.${index}.end_date`}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Graduation Date</FormLabel>
										<FormControl>
											<CustomDatePicker field={field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
				))}
			</div>
			<Button
				className="w-fit  -blue mt-6"
				type="button"
				onClick={() =>
					append({
						degree: "",
						end_date: "",
						field_of_study: "",
						grade: "",
						institution: "",
						start_date: "",
						status: "",
					})
				}
			>
				Add Education
			</Button>
		</div>
	);
};
