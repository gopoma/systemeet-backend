import { HydratedDocument } from "mongoose";

import {
    RegisterDTO,
    LoginDTO
} from "../dtos";
import { UserService } from "./";
import { IUser } from "../models";
import { compare } from "../libs";
import { createToken } from "../helpers";
import { AuthResult, ErrorResult, UserToTokenize } from "../interfaces";


class AuthService {
    public static async register(data: RegisterDTO) {
        const result = await UserService.create(data);


        if(!result.success) {
            return result;
        }


        return { ...result };
    }

    public static async login(credentials: LoginDTO): Promise<AuthResult | ErrorResult> {
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

    private static getUserData(user: HydratedDocument<IUser>): AuthResult {
        const userToTokenize: UserToTokenize = {
            id: user.id,
            displayName: user.displayName,
            email: user.email,
            role: user.role,
            birthday: user.birthday,
            gender: user.gender,
            profilePicture: user.profilePicture,
        };


        const token = createToken(userToTokenize);
        return {
            success: true,
            user: userToTokenize,
            token
        };
    }
}

export default AuthService;