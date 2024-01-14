
import { z } from "zod";


export const playerParamsSchema = z.object({
    id: z.string().refine((id) => /^\d{7}$/.test(id), {
        message: 'Invalid id. Expected seven characters.'
    })
});
export type PlayerParams = z.infer<typeof playerParamsSchema>;


export const playerBodySchema = z.object({
    id:
    z.string()
    .refine((id) => /^[0-9]{7}$/.test(id), {
        message: 'Invalid id. Exptected seven characters.',
    }),
    firstName:
    z.string()
    .refine((firstName) => /^[a-zA-Z]{2,25}$/.test(firstName), {
        message: 'Invalid firstName. Exptected two to twenty five characters.'
    }),
    lastName:
    z.string()
    .refine((lastName) => /^[a-zA-Z]{2,40}$/.test(lastName), {
        message: 'Invalid lastName. Exptected two to forty characters.'
    }),
    number:
    z.string()
    .refine((number) => /^[0-9]{1,2}$/.test(number), {
        message: 'Invalid number. Expected one or two characters.',
    }),
    birthDate:
    z.string()
    .refine((birthDate) => /^[0-9a-zA-Z-]{10}$/.test(birthDate), {
        message: 'Invalid birthDate. Exptected format "YYYY-MM-DD.'
    }),
    birthCountry:
    z.string()
    .refine((birthCountry) => /^[a-zA-Z ]{3}$/.test(birthCountry), {
        message: 'Invalid birthCountry. Exptected three characters.'
    }),
    birthCity:
    z.string()
    .refine((birthCity) => /^[a-zA-Z ]{2,40}$/.test(birthCity), {
        message: 'Invalid birthCity. Exptected two to forty characters.'
    }),
    portrait: z.string().url({ message: 'Invalid portrait. Expected url.' }),
    teamAbbreviation:
    z.string()
    .refine((teamAbbreviation) => /^[A-Z]{3}$/.test(teamAbbreviation), {
        message: 'Invalid teamAbbreviation. Expected three capitalized characters.'
    }),
    position:
    z.enum(['forward', 'defenceman', 'goalie']),
    positionCode:
    z.enum(['R', 'L', 'C', 'D', 'G'])
});
export type PlayerBody = z.infer<typeof playerBodySchema>;