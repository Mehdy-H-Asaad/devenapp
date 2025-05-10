import z from "zod";

export const baseAuthSchema = z.object({
	email: z.string().min(1, "Required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Required")
		.min(8, "Password must be at least 8 characters"),
	confirm_password: z.string().min(1, "Required"),
	firstname: z.string().min(1, "Required"),
	lastname: z.string().min(1, "Required"),
	phone: z.string().optional(),
	address: z.string().optional(),
	code: z.string().min(1, "Required"),
});
