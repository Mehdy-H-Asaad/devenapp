import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TDepartmentsDTO } from "../index";
import { DEPARTMENTS } from "../../index";
import { TPagination } from "@/shared/types";

export const useGetDepartments = (pagination: TPagination = {}) => {
	const {
		data: departments,
		isFetching: isLoadingDepartments,
		metaData,
	} = useApiQuery<TDepartmentsDTO[]>({
		queryKey: [DEPARTMENTS, pagination],
		requestURL: "/api/v1/department/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return { metaData, isLoadingDepartments, departments };
};
