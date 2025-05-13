import { useApiMutation } from "@/hooks/useApiMutation";

export const useDeleteWorkType = (id: string) => {
	const { mutate: deleteWorkType, isPending: isDeletingWorkType } =
		useApiMutation({
			axiosRequestMethod: "delete",
			queryKey: ["work-types"],
			requestURL: `/api/v1/work-type/${id}`,
			successMsg: "Work Type deleted successfully",
		});

	return { deleteWorkType, isDeletingWorkType };
};
