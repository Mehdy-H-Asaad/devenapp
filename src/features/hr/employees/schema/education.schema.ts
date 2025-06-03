import { z } from "zod";

export const educationSchema = z.object({
	field_of_study: z.string().min(1, "Required"),
	degree: z.string().min(1, "Required"),
	institution: z.string().min(1, "Required"),
	start_date: z.string(),
	end_date: z.string(),
	grade: z.string().min(1, "Required"),
	status: z.string().optional(),
});
