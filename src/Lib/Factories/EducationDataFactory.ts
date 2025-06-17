import { EducationDataType } from "@/Lib/Types/EducationDataType";

export const createEducationDataFactory = (
    newData: Omit<EducationDataType, "toString">
): EducationDataType => {
    const data = {
        ...newData,
    };

    data.toString = function () {
        return `${this.Degree} in ${this.Major} at ${this.Institution} from ${this.DateStarted} to ${this.DateCompleted}. Minor in ${this.Track}`;
    };

    data.DateStarted.toString = function () {
        return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
    };

    if (data.DateCompleted) {
        data.DateCompleted.toString = function () {
            return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
        };
    }

    data.Location.toString = function () {
        return `${this.City}, ${this.State}, ${this.Country}`;
    };

    return data;
};
