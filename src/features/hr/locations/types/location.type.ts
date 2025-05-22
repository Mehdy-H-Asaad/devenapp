export type TLocationDTO = {
	id: number;
	country: string;
	state: string;
	city: string;
	postal_code: string;
	address_line1: string;
	address_line2: string;
	name: string;
};

export type TCreateLocationDTO = Omit<TLocationDTO, "id">;
export type TUpdateLocationDTO = TCreateLocationDTO;
