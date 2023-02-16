import { Error } from "mongoose";


export type ErrorResponse = {
    success: boolean;
    messages: string[]
};


export const handleDBExceptions = (error: Error): ErrorResponse => {
    if(error instanceof Error.ValidationError) {
        const messages = Object.values(error.errors).map(error => error.message);
        return {
            success: false,
            messages
        };
    } else {
        return {
            success: false,
            messages: ["Error no documentado"]
        };
    }
};