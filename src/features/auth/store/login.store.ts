import { create } from "zustand";
import { TUser } from "../types/auth.types";

type TLoginStore = {
	authUser: TUser;
	setAuthUser: (user: TUser) => void;
	clearAuth: () => void;
};

export const useLoginStore = create<TLoginStore>(set => ({
	authUser: {} as TUser,
	setAuthUser: (user: TUser) =>
		set(() => ({
			authUser: { ...user },
		})),
	clearAuth: () =>
		set(() => ({
			authUser: {} as TUser,
		})),
}));
