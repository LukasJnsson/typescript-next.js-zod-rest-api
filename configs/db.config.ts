
import mongoose from "mongoose";


export default {
    async connect(): Promise<void> {
        try {
            await mongoose.connect(String(process.env.MONGODB_URI));
            console.log('Connected...');
        }
        catch (err) {
            console.error(err);
        };
    },
    async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
            console.log('Disconnected...');
        }
        catch (err) {
            console.error(err);
        };
    }
};