import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT || "4000",
    dbCNN: process.env.DB_CNN
};

export default config;