import { create } from "zustand";

type TAuthStore = {
	admin: string | null;
	setAdmin: (admin: string | null) => void;
};

export const useAuthStore = create<TAuthStore>(set => {
	const accessToken = localStorage.getItem("accessToken");

	return {
		admin: accessToken || null,
		setAdmin: (admin: string | null) => {},
	};
});
