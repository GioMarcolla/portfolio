import axios from "axios";
import { create } from "zustand";

import { createLazyStore } from "@/Lib/Factories/LazyStoreFactory";
import { parseEducation } from "@/Lib/Parsers/EducationParser";
import api from "@/Lib/Utils/AxiosUtils";
import { EducationHelpers, EducationType } from "@/Lib/zod/schemas";
import { DeepOmit } from "../Utils/TypeUtils";

export const useEducationDataStore = create(
    createLazyStore<EducationType[]>(async () => {
        try {
            const res = await api.get<
                DeepOmit<EducationType, EducationHelpers>[]
            >("/education");

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
