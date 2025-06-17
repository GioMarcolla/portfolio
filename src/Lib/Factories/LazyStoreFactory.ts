import { StateCreator } from "zustand";

type LazyState<T> = {
    data: T | null;
    lastFetched: number | null;
    getData: () => Promise<T>;
};

const ONE_HOUR = 1000 * 60 * 60;

// Creates a lazy store that loads data once first accessed and only once per hour.
export const createLazyStore =
    <T>(fetchFn: () => Promise<T>): StateCreator<LazyState<T>> =>
    (set, get) => ({
        data: null,
        lastFetched: null,
        getData: async () => {
            const { data, lastFetched } = get();

            if (data && lastFetched && Date.now() - lastFetched < ONE_HOUR)
                return data;

            const freshData = await fetchFn();
            set({ data: freshData, lastFetched: Date.now() });
            return freshData;
        },
    });
