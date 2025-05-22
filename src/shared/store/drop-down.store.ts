import { useCustomStore } from "@/shared/hooks/useCustomStore";

type TDropDownSotre = {
	isDropDownOpen: boolean;
};

export const useDropDownStore = useCustomStore<TDropDownSotre>({
	isDropDownOpen: false,
});
