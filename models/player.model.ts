
import mongoose from "mongoose";


const player = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    number: String,
    birthDate: String,
    birthCountry: String,
    birthCity: String,
    portrait: String,
    teamAbbreviation: String,
    position: String,
    positionCode: String
});


const Player = mongoose.models['players'] || mongoose.model('players', player);


export default Player;