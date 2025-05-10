import { axiosClient } from "@/api/axios";
import { customToast } from "@/components/Toast";
import {
	QueryKey,
	useMutation,
	UseMutationOptions,
	useQueryClient,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

type TUseApiMutationOptions<TResponse, TParams> = {
	queryKey?: QueryKey;
	requestURL: string;
	axiosRequestMethod: "post" | "put" | "delete";
	axiosConfig?: AxiosRequestConfig;
	errorMessage?: string;
	successMsg: string;
} & Omit<
	UseMutationOptions<TResponse, unknown, TParams>,
	"mutationFn" | "mutationKey"
>;

export const useApiMutation = <TResponse, TParams = void>({
	queryKey,
	requestURL,
	axiosRequestMethod,
	axiosConfig,
	successMsg,
	...mutationOptions
}: TUseApiMutationOptions<TResponse, TParams>) => {
	const queryClient = useQueryClient();

	const mutation = useMutation<TResponse, any, TParams>({
		mutationFn: async (values: TParams) => {
			try {
				const { data } = await axiosClient[axiosRequestMethod]<TResponse>(
					requestURL,
					values,
					axiosConfig
				);
				return data;
			} catch (error: any) {
				const normalizedError = {
					message: error?.response?.data?.message || "Something went wrong.",
					code: error?.response?.code || 500,
				};
				throw normalizedError;
			}
		},
		...mutationOptions,
		onSuccess: (data, variables, context) => {
			console.log("working");

			customToast.success(successMsg);
			mutationOptions?.onSuccess?.(data, variables, context);
		},
		onError: (error: any, variables, context) => {
			customToast.error(error.message);
			mutationOptions?.onError?.(error, variables, context);
		},
	});

	return { ...mutation, queryClient };
};
