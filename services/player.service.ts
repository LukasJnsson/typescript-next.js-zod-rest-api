
import db from "@/configs/db.config";
import Player from "@/models/player.model";
import { PlayerParams, PlayerBody } from "@/types/player.types";


/**
 * Retrieves all players
 * @async
 * @returns {Promise<Array<Object>>} - An array with the player objects
 */
export async function getPlayers() {
    try {
        await db.connect();
        const players = await Player.find().select('-_id -__v');
        return players;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Retrieves player by id
 * @async
 * @param {String} id - Player id
 * @returns {Promise<Object>} - Player object
 */
export async function getPlayerById({ id }: PlayerParams) {
    try {
        await db.connect();
        const player = await Player.find({ id }).select('-_id -__v');
        return player;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Creates or updates player
 * @async
 * @param {PlayerBody} body - Object with the body
 * @param {PlayerParams} [params] - Object with the params
 * @returns {Promise<Object>} - Player object
 */
export async function postOrPutPlayer(body: PlayerBody, params?: PlayerParams) {
    try {
        await db.connect();
        const query = { id: params?.id };
        const options = { upsert: true, new: true };
        const player = await Player.findOneAndUpdate(query, body, options).select('-_id -__v');
        return player;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Deletes player by id
 * @async
 * @param {String} id - Player id
 * @returns {Promise<Object>} - Player object
 */
export async function deletePlayerById({ id }: PlayerParams) {
    try {
        await db.connect();
        const player = await Player.deleteOne({ id });
        return player;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};