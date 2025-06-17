import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseEducationData } from '@/Lib/Parsers/EducationDataParser';
import { EducationDataType } from '@/Lib/Types/EducationDataType';
import api from '@/Lib/Utils/AxiosUtils';

export const useEducationDataStore = create(
    createLazyStore<EducationDataType[]>(async () => {
        try {
            const res = await api.get("/bio");
            console.log(
                "Bio data updated at " + new Date().toLocaleDateString("en-us")
            );

            return parseEducationData(res.data);
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
