import { StateCreator } from "zustand";

type LazyState<T> = {
    data: T | null;
    lastFetched: number | null;
    isLoading: boolean;
    retryCount: number;
    retryTimeLeft: number;
    error: string | null;
    getData: () => Promise<T>;
};

type RetryState<T> = LazyState<T> & {
    retry: () => Promise<void>;
};

const ONE_HOUR = 1000 * 60 * 60;
const RETRY_DELAY = 3000; // 3 seconds
const MAX_RETRIES = 4; // Initial try + 3 retries = 4 total attempts

// Creates a lazy store that loads data once first accessed and only once per hour.
export const createLazyStore =
    <T>(fetchFn: () => Promise<T>): StateCreator<LazyState<T>> =>
    (set, get) => ({
        data: null,
        lastFetched: null,
        isLoading: false,
        retryCount: 0,
        retryTimeLeft: 0,
        error: null,
        getData: async () => {
            const { data, lastFetched } = get();

            if (data && lastFetched && Date.now() - lastFetched < ONE_HOUR)
                return data;

            await performFetch(fetchFn, set, get);
            const { data: freshData } = get();
            if (!freshData) throw new Error("Failed to load data");
            return freshData;
        },
    });

const performFetch = async <T>(
    fetchFn: () => Promise<T>,
    set: (state: Partial<LazyState<T>>) => void,
    get: () => LazyState<T>
) => {
    const { retryCount } = get();

    // Note: retryCount gets incremented in catch block, so this check is for subsequent calls

    set({ isLoading: true, error: null, retryTimeLeft: 0 });

    try {
        const freshData = await fetchFn();
        set({
            data: freshData,
            lastFetched: Date.now(),
            isLoading: false,
            retryCount: 0,
            retryTimeLeft: 0,
            error: null
        });
    } catch (error) {
        console.error(`API request failed (attempt ${retryCount + 1}):`, error);

        const newRetryCount = retryCount + 1;

        if (newRetryCount >= MAX_RETRIES) {
            // Max retries reached - show final error
            set({
                error: "Max retries exceeded. Please try refreshing the page.",
                isLoading: false,
                retryTimeLeft: 0
            });
            return;
        }

        // Show countdown before next retry attempt
        set({
            retryCount: newRetryCount,
            isLoading: false, // Show countdown, not loading spinner
            error: `Oh no! Seems like the server is taking a nap. Let me try again in ${RETRY_DELAY / 1000} seconds...`,
            retryTimeLeft: RETRY_DELAY / 1000
        });

        // Start countdown for next retry
        let timeLeft = RETRY_DELAY / 1000;
        const countdown = setInterval(() => {
            timeLeft--;
            set({ retryTimeLeft: timeLeft });

            if (timeLeft <= 0) {
                clearInterval(countdown);
                // Auto retry after countdown
                performFetch(fetchFn, set, get);
            }
        }, 1000);
    }
};

// Creates a retry-enabled lazy store with loading states and countdown
export const createRetryStore =
    <T>(fetchFn: () => Promise<T>): StateCreator<RetryState<T>> =>
    (set, get) => ({
        data: null,
        lastFetched: null,
        isLoading: false,
        retryCount: 0,
        retryTimeLeft: 0,
        error: null,
        getData: async () => {
            const { data, lastFetched } = get();

            if (data && lastFetched && Date.now() - lastFetched < ONE_HOUR)
                return data;

            await performFetch(fetchFn, set, get);
            const { data: freshData } = get();
            if (!freshData) throw new Error("Failed to load data");
            return freshData;
        },
        retry: async () => {
            const state = get();
            if (state.isLoading) return;

            set({ retryCount: 0, error: null });
            await performFetch(fetchFn, set, get);
        },
    });
