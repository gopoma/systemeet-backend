import { Static, Type } from "@sinclair/typebox";
import {
    firstNameDTOSchema,
    lastNameDTOSchema,
    emailDTOSchema,
    passwordDTOSchema,
    birthdayDTOSchema,
    genderDTOSchema
} from "../users/types";


export const RegisterDTOSchema = Type.Object(
    {
        firstName: firstNameDTOSchema,
        lastName: lastNameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
        birthday: birthdayDTOSchema,
        gender: Type.Optional(genderDTOSchema)
    },
    {
        additionalProperties: false,
        errorMessage: {
            type: "Es necesario mandar un objeto",
            additionalProperties: "No proporciones más propiedades de las necesarias",
            required: {
                firstName: "Proporcione firstName",
                lastName: "Proporcione lastName",
                email: "Proporcione email",
                password: "Proporcione password",
                birthday: "Proporcione birthday"
            }
        }
    }
);


export type RegisterDTO = Static<typeof RegisterDTOSchema>