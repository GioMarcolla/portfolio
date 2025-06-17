import { calculateAgeFromBirthdateISO } from "@/Lib/Utils/AgeUtils";
import { BioDataType } from "@/Lib/Types/BioDataType"

const _BioData: BioDataType = {
    Name: {
        First: "Giovanni",
        Middle: "",
        Last: "Marcolla",

        toString() {
            return [this.First, this.Middle, this.Last].filter(Boolean).join(' ');
        }
    },
    Nickname: "Gio",
    Birthdate: {
        Year: 1993,
        Month: 8,
        Day: 27,
        toString() {
            return "1993/08/27";
        }
    },
    Gender: "male",
    Profession: "Computer Engineer",
    Nationalities: ["Brazil", "Italy"],
    ResidentOf: {
        Country: "China",
        State: "Sichuan",
        City: "Chengdu",

        //  Allows the use of the Object's string representation without calling .toString() when uses in template literals
        toString() {
            return `${this.City}, ${this.State}, ${this.Country}`;
        },
    },

    // Causes a dynamically calculated value to behave as a static value. Can be called without using () due to the get keyword.
    get Age() {
        return calculateAgeFromBirthdateISO([this.Birthdate.Year, this.Birthdate.Month, this.Birthdate.Day].join("-"));
    },

    //  Allows the use of the Object's string representation without calling .toString() when uses in template literals
    toString() {
        return `${this.Name}, ${this.Profession}, ${this.Age}yo. Currently living in ${this.ResidentOf}.`;
    },
} as const;

export const BioData: Readonly<typeof _BioData> = Object.freeze(_BioData);
// console.log(BioData) -> the full object details (Key values pairs)
// console.log(`${BioData}`) -> Giovanni Marcolla, Computer Engineer, 31.802190280629706yo. Currently living in Chengdu, Sichuan, China.
// console.log(BioData.Age) -> number
