import { HydratedDocument } from "mongoose";
import jwt from "jsonwebtoken";

import { IUser } from "../models";
import { UserService } from "./";
import { compare } from "../libs";
import config from "../config";
import {
    RegisterDTO,
    LoginDTO
} from "../dtos";


class AuthService {
    public static async register(data: RegisterDTO) {
        const result = await UserService.create(data);


        if(!result.success) {
            return result;
        }


        return { ...result };
    }

    public static async login(credentials: LoginDTO) {
        const user = await UserService.getByEmail(credentials.email);

        if(!user) {
            return {
                success: false,
                messages: ["Las credenciales son incorrectas"]
            };
        }


        const validPassword = await compare(credentials.password, user.password);

        if(!validPassword) {
            return {
                success: false,
                messages: ["Las credenciales son incorrectas"]
            };
        }


        return AuthService.getUserData(user);
    }

    private static getUserData(user: HydratedDocument<IUser>) {
        const userToTokenize = {
            id: user.id,
            displayName: user.displayName,
            email: user.email,
            role: user.role,
            birthday: user.birthday,
            gender: user.gender,
            profilePicture: user.profilePicture,
        };


        const token = AuthService.createToken(userToTokenize);
        return {
            success: true,
            user: userToTokenize,
            token
        };
    }

    private static createToken(payload: object): string {
        const token = jwt.sign(payload, config.secretJWTSeed as string, {
            expiresIn: "7d"
        });
        return token;
    }
}

export default AuthService;