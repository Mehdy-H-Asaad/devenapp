import { TDepartmentsDTO } from "../../departments";
import { TEducation } from "../../education/types/education.types";
import { TJobPositionsDTO } from "../../job-positions";
import { TLocationDTO } from "../../locations";
import { TShiftDTO } from "../../shifts";
import { TWorkTypeDTO } from "../../work-types";

export type TEmployeesDTO = {
	id: number;
	// company_id: number;
	created_at?: string;
	updated_at?: string;
	created_by?: number;
	updated_by?: number;

	// Personal Info
	firstname: string;
	lastname: string;
	gender: string;
	date_of_birth: string;
	martial_status: string;
	children: number;
	years_of_experience?: number;

	// Address
	country: string;
	state: string;
	city: string;
	postal_code?: string;
	address_line1: string;
	address_line2: string;

	// Contact
	work_email: string;
	personal_email: string;
	phone: string;
	emergency_phone?: string;
	emergency_email?: string;

	// Job Info
	reporting_manager_id?: number | null;
	location_id: number;
	date_of_joining: string;
	in_probation: boolean;
	probation_period?: number | null;
	status: string;

	// Relations
	education: TEducation[];
	job_title: TJobPositionsDTO;
	department: TDepartmentsDTO;
	shift: TShiftDTO;
	work_type: TWorkTypeDTO;
	location: TLocationDTO;
};

export type TCreateEmployeeDTO = Omit<
	TEmployeesDTO,
	| "id"
	| "created_at"
	| "updated_at"
	| "created_by"
	| "updated_by"
	| "job_title"
	| "department"
	| "shift"
	| "work_type"
	| "location"
> & {
	job_title_id: number;
	department_id: number;
	shift_id: number;
	work_type_id: number;
	location_id: number;

	education: Omit<
		TEducation,
		| "id"
		| "company_id"
		| "employee_id"
		| "created_at"
		| "updated_at"
		| "created_by"
		| "updated_by"
	>[];
};

export type TUpdateEmployeeDTO = TCreateEmployeeDTO;
