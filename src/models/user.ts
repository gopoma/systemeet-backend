import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { encrypt } from "../libs";

const userSchema = new mongoose.Schema({
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
        required: true,
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

const UserModel = mongoose.model("user", userSchema);
export default UserModel;