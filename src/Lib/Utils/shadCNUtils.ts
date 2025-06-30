import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Allow these variants only
type VariantPrefix =
    | "hover"
    | "focus"
    | "active"
    | "disabled"
    | "visited"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "dark"
    | "dark:sm"
    | "dark:md"
    | "group-hover";

// Enforce valid variant keys only
type VariantObject = Record<VariantPrefix, ClassValue>;

export function cn(...inputs: Array<ClassValue | VariantObject>): string {
    const expanded: ClassValue[] = [];

    for (const input of inputs) {
        if (
            typeof input === "object" &&
            input !== null &&
            !Array.isArray(input)
        ) {
            const entries = Object.entries(input) as [
                VariantPrefix,
                ClassValue
            ][];
            for (const [prefix, value] of entries) {
                if (typeof value === "string") {
                    const parts = value
                        .trim()
                        .split(/\s+/)
                        .map((cls) => `${prefix}:${cls}`);
                    expanded.push(...parts);
                } else {
                    expanded.push(value);
                }
            }
        } else {
            expanded.push(input);
        }
    }

    return twMerge(clsx(expanded));
}
