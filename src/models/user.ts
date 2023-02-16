import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { encrypt } from "../libs";


export interface IUser {
    _id: mongoose.Types.ObjectId,
    firstName: string,
    lastName: string,
    displayName: string,
    email: string,
    password: string,
    role: string,
    birthday: Date,
    gender: string,
    profilePicture?: string,
    isEmailValid: boolean,
    emailValidationUUID?: string,
    emailValidationUUIDExpiration?: Date,
    provider: Provider,
    idProvider: IdProvider
}

interface Provider {
    local: boolean,
    facebook: boolean,
    google: boolean,
    twitter: boolean,
    github: boolean,
}

interface IdProvider {
    facebook: string,
    google: string,
    twitter: string,
    github: string
}

const userSchema = new mongoose.Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    displayName: String,
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: {
            values: ["REGULAR", "ADMIN"],
            default: "REGULAR"
        }
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ["MALE", "FEMALE", "NOT_SPECIFIED"],
            default: "NOT_SPECIFIED"
        },
    },
    profilePicture: String,
    isEmailValid: {
        type: Boolean,
        default: false
    },
    emailValidationUUID: String,
    emailValidationUUIDExpiration: Date,
    provider: {
        local: Boolean,
        facebook: Boolean,
        google: Boolean,
        twitter: Boolean,
        github: Boolean
    },
    idProvider: {
        facebook: String,
        google: String,
        twitter: String,
        github: String
    }
}, { timestamps: true });
userSchema.plugin(uniqueValidator, { message: "{VALUE} ya ha sido registrado" });

userSchema.pre("save", function(next) {
    if(!this.isModified("firstName") && !this.isModified("lastName")) {
        return next();
    }

    this.displayName = `${this.firstName} ${this.lastName}`;
    return next();
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        return next();
    }

    this.password = await encrypt(this.password);

    return next();
});

export const UserModel = mongoose.model<IUser>("user", userSchema);