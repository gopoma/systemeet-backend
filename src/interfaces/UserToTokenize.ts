import { IUser } from "../models";


export type UserToTokenize = Pick<IUser, "id" | "displayName" | "email" | "role" | "birthday" | "gender" | "profilePicture">
