import { z } from "zod";
import { educationSchema } from "./education.schema";

export const employeeSchema = z.object({
	country: z.string().min(1, "Required"),
	state: z.string().min(1, "Required"),
	city: z.string().min(1, "Required"),
	postal_code: z.string().optional(),
	address_line1: z.string().min(1, "Required"),
	address_line2: z.string().min(1, "Required"),
	firstname: z.string().min(1, "Required"),
	lastname: z.string().min(1, "Required"),
	gender: z.string().min(1, "Required"),
	date_of_birth: z.string().min(1, "Required"),
	martial_status: z.string().min(1, "Required"),
	children: z.number({
		required_error: "Required, must be a number",
		invalid_type_error: "Required, must be a number",
	}),
	years_of_experience: z
		.number({
			invalid_type_error: "Must be a number",
		})
		.optional(),
	work_email: z.string().min(1, "Required").email("Email is not valid"),
	personal_email: z.string().min(1, "Required").email("Email is not valid"),
	phone: z.string().min(1, "Required"),
	emergency_phone: z.string().optional(),
	emergency_email: z.string().optional(),
	reporting_manager_id: z.union([z.number().min(0), z.null()]).optional(),
	location_id: z.number(),
	date_of_joining: z.string().min(1, "Required"),
	in_probation: z.boolean(),
	probation_period: z.union([z.number().min(0), z.null()]).optional(),
	status: z.string().min(1, "Required"),
	job_title_id: z.number(),
	department_id: z.number(),
	shift_id: z.number(),
	work_type_id: z.number(),
	education: z
		.array(educationSchema)
		.min(1, "At least one education entry is required"),
});
