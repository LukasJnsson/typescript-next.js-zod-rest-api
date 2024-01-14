
import db from "@/configs/db.config";
import Team from "@/models/team.model";
import { TeamParams, TeamBody } from "@/types/team.types";


/**
 * Retrieves all teams
 * @async
 * @returns {Promise<Array<Object>>} - An array with the team objects
 */
export async function getTeams() {
    try {
        await db.connect();
        const teams = await Team.find().select('-_id -__v');
        return teams;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Retrieves team by id
 * @async
 * @param {String} id - Team id
 * @returns {Promise<Object>} - Team object
 */
export async function getTeamById({ id }: TeamParams) {
    try {
        await db.connect();
        const team = await Team.find({ id }).select('-_id -__v');
        return team;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Creates or updates team
 * @async
 * @param {TeamBody} body - Object with the body
 * @param {TeamParams} [params] - Object with the params
 * @returns {Promise<Object>} - Team object
 */
export async function postOrPutTeam(body: TeamBody, params?: TeamParams) {
    try {
        await db.connect();
        const query = { id: params?.id };
        const options = { upsert: true, new: true };
        const team = await Team.findOneAndUpdate(query, body, options).select('-_id -__v');
        return team;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};


/**
 * Deletes team by id
 * @async
 * @param {String} id - Team id
 * @returns {Promise<Object>} - Team object
 */
export async function deleteTeamById({ id }: TeamParams) {
    try {
        await db.connect();
        const team = await Team.deleteOne({ id });
        return team;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};