import { Router } from "express";
import { AuthController } from "../controllers";
import { validateSchema } from "../middlewares";
import {
    RegisterDTOSchema,
    LoginDTOSchema
} from "../dtos";


const router = Router();


router.post("/register", validateSchema(RegisterDTOSchema), AuthController.register);
router.post("/login", validateSchema(LoginDTOSchema), AuthController.login);
router.post("/logout", AuthController.logout);


export default router;