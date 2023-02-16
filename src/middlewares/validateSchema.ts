import { createAjv } from "../libs";
import { ErrorObject, Schema } from "ajv";
import { Request, Response, NextFunction } from "express";


const ajv = createAjv();


// eslint-disable-next-line
const processErrors = (errors: ErrorObject<string, Record<string, any>, unknown>[] | null | undefined): string[] => {
    return errors?.map(error => error?.message || "Error no documentado") || [];
};


export const validateSchema = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validate = ajv.compile(schema);


        const isSchemaValid = validate(req.body);
        if(!isSchemaValid) {
            return res.status(400).json({
                success: false,
                messages: processErrors(validate.errors)
            });
        }


        return next();
    };
};
