import { z } from "zod";

export const shiftSchema = z.object({
	name: z.string().min(1, "Required"),
	start_time: z.string().min(1, "Required"),
	end_time: z.string().min(1, "Required"),
});
