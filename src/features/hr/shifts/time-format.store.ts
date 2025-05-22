import { useCustomStore } from "@/shared/hooks/useCustomStore";

export type TTimeFormatSotre = {
	timeFormat: number;
};

export const useTimeFormatSotre = useCustomStore<TTimeFormatSotre>(
	{
		timeFormat: 12,
	},
	{
		shouldPersist: true,
		storeName: "time-format",
	}
);
