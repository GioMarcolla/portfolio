import { EducationType, EducationHelpers } from "@/Lib/zod/schemas";
import { DeepOmit } from "@/Lib/Utils/TypeUtils";

export function parseEducation(
    rawData: DeepOmit<EducationType, EducationHelpers>[]
): EducationType[] {
    return rawData.map((entry) => {
        const education = entry as EducationType;

        education.toString = function () {
            return `${this.Degree} in ${this.Major} at ${this.Institution} from ${this.DateStarted} to ${this.DateCompleted}. Minor in ${this.Track}`;
        };

        education.DateStarted.toString = function () {
            return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
        };

        if (education.DateCompleted) {
            education.DateCompleted.toString = function () {
                return [this.Day, this.Month, this.Year]
                    .filter(Boolean)
                    .join("/");
            };
        }

        education.Location.toString = function () {
            return `${this.City}, ${this.State}, ${this.Country}`;
        };

        return education;
    });
}
