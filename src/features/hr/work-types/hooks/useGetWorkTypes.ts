import { useApiQuery } from "@/hooks/useApiQuery";
import { TWorkTypeDTO } from "../types";

export const useGetWorkTypes = () => {
	const { data: response, isLoading: isLoadingWorkTypes } = useApiQuery<
		TWorkTypeDTO[]
	>({
		queryKey: ["work-types"],
		requestURL: "/api/v1/work-type/",
	});

	return { workTypes: response?.data, isLoadingWorkTypes };
};
