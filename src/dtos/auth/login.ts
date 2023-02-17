import { Static, Type } from "@sinclair/typebox";
import {
    emailDTOSchema,
    passwordDTOSchema
} from "../users/types";


export const LoginDTOSchema = Type.Object(
    {
        email: emailDTOSchema,
        password: passwordDTOSchema
    },
    {
        additionalProperties: false,
        errorMessage: {
            type: "Es necesario mandar un objeto",
            additionalProperties: "No proporciones más propiedades de las necesarias",
            required: {
                email: "Proporcione email",
                password: "Proporcione password",
            }
        }
    }
);


export type LoginDTO = Static<typeof LoginDTOSchema>;
