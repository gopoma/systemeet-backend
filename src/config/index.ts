import dotenv from "dotenv";
dotenv.config();


interface ConfigSettings {
    dbCNN: string,
    development: boolean,
    port: string,
    production: boolean,
    secretJWTSeed: string,
}


const config: ConfigSettings = {
    dbCNN: process.env.DB_CNN as string,
    development: process.env.NODE_ENV === "development",
    port: process.env.PORT || "4000",
    production: process.env.NODE_ENV === "production",
    secretJWTSeed: process.env.SECRET_JWT_SEED as string
};


export default config;