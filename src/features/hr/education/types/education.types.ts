export type TEducation = {
	id?: number;
	company_id?: number;
	employee_id?: number;
	created_at?: string;
	updated_at?: string;
	created_by?: number;
	updated_by?: number;
	field_of_study: string;
	degree: string;
	institution: string;
	start_date: string;
	end_date: string;
	grade: string;
	status?: string;
};
