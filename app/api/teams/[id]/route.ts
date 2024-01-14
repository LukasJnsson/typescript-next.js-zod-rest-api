
import { NextRequest, NextResponse } from "next/server";
import { TeamParams, teamParamsSchema, TeamBody, teamBodySchema } from "@/types/team.types";
import { getTeamById, postOrPutTeam, deleteTeamById } from "@/services/team.service";


/**
 * GET team by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {TeamParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function GET (
    req: NextRequest,
    { params }: { 
        params: TeamParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = teamParamsSchema.safeParse(params);
        if(!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        const team = await getTeamById(params);
        return NextResponse.json(team, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * PUT team by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {TeamParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function PUT (
    req: NextRequest,
    { params }: { 
        params: TeamParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = teamParamsSchema.safeParse(params);
        const body: TeamBody = await req.json();
        const validatedBody = teamBodySchema.safeParse(body);

        if (!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        if (!validatedBody.success) {
            return NextResponse.json(validatedBody.error, { status: 400 });
        };
        const team = await postOrPutTeam(body, params);
        return NextResponse.json(team, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * DELETE team by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {TeamParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function DELETE (
    req: NextRequest,
    { params }: { 
        params: TeamParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = teamParamsSchema.safeParse(params);
        if(!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        const team = await deleteTeamById(params);
        return NextResponse.json(team, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};