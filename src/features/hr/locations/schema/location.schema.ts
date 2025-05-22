import { z } from "zod";

export const locationSchema = z.object({
	name: z.string().min(1, "Required").min(2, "Must be at least 2 characters"),
	state: z.string().min(1, "Required").min(2, "Must be at least 2 characters"),
	city: z.string().min(1, "Required").min(2, "Must be at least 2 characters"),
	postal_code: z
		.string()
		.min(1, "Required")
		.min(2, "Must be at least 2 characters"),
	address_line1: z
		.string()
		.min(1, "Required")
		.min(2, "Must be at least 2 characters"),
	address_line2: z
		.string()
		.min(1, "Required")
		.min(2, "Must be at least 2 characters"),
	country: z
		.string()
		.min(1, "Required")
		.min(2, "Must be at least 2 characters"),
});
