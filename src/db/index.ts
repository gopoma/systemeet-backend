import mongoose from "mongoose";
import config from "../config";

async function doDBConnection() {
    try {
        mongoose.set("strictQuery", true);
        const conn = await mongoose.connect(config.dbCNN as string);
        // eslint-disable-next-line
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(error) {
        // eslint-disable-next-line
        console.log(error);
        throw new Error("Error when initializing DB");
    }
}

export default doDBConnection;