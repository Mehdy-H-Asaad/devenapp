import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type TQueryClientProviderProps = {
	children: React.ReactNode;
};

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const QueryProvider = ({ children }: TQueryClientProviderProps) => {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
