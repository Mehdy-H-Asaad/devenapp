export type TWorkTypeDTO = {
	id: number;
	name: string;
};

export type TCreateWorkTypeDTO = Omit<TWorkTypeDTO, "id">;

export type TUpdateWorkTypeDTO = TCreateWorkTypeDTO;
