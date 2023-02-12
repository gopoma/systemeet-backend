import { Error } from "mongoose";

function handleDBExceptions(error: Error.ValidationError) {
    const messages = Object.values(error.errors).map(error => error.message);
    return {
        success: false,
        messages
    };
}

export default handleDBExceptions;