import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { EMPLOYEES } from "../../shared/query-keys";

export const useDeleteEmployee = (id: number) => {
	const { mutate: deleteEmployee, isPending: isDeletingEmployee } =
		useApiMutation({
			axiosRequestMethod: "delete",
			queryKey: [EMPLOYEES],
			requestURL: `/api/v1/employees/${id}`,
			successMsg: "Employee deleted successfully",
		});

	return { deleteEmployee, isDeletingEmployee };
};
