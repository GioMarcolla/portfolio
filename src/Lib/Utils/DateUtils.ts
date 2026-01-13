import { BasicDateType } from "@/Lib/zod/schemas";

export const geDurantionString = (startDate: BasicDateType, endDate: BasicDateType | undefined) => {
    const start = new Date(startDate.Year, startDate.Month - 1);
    const end = endDate
        ? new Date(endDate.Year, endDate.Month - 1)
        : new Date();
    const diffInMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    const years = Math.floor(diffInMonths / 12);
    const remainingMonths = diffInMonths % 12;
    const yearsPart = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthsPart =
        remainingMonths > 0
            ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
            : "";
    if (yearsPart && monthsPart) {
        return `${yearsPart} and ${monthsPart}`;
    }
    return yearsPart || monthsPart || "0 months";
};
