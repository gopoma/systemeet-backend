import { Response } from "express";
import config from "../config";
import { AuthResult, ErrorResult } from "../interfaces";
import { addDays } from "date-fns";


export const setTokenToCookie = (res: Response, result: AuthResult | ErrorResult, errCode: number) => {
    if(!result.success) {
        return res.status(errCode).json(result);
    }


    const { token, ...data } = result;

    return res.cookie("token", token, {
        httpOnly: true,
        secure: config.production,
        sameSite: "none",
        expires: addDays(new Date(), 7)
    }).json(data);
};

export const deleteCookie = (res: Response) => {
    return res.cookie("token", "", {
        httpOnly: true,
        secure: config.production,
        sameSite: "none",
        expires: new Date()
    }).json({
        success: true,
        message: "Sesión cerrada exitosamente"
    });
};
