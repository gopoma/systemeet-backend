import jwt from "jsonwebtoken";
import config from "../config";

export const createToken = (payload: object): string => {
    const token = jwt.sign(payload, config.secretJWTSeed as string, {
        expiresIn: "7d"
    });
    return token;
};
