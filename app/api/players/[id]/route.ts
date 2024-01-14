
import { NextRequest, NextResponse } from "next/server";
import { PlayerParams, playerParamsSchema, PlayerBody, playerBodySchema } from "@/types/player.types";
import { getPlayerById, postOrPutPlayer, deletePlayerById } from "@/services/player.service";


/**
 * GET player by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {PlayerParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function GET (
    req: NextRequest,
    { params }: { 
        params: PlayerParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = playerParamsSchema.safeParse(params);
        if(!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        const player = await getPlayerById(params);
        return NextResponse.json(player, { status: 200});
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * PUT player by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {PlayerParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function PUT (
    req: NextRequest,
    { params }: {
        params: PlayerParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = playerParamsSchema.safeParse(params);
        const body: PlayerBody = await req.json();
        const validatedBody = playerBodySchema.safeParse(body);

        if (!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        if (!validatedBody.success) {
            return NextResponse.json(validatedBody.error, { status: 400 });
        };
        const player = await postOrPutPlayer(body, params);
        return NextResponse.json(player, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * DELETE player by id
 * @async
 * @param {NextRequest} req - Request object
 * @param {PlayerParams} params - Parameters for the request
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function DELETE (
    req: NextRequest,
    { params }: {
        params: PlayerParams
    },
    res: NextResponse
    ){
    try {
        const validatedParams = playerParamsSchema.safeParse(params);
        if(!validatedParams.success) {
            return NextResponse.json(validatedParams.error, { status: 400 });
        };
        const player = await deletePlayerById(params);
        return NextResponse.json(player, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};