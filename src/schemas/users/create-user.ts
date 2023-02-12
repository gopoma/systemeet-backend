import { Schema } from "express-validator";

const CreateUserSchema: Schema = {
    firstName: {
        in: "body",
        isEmpty: {
            negated: true,
            errorMessage: "Proporcione firstName"
        },
        isString: {
            errorMessage: "firstName debe ser del tipo texto"
        },
        trim: true,
        isLength: {
            options: {
                min: 3,
                max: 1024
            },
            errorMessage: "firstName debe contener entre 3 y 1024 caracteres"
        }
    },
    lastName: {
        in: "body",
        isEmpty: {
            negated: true,
            errorMessage: "Proporcione lastName"
        },
        isString: {
            errorMessage: "lastName debe ser del tipo texto"
        },
        trim: true,
        isLength: {
            options: {
                min: 3,
                max: 1024
            },
            errorMessage: "lastName debe contener entre 3 y 1024 caracteres"
        }
    },
    email: {
        in: "body",
        isString: {
            errorMessage: "password debe ser del tipo texto"
        },
        trim: true,
        toLowerCase: true,
        isEmail: {
            errorMessage: "Proporcione un email válido"
        }
    },
    password: {
        in: "body",
        isEmpty: {
            negated: true,
            errorMessage: "Proporcione una contraseña"
        },
        isString: {
            errorMessage: "password debe ser del tipo texto"
        }
    },
    role: {
        in: "body",
        optional: true,
        isIn: {
            options: [["REGULAR", "ADMIN"]],
            errorMessage: "Proporcione un rol válido"
        }
    },
    birthday: {
        in: "body",
        isDate: {
            errorMessage: "Proporcione una fecha válida"
        },
        toDate: true
    },
    gender: {
        in: "body",
        optional: true,
        isIn: {
            options: [["MALE", "FEMALE", "NOT_SPECIFIED"]],
            errorMessage: "Proporcione un tipo válido"
        }
    }
};

export default CreateUserSchema;