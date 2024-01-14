
import { NextRequest, NextResponse } from "next/server";
import { playerBodySchema, PlayerBody } from "@/types/player.types";
import { getPlayers, postOrPutPlayer } from "@/services/player.service";


/**
 * GET all players
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
        const players = await getPlayers();
        return NextResponse.json(players, { status: 200});
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    };
};


/**
 * POST new player
 * @async
 * @param {NextRequest} req - Request object
 * @param {NextResponse} res - Response object
 * @returns {Promise<NextResponse>} - Asynchronous operation with the response object
 */
export async function POST (
    req: NextRequest,
    res: NextResponse
    ){
    try {
        const body: PlayerBody = await req.json();
        const validatedBody = playerBodySchema.safeParse(body);

        if(!validatedBody.success) {
            return NextResponse.json(validatedBody.error, { status: 400 });
        };
        const player = await postOrPutPlayer(body);
        return NextResponse.json(player, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    };
};