import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { EMPLOYEES } from "../../shared/query-keys";
import { TEmployeesDTO } from "../types/employee.types";

export const useGetEmployeeById = (id: number) => {
	const { data: employee, isFetching: isLoadingEmployee } =
		useApiQuery<TEmployeesDTO>({
			queryKey: [EMPLOYEES, id],
			requestURL: `/api/v1/employees/${id}`,
			enabled: !!id,
		});

	return { employee, isLoadingEmployee };
};
