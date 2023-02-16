import { UserModel } from "../models";
import { Error, HydratedDocument } from "mongoose";
import { handleDBExceptions } from "../helpers";
import {
    CreateUserDTO
} from "../dtos";
import { IUser } from "../models/user";


class UserService {
    public static async create(data: CreateUserDTO) {
        try {
            const user: HydratedDocument<IUser> = await UserModel.create(data);

            return {
                success: true,
                user
            };
        } catch(error) {
            return handleDBExceptions(error as Error);
        }
    }

    public static async getAll() {
        try {
            const users = await UserModel.find();

            return {
                success: true,
                users
            };
        } catch(error) {
            return handleDBExceptions(error as Error);
        }
    }
}

export default UserService;