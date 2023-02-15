import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";

export function createAjv() {
    const ajv = new Ajv({ allErrors: true });
    ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
    addFormats(ajv, ["date", "email", "uri"])
        .addKeyword("kind")
        .addKeyword("modifier");
    addErrors(ajv);

    return ajv;
}

import { Type, Static } from "@sinclair/typebox";
const UserSchema = Type.Object(
    {
        birthday: Type.String({
            format: "date",
            errorMessage: {
                type: "Introduzca una fecha >:v",
                format: "Introduzca una fecha válida >:v"
            }
        })
    },
    {
        additionalProperties: false,
        errorMessage: {
            type: "envía un objeto >:v",
            additionalProperties: "No mandes más de lo que se pide >:V",
            required: {
                birthday: "Introduzca un birthday >:v"
            }
        }
    }
);
type User = Static<typeof UserSchema>
const user: User = {birthday: "2004-12-32"};


const ajv = createAjv();
const validateSchema = ajv.compile(UserSchema);

console.log(validateSchema(user), "xd", validateSchema.errors);
