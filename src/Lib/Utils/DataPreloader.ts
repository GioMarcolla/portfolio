import { useCallback } from 'react';
import { useExperienceStore } from '@/Lib/Stores/ExperienceStore';
import { useProjectsStore } from '@/Lib/Stores/ProjectsStore';
import { useEducationDataStore } from '@/Lib/Stores/EducationStore';
import { useBiodataStore } from '@/Lib/Stores/BiodataStore';

/**
 * Preloads all portfolio data in the background
 * Call this when the home page loads to prepare data for other pages
 *
 * Note: Each store handles its own retry logic (4 attempts total).
 * Failed preloads help "wake up" sleeping servers before users navigate to pages.
 */
export const preloadAllData = async () => {
    try {
        // Start all data fetches in parallel
        const promises = [
            useExperienceStore.getState().getData().catch(err => {
                return null;
            }),
            useProjectsStore.getState().getData().catch(err => {
                return null;
            }),
            useEducationDataStore.getState().getData().catch(err => {
                return null;
            }),
            useBiodataStore.getState().getData().catch(err => {
                return null;
            })
        ];

        await Promise.allSettled(promises);
    } catch (error) {
        console.error('Error preloading data:', error);
    }
};

/**
 * Hook to preload data when component mounts
 * Use this in components that should trigger preloading
 */
export const useDataPreloader = () => {
    const preloadData = useCallback(async () => {
        await preloadAllData();
    }, []);

    return { preloadData };
};