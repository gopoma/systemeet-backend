import { Request, Response } from "express";
import { UserService } from "../services";

class UserController {
    public static async create(req: Request, res: Response) {
        const result = await UserService.create(req.body);

        return res.status(result.success ? 201 : 400).json(result);
    }

    public static async getAll(req: Request, res: Response) {
        const result = await UserService.getAll();

        return res.status(result.success ? 200 : 500).json(result);
    }

    public static async get(req: Request, res: Response) {
        return res.status(200).json({
            success: true,
            message: `Sending user with id ${req.params.idUser}`
        });
    }

    public static async edit(req: Request, res: Response) {
        return res.status(202).json({
            success: true,
            message: `Editing user with id ${req.params.idUser}`
        });
    }

    public static async update(req: Request, res: Response) {
        return res.status(202).json({
            success: true,
            message: `Updating user with id ${req.params.idUser}`
        });
    }

    public static async delete(req: Request, res: Response) {
        return res.status(202).json({
            success: true,
            message: `Deleting user with id ${req.params.idUser}`
        });
    }
}

export default UserController;