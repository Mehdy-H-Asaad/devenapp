import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { LOCATIONS } from "../../index";
import { TLocationDTO } from "../index";
import { TPagination } from "@/shared/types";

export const useGetLocations = (pagination: TPagination = {}) => {
	const {
		data: locations,
		isFetching: isLoadingLocations,
		metaData,
	} = useApiQuery<TLocationDTO[]>({
		queryKey: [LOCATIONS, pagination],
		requestURL: "/api/v1/location/",
		axiosConfig: {
			params: {
				limit: pagination.limit,
				page: pagination.current_page,
			},
		},
	});

	return { metaData, locations, isLoadingLocations };
};
