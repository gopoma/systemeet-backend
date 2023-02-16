import { UserService } from "./";
import { Error } from "mongoose";
import { handleDBExceptions } from "../helpers";
import {
    RegisterDTO
} from "../dtos";

class AuthService {
    public static async register(data: RegisterDTO) {
        try {
            const result = await UserService.create(data);


            if(!result.success) {
                return result;
            }


            return {
                ...result
            };
        } catch(error) {
            handleDBExceptions(error as Error);
        }
    }

    public static async login() {
        return {};
    }
}

export default AuthService;