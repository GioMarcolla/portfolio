import { calculateAgeFromBirthdateISO } from "@/Lib/Utils/AgeUtils";

import { DeepOmit } from "@/Lib/Utils/TypeUtils";
import { BiodataHelpers, BiodataType } from "@/Lib/zod/schemas";

export const parseBiodata = (
    rawData: DeepOmit<BiodataType, BiodataHelpers>
): BiodataType => {
    const biodata = rawData as BiodataType;

    biodata.Name.toString = function () {
        return [this.First, this.Middle, this.Last].filter(Boolean).join(" ");
    };

    biodata.Birthdate.toString = function () {
        return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
    };

    biodata.ResidentOf.toString = function () {
        return [this.City, this.State, this.Country].filter(Boolean).join(", ");
    };

    biodata.Age = function () {
        return calculateAgeFromBirthdateISO(
            [this.Birthdate.Day, this.Birthdate.Month, this.Birthdate.Year]
                .filter(Boolean)
                .join("-")
        );
    };

    biodata.toString = function () {
        return `${this.Name}, ${this.Profession}, ${this.Age}yo. Currently living in ${this.ResidentOf}.`;
    };

    return biodata;
};
