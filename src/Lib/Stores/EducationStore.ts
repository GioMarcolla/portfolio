import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseEducation } from '@/Lib/Parsers/EducationParser';
import api from '@/Lib/Utils/AxiosUtils';
import { EducationType } from '@/Lib/zod/schemas';

export const useEducationDataStore = create(
    createLazyStore<EducationType[]>(async () => {
        try {
            const res = await api.get("/education");
            console.log(
                "Bio data updated at " + new Date().toLocaleDateString("en-us")
            );

            return parseEducation(res.data);
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
