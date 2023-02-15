import { UserModel } from "../models";
import { Error } from "mongoose";
import { handleDBExceptions } from "../helpers";

class UserService {
    public static async create(data: any) {
        try {
            const user = await UserModel.create(data);

            return {
                success: true,
                user
            };
        } catch(error) {
            return handleDBExceptions(error as Error.ValidationError);
        }
    }
}

export default UserService;