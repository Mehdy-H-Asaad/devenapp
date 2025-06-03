import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TWorkTypeDTO } from "../index";
import { TPagination } from "@/shared/types";
import { WORK_TYPES } from "../../index";

export const useGetWorkTypes = (pagination: TPagination = {}) => {
	const {
		data: workTypes,
		isFetching: isLoadingWorkTypes,
		metaData,
	} = useApiQuery<TWorkTypeDTO[]>({
		queryKey: [WORK_TYPES, pagination],
		requestURL: "/api/v1/work-types/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return {
		workTypes,
		isLoadingWorkTypes,
		metaData,
	};
};
