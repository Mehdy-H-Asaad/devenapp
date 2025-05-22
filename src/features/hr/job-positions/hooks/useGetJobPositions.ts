import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TJobPositionsDTO } from "../index";
import { JOB_POSITIONS } from "../../index";
import { TPagination } from "@/shared/types";

export const useGetJobPositions = (pagination: TPagination = {}) => {
	const {
		data: jobPositions,
		isFetching: isLoadingJobPositions,
		metaData,
	} = useApiQuery<TJobPositionsDTO[]>({
		queryKey: [JOB_POSITIONS, pagination],
		requestURL: "/api/v1/job-title/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return { metaData, jobPositions, isLoadingJobPositions };
};
