import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { LOCATIONS } from "../../index";

export const useDeleteLocation = (id: number) => {
	const { mutate: deleteLocation, isPending: isDeletingLocation } =
		useApiMutation({
			axiosRequestMethod: "delete",
			queryKey: [LOCATIONS],
			requestURL: `/api/v1/locations/${id}`,
			successMsg: "Location deleted successfully",
		});

	return { deleteLocation, isDeletingLocation };
};
