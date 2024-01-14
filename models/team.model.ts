
import mongoose from "mongoose";


const team = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    abbreviation: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        unique: true
    },
    logo: String,
    memberSince: {
        type: Date,
        default: Date.now()
    }
});


const Team = mongoose.models['teams'] || mongoose.model('teams', team);


export default Team;