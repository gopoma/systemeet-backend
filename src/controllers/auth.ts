import { Request, Response } from "express";
import { AuthService } from "../services";

class AuthController {
    public static async register(req: Request, res: Response) {
        const result = await AuthService.register(req.body);
        return res.json(result);
    }

    public static async login(req: Request, res: Response) {
        return res.status(200).json({
            success: true,
            message: "Login"
        });
    }

    public static logout(req: Request, res: Response) {
        return res.status(200).json({
            success: true,
            message: "Logout"
        });
    }
}

export default AuthController;