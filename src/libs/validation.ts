import Ajv, { KeywordCxt, _ } from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import addKeywords from "ajv-keywords";


const validateNotEmpty = (cxt: KeywordCxt) => {
    const { data, schema } = cxt;
    if (schema) {
        cxt.fail(_`${data}.trim() === ''`);
    }
};

export const createAjv = () => {
    const ajv = new Ajv({ allErrors: true })
        .addKeyword("kind")
        .addKeyword("modifier")
        .addKeyword({
            keyword: "isNotEmpty",
            schemaType: "boolean",
            type: "string",
            code: validateNotEmpty,
            error: { message: "string field must be non-empty" }
        });


    addFormats(ajv, ["date", "email", "uri"])
        .addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);


    addErrors(ajv);
    addKeywords(ajv, ["transform"]);


    return ajv;
};