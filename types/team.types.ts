
import { z } from "zod";


export const teamParamsSchema = z.object({
    id: 
    z.string()
    .refine((id) => /^[0-9]{1,2}$/.test(id), {
        message: 'Invalid id. Expected one or two characters.',
    }),
});
export type TeamParams = z.infer<typeof teamParamsSchema>;


export const teamBodySchema = z.object({
    id:
    z.string()
    .refine((id) => /^[0-9]{1,2}$/.test(id), {
        message: 'Invalid id. Expected one or two characters.',
    }),
    abbreviation: 
    z.string()
    .refine((abbreviation) => /^[A-Z]{3}$/.test(abbreviation), {
        message: 'Invalid abbreviation. Expected three characters.'
    }),
    name: 
    z.string()
    .refine((name) => /^[a-zA-Z ]{6,40}$/.test(name), {
        message: 'Invalid name. Exptected six to forty characters.'
    }),
    logo: z.string().url({ message: 'Invalid logo. Expected url.' })
});
export type TeamBody = z.infer<typeof teamBodySchema>;