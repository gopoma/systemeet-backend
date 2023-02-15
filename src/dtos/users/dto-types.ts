import { Type } from "@sinclair/typebox";


export const firstNameDTOSchema = Type.String({
    isNotEmpty: true,
    maxLength: 255,
    transform: ["trim", "toLowerCase"],
    errorMessage: {
        type: "firstName debe de ser del tipo texto",
        isNotEmpty: "firstName no debe estar vacío",
        maxLength: "firstName debe tener como máximo 255 caracteres de longitud"
    }
});

export const lastNameDTOSchema = Type.String({
    isNotEmpty: true,
    maxLength: 255,
    transform: ["trim", "toLowerCase"],
    errorMessage: {
        type: "lastName debe de ser del tipo texto",
        isNotEmpty: "lastName no debe estar vacío",
        maxLength: "lastName debe contener como máximo 255 caracteres de longitud"
    }
});

export const emailDTOSchema = Type.String({
    format: "email",
    isNotEmpty: true,
    transform: ["trim", "toLowerCase"],
    errorMessage: {
        type: "email debe de ser del tipo texto",
        isNotEmpty: "email no debe estar vacío",
        format: "El formato del email no es válido, debe cumplir el RFC 5321"
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

export const roleDTOSchema = Type.String({
    isNotEmpty: true,
    enum: ["REGULAR", "ADMIN"],
    errorMessage: {
        type: "role debe de ser del tipo texto",
        isNotEmpty: "role no debe estar vacío",
        enum: "Introduzca un rol válido"
    }
});

export const birthdayDTOSchema = Type.String({
    isNotEmpty: true,
    format: "date",
    errorMessage: {
        type: "birthday debe de ser del tipo texto",
        isNotEmpty: "birthday no debe estar vacío",
        format: "El formato del birthday no es válido, debe cumplir el formato YYYY-MM-DD"
    }
});

export const genderDTOSchema = Type.String({
    isNotEmpty: true,
    enum: ["MALE", "FEMALE", "NOT_SPECIFIED"],
    errorMessage: {
        type: "gender debe de ser del tipo texto",
        isNotEmpty: "gender no debe estar vacío",
        enum: "Introduzca un género válido entre ['MALE', 'FEMALE', 'NOT_SPECIFIED']"
    }
});
