import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TPagination } from "@/shared/types";
import { SHIFTS } from "../../index";
import { TShiftDTO } from "../index";

export const useGetShifts = (pagination: TPagination = {}) => {
	const {
		data: shifts,
		isFetching: isLoadingShifts,
		metaData,
	} = useApiQuery<TShiftDTO[]>({
		queryKey: [SHIFTS, pagination],
		requestURL: "/api/v1/shift/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return {
		shifts,
		isLoadingShifts,
		metaData,
	};
};
