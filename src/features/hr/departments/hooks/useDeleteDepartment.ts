import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { DEPARTMENTS } from "../../index";

export const useDeleteDepartment = (id: number) => {
	const {
		isSuccess,
		mutate: deleteDepartment,
		isPending: isDeletingDepartment,
	} = useApiMutation({
		axiosRequestMethod: "delete",
		queryKey: [DEPARTMENTS],
		requestURL: `/api/v1/department/${id}`,
		successMsg: "Department deleted succesfully",
	});

	return { isSuccess, deleteDepartment, isDeletingDepartment };
};
