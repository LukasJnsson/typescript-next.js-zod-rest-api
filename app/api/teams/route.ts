
import { NextRequest, NextResponse } from "next/server";
import { teamBodySchema, TeamBody } from "@/types/team.types";
import { getTeams, postOrPutTeam } from "@/services/team.service";


/**
 * GET all teams
 * @async
 * @param {NextRequest} req - Request object
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function GET (
    req: NextRequest, 
    res: NextResponse
    ) {
    try {
        const teams = await getTeams();
        return NextResponse.json(teams, { status: 200});
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * POST new team
 * @async
 * @param {NextRequest} req - Request object
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function POST(
    req: NextRequest, 
    res: NextResponse  
    ) {
    try {
        const body: TeamBody = await req.json();
        const validatedBody = teamBodySchema.safeParse(body);

        if(!validatedBody.success) {
            return NextResponse.json(validatedBody.error, { status: 400 });
        };
        const team = await postOrPutTeam(body);
        return NextResponse.json(team,{ status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    };
};