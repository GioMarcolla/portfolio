import axios from 'axios';
import { create } from 'zustand';

import { createLazyStore } from '@/Lib/Factories/LazyStoreFactory';
import { parseBiodata } from '@/Lib/Parsers/BiodataParser';
import api from '@/Lib/Utils/AxiosUtils';

import { DeepOmit } from '../Utils/TypeUtils';
import { BiodataHelpers, BiodataType } from '../zod/schemas';

export const useBiodataStore = create(
    createLazyStore<BiodataType>(async () => {
        try {
            const res = await api.get<DeepOmit<BiodataType, BiodataHelpers>>(
                "/biodata"
            );
            console.log(
                "Bio data updated at " + new Date().toLocaleDateString("en-us")
            );

            return parseBiodata(res.data);
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
