import { Static, Type } from "@sinclair/typebox";
import {
    firstNameDTOSchema,
    lastNameDTOSchema,
    emailDTOSchema,
    passwordDTOSchema,
    roleDTOSchema,
    birthdayDTOSchema,
    genderDTOSchema
} from "./types";


export const CreateUserDTOSchema = Type.Object(
    {
        firstName: firstNameDTOSchema,
        lastName: lastNameDTOSchema,
        email: emailDTOSchema,
        password: passwordDTOSchema,
        role: Type.Optional(roleDTOSchema),
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


export type CreateUserDTO = Static<typeof CreateUserDTOSchema>