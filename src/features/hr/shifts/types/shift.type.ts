export type TShiftDTO = {
	id: number;
	name: string;
	start_time: string;
	end_time: string;
};

export type TCreateShiftDTO = Omit<TShiftDTO, "id">;

export type TUpdateShiftDTO = TCreateShiftDTO;
