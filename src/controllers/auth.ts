import { Request, Response } from "express";
import { AuthService } from "../services";
import { setTokenToCookie, deleteCookie } from "../helpers";

class AuthController {
    public static async register(req: Request, res: Response) {
        const result = await AuthService.register(req.body);
        return res.status(result?.success ? 202 : 400).json(result);
    }

    public static async login(req: Request, res: Response) {
        const result = await AuthService.login(req.body);
        return setTokenToCookie(res, result, 401);
    }

    public static logout(req: Request, res: Response) {
        return deleteCookie(res);
    }
}

export default AuthController;