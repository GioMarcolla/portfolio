import { BioDataType } from '@/Lib/Types/BioDataType';
import { calculateAgeFromBirthdateISO } from '@/Lib/Utils/AgeUtils';

export const parseBioData = (rawData: any): BioDataType => {
    return {
        Name: {
            First: rawData.Name.First,
            Middle: rawData.Name.Middle,
            Last: rawData.Name.Last,

            toString() {
                return [this.First, this.Middle, this.Last]
                    .filter(Boolean)
                    .join(" ");
            },
        },
        Nickname: rawData.Nickname,
        Birthdate: {
            Year: rawData.Birthdate.Year,
            Month: rawData.Birthdate.Month,
            Day: rawData.Birthdate.Day,

            toString() {
                return `${rawData.Birthdate.Year.toString().padStart(
                    4,
                    "0"
                )}/${rawData.Birthdate.Month.toString().padStart(
                    2,
                    "0"
                )}/${rawData.Birthdate.Day.toString().padStart(2, "0")}`;
            },
        },
        Gender: rawData.Gender,
        Profession: rawData.Profession,
        Nationalities: rawData.Nationalities,
        ResidentOf: {
            Country: rawData.ResidentOf.Country,
            State: rawData.ResidentOf.State,
            City: rawData.ResidentOf.City,

            toString() {
                return `${this.City}, ${this.State}, ${this.Country}`;
            },
        },
        get Age() {
            return calculateAgeFromBirthdateISO(
                `${this.Birthdate.Year}-${this.Birthdate.Month}-${this.Birthdate.Day}`
            );
        },
        toString() {
            return `${this.Name}, ${this.Profession}, ${this.Age}yo. Currently living in ${this.ResidentOf}.`;
        },
    };
};
