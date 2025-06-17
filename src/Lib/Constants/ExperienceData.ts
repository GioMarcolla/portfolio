import { createExperienceDataFactory } from "@/Lib/Factories/ExperienceDataFactory";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";

export type ListExperinceType = ExperienceDataType[];

const _EducationData: ListExperinceType = [
    createExperienceDataFactory({
        CompanyName: "GEOvendas",
        Department: "Software Development",
        Team: "Forca de Vendas",
        Country: "Brazil",
        State: "Santa Catarina",
        City: "Jaragua do Sul",
        JobTitle: "Full-Stack Software Engineer",
        JobType: "Full-Time",
        Level: "Mid",
        Responsibilities:
            "Refactor existing code, improve system performance, improve UI/UX, standardize frontend practices, integrate new external API, code REST APIs, cleanup API traffic, improve SQL/Databse performance and algorithms, and join architecture design meetings.",
        Description: `
            •	Took ownership of the front-end development for next version of the core system.
            •	Together with senior leadership, improved the development practices on data handling between front and back system, increasing overall performance by ~30%.
            •	As an experienced engineer, coached other developers and helped my squad become the highest performing squad at the company.
            •	Worked on new data flow methodologies between systems written in Java 8/17, Vaadin6/23, Spring, JPA, Coﬀee Script, Angular, C# and .NET.
            •	Worked as a core member on the development of a new B2B software for the Textile industry.
            `,
        DateStarted: {
            Year: 2023,
            Month: 7,
            Day: 0,
        },
        DateEnd: {
            Year: 2024,
            Month: 8,
            Day: 0,
        },
        CurrentJob: false,
    }),
] as const;

export const EducationData: Readonly<typeof _EducationData> =
    Object.freeze(_EducationData);
