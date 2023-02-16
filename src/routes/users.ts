import { Router } from "express";
import { UserController } from "../controllers";
import { validateSchema } from "../middlewares";
import {
    CreateUserDTOSchema
} from "../dtos";


const router = Router();


router.post("/", validateSchema(CreateUserDTOSchema), UserController.create);
router.get("/", UserController.getAll);
router.get("/:idUser", UserController.get);
router.patch("/:idUser", UserController.edit);
router.put("/:idUser", UserController.update);
router.delete("/:idUser", UserController.delete);


export default router;