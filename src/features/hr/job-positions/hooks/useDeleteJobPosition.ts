import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { JOB_POSITIONS } from "../../index";

export const useDeleteJobPosition = (id: number) => {
	const { mutate: deleteJobPosition, isPending: isDeletingJobPosition } =
		useApiMutation({
			axiosRequestMethod: "delete",
			queryKey: [JOB_POSITIONS],
			requestURL: `/api/v1/job-titles/${id}`,
			successMsg: "Job Position deleted successfully",
		});

	return { deleteJobPosition, isDeletingJobPosition };
};
