import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TCustomStore<T> = {
	data: T;
	setData: (values: Partial<T>) => void;
	reset: (newInitial?: T) => void;
};

export const createCustomStore = <T>(
	initialData: T,
	persistOptions?: {
		shouldPersist?: boolean;
		storeName?: string;
	}
) => {
	const { shouldPersist = false, storeName } = persistOptions || {};

	const storeFn: StateCreator<TCustomStore<T>> = set => ({
		data: initialData,
		setData: values => set(state => ({ data: { ...state.data, ...values } })),
		reset: newInitial => set(() => ({ data: newInitial ?? initialData })),
	});

	if (shouldPersist && storeName) {
		return create<TCustomStore<T>>()(persist(storeFn, { name: storeName }));
	}

	return create<TCustomStore<T>>(storeFn);
};
