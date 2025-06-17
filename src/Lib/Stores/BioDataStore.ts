import { create } from "zustand";
import { createLazyStore } from "@/Lib/Factories/LazyStoreFactory";
import api from "@/Lib/Utils/AxiosUtils";
import { BioDataType } from "@/Lib/Types/BioDataType";
import { parseBioData } from "@/Lib/Parsers/BioDataParser";
import axios from "axios";

export const useBioDataStore = create(
    createLazyStore<BioDataType>(async () => {
        try {
            const res = await api.get("/bioData");
            console.log("Bio data updated at " + new Date().toLocaleDateString("en-us"))

            return parseBioData(res.data);
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
