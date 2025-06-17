import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseExperienceData } from '@/Lib/Parsers/ExperienceDataParser';
import { ExperienceDataType } from '@/Lib/Types/ExperienceDataType';
import api from '@/Lib/Utils/AxiosUtils';

export const useExperienceDataStore = create(
    createLazyStore<ExperienceDataType[]>(async () => {
        try {
            const res = await api.get("/bio");
            console.log(
                "Bio data updated at " + new Date().toLocaleDateString("en-us")
            );

            return parseExperienceData(res.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error(err.message);
            } else {
                console.error("Unknown error", err);
            }

            throw err;
        }
    })
);
