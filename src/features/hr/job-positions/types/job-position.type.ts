export type TJobPositionsDTO = {
	id: number;
	name: string;
};

export type TCreateJobPositionDTO = Omit<TJobPositionsDTO, "id">;
export type TUpdateJobPositionDTO = TCreateJobPositionDTO;
