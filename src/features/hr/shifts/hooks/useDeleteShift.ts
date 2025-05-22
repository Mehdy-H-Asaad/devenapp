import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { SHIFTS } from "../../index";

export const useDeleteShift = (id: string) => {
	const { mutate: deleteShift, isPending: isDeletingShift } = useApiMutation({
		axiosRequestMethod: "delete",
		queryKey: [SHIFTS],
		requestURL: `/api/v1/shift/${id}`,
		successMsg: "Shift deleted successfully",
	});

	return { deleteShift, isDeletingShift };
};
