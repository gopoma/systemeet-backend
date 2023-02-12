import { Router } from "express";
import { UserController } from "../controllers";
import { checkSchema } from "express-validator";
import {
    CreateUserSchema
} from "../schemas";
import { validateFields } from "../middlewares";

const router = Router();

router.post("/", checkSchema(CreateUserSchema), validateFields, UserController.create);
router.get("/", UserController.getAll);
router.get("/:idUser", UserController.get);
router.patch("/:idUser", UserController.edit);
router.put("/:idUser", UserController.update);
router.delete("/:idUser", UserController.delete);

export default router;