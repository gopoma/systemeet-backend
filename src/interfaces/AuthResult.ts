import { UserToTokenize } from "./UserToTokenize";


export interface AuthResult {
    success: true,
    user: UserToTokenize,
    token: string
}
