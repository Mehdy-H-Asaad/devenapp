import { axiosClient } from "@/api/axios";
import { UseQueryOptions, useQuery, QueryKey } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

type TUseApiQueryOptions<TResponse> = {
	queryKey: QueryKey;
	requestURL: string;
	axiosConfig?: AxiosRequestConfig;
	enabled?: boolean;
	showErrorToast?: boolean;
	errorMessage?: string;
} & Omit<
	UseQueryOptions<TResponse, any, TResponse, QueryKey>,
	"queryKey" | "queryFn"
>;

export const useApiQuery = <TResponse>({
	queryKey,
	requestURL,
	axiosConfig,
	enabled = true,
	errorMessage = "Something went wrong",
	...queryOptions
}: TUseApiQueryOptions<TResponse>) => {
	const query = useQuery<TResponse>({
		queryKey,
		queryFn: async () => {
			try {
				const { data } = await axiosClient.get<TResponse>(
					requestURL,
					axiosConfig
				);
				return data;
			} catch (error: any) {
				const normalizedError = {
					message:
						error?.response?.data?.message ||
						error?.response?.data?.detail ||
						errorMessage,
					status: error?.response?.status || 500,
				};
				throw normalizedError;
			}
		},
		enabled,
		...queryOptions,
	});

	return query;
};
