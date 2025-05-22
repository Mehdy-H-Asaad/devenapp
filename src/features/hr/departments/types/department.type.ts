export type TDepartmentsDTO = {
	id: number;
	name: string;
};

export type TCreateDepartmentDTO = Omit<TDepartmentsDTO, "id">;
export type TUpdateDepartmentDTO = TCreateDepartmentDTO;
