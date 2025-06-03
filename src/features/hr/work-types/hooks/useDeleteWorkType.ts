import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { WORK_TYPES } from "../../index";

export const useDeleteWorkType = (id: string) => {
	const { mutate: deleteWorkType, isPending: isDeletingWorkType } =
		useApiMutation({
			axiosRequestMethod: "delete",
			queryKey: [WORK_TYPES],
			requestURL: `/api/v1/work-types/${id}`,
			successMsg: "Work Type deleted successfully",
		});

	return { deleteWorkType, isDeletingWorkType };
};
