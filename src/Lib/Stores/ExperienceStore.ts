import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseExperience } from '@/Lib/Parsers/ExperienceParser';
import api from '@/Lib/Utils/AxiosUtils';
import { DeepOmit } from '@/Lib/Utils/TypeUtils';
import { ExperienceHelpers, ExperienceType } from '@/Lib/zod/schemas';

export const useExperienceStore = create(
    createLazyStore<ExperienceType[]>(async () => {
        try {
            const res = await api.get<DeepOmit<ExperienceType, ExperienceHelpers>[]>("/experience");


            return parseExperience(res.data);
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
