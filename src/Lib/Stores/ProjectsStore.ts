import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseProject } from '@/Lib/Parsers/ProjectParser';
import api from '@/Lib/Utils/AxiosUtils';

import { DeepOmit } from '@/Lib/Utils/TypeUtils';
import { ProjectHelpers, ProjectType } from '@/Lib/zod/schemas';

export const useProjectsStore = create(
    createLazyStore<ProjectType[]>(async () => {
        try {
            const res = await api.get<
                DeepOmit<ProjectType, ProjectHelpers>[]
            >("/projects");

            console.log("Fetched projects data:", res.data);
            return parseProject(res.data);
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
