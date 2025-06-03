import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { EMPLOYEES } from "../../shared/query-keys";
import { TEmployeesDTO } from "../types/employee.types";
import { TPagination } from "@/shared/types";

export const useGetEmployees = (pagination: TPagination = {}) => {
	const {
		data: employees,
		isFetching: isLoadingEmployees,
		metaData,
	} = useApiQuery<TEmployeesDTO[]>({
		queryKey: [EMPLOYEES, pagination],
		requestURL: "/api/v1/employees/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return { employees, isLoadingEmployees, metaData };
};
