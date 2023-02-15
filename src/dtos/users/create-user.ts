import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { Request, Response, NextFunction } from "express";
import {
    firstNameDTOSchema,
    lastNameDTOSchema,
    emailDTOSchema,
    passwordDTOSchema,
    birthdayDTOSchema,
} from "./dto-types";

const CreateUserDTOSchema = Type.Object(
    {
        firstName: firstNameDTOSchema,
        lastName: lastNameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
        birthday: birthdayDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: "El formato del objeto no es válido",
        }
    }
);

const ajv = new Ajv({ allErrors: true })
    .addKeyword("kind")
    .addKeyword("modifier");

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ["email"]);
addErrors(ajv);

const validateSchema = ajv.compile(CreateUserDTOSchema);

const createUserDTO = (req: Request, res: Response, next: NextFunction) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid) {
        return res.status(400).send({
            errors: validateSchema?.errors?.map((error) => error.message),
        });
    }

    next();
};

export default createUserDTO;