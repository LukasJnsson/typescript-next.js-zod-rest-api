
import { NextRequest, NextResponse } from "next/server";
import { RosterParams, rosterParamsSchema } from "@/types/roster.types";
import { getRosterByTeamAbbreviation } from "@/services/roster.service";


/**
 * GET roster by team abbreviation
 * @async
 * @param {NextRequest} req - Request object
 * @param {RosterParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function GET (
    req: NextRequest,
    { params }: { 
        params: RosterParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = rosterParamsSchema.safeParse(params);
        if(!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        const roster = await getRosterByTeamAbbreviation(params);
        return NextResponse.json(roster, { status: 200});
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};