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
            const userWithNonSensitiveData = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.displayName,
                email: user.email,
                role: user.role,
                birthday: user.birthday,
                gender: user.gender,
            };


            return {
                success: true,
                user: userWithNonSensitiveData
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

    public static async getByEmail(email: string) {
        const user = await UserModel.findOne({ email });
        return user;
    }
}

export default UserService;