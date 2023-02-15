import { Type } from "@sinclair/typebox";

export const firstNameDTOSchema = Type.String({
    maxLength: 255,
    errorMessage: {
        type: "firstName debe de ser del tipo texto",
        maxLength: "firstName debe tener como máximo 255 caracteres de longitud"
    }
});

export const lastNameDTOSchema = Type.String({
    maxLength: 255,
    errorMessage: {
        type: "lastName debe de ser del tipo texto",
        maxLength: "lastName debe contener como máximo 255 caracteres de longitud"
    }
});

export const emailDTOSchema = Type.String({
    format: "email",
    errorMessage: {
        type: "email debe de ser del tipo texto",
        format: "El formato del email no es válido, debe cumplir el RFC 5322"
    }
});

export const passwordDTOSchema = Type.String({
    format: "password",
    minLength: 6,
    errorMessage: {
        type: "password debe de ser del tipo texto",
        format: "El formato de password debe contener una mayúscula, una minúcula y un número",
        minLength: "password debe contener al menos 6 caracteres de longitud"
    }
});

export enum Role {
    REGULAR = "REGULAR",
    ADMIN = "ADMIN"
}

// export const roleDTOSchema = Type.Enum(Role, {
//     message: (value: string) => `role debe ser REGULAR o ADMIN, se recibió ${value}`
// });

export const birthdayDTOSchema = Type.Date({
    errorMessage: {
        type: "birthday debe de ser del tipo Date",
    }
});

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    NOT_SPECIFIED = "NOT_SPECIFIED"
}

// export const genderDTOSchema = Type.Enum(Gender, {
// message: (value: string) => `gender debe ser MALE, FEMALE o NOT_SPECIFIED, se recibió ${value}`
// });
