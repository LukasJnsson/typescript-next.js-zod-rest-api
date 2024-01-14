
import db from "@/configs/db.config";
import Player from "@/models/player.model";
import { RosterParams } from "@/types/roster.types";


/**
 * Retrieves roster by team abbreviation
 * @async
 * @param {String} abbreviation - The team abbreviation
 * @returns {Promise<Array<Object>>} - An array with the player objects
 */
export async function getRosterByTeamAbbreviation({ abbreviation }: RosterParams) {
    try {
        await db.connect();
        const roster = await Player.aggregate([
            {
                $match: { teamAbbreviation: abbreviation.toUpperCase() }
            },
            {
                $lookup: {
                    from: 'teams',
                    localField: 'teamAbbreviation',
                    foreignField: 'abbreviation',
                    as: 'team'
                }
            },
            {
                $project: {
                    _id: 0,
                    __v: 0,
                    memberSince: 0,
                    team: {
                        _id: 0,
                        __v: 0,
                        memberSince: 0
                    }
                }
            }
        ]);
        return roster;
    }
    catch (err) {
        return err;
    }
    finally {
        await db.disconnect();
    };
};