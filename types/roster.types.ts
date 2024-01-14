
import { z } from "zod";


export const rosterParamsSchema = z.object({
    abbreviation:
    z.string()
    .refine((abbreviation) => /^[a-zA-Z]{3}$/.test(abbreviation), {
        message: 'Invalid abbreviation. Expected three characters.'
    })
});
export type RosterParams = z.infer<typeof rosterParamsSchema>;