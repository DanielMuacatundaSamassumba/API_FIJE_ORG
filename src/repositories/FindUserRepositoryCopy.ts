import { user } from "../generated/prisma";

export interface FindUserRepositoryCopy {
    findUser(email: string): Promise< Omit<user, "password"> | null>
}