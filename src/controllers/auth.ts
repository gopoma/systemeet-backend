import { Request, Response } from "express";

class AuthController {
    public static async register(req: Request, res: Response) {
        return res.status(200).json({
            success: true,
            message: "Register"
        });
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