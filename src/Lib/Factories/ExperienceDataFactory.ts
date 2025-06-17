import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";

export const createExperienceDataFactory = (
    newData: Omit<ExperienceDataType, "toString">
): ExperienceDataType => {
    const data = {
        ...newData,
    } as ExperienceDataType;

    data.toString = function () {
        return `${this.Level} ${this.JobTitle} at ${this.CompanyName}${
            this.Department ? " - " + this.Department : ""
        }${this.Team ? " " + this.Team + " team" : ""} from ${
            this.DateStarted
        } to ${this.DateEnd}.`;
    };

    data.DateStarted.toString = function () {
        return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
    };

    if (data.DateEnd) {
        data.DateEnd.toString = function () {
            return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
        };
    }

    data.Location.toString = function() {
        return `${this.City}, ${this.State}, ${this.Country}`
    }

    return data;
};
