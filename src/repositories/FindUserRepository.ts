import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindUserRepositoryCopy } from "./FindUserRepositoryCopy";

export class FindUserRepository implements FindUserRepositoryCopy {
    async findUser(email: string): Promise<user | null >{
        const response = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!response) {
            return null
        }

        return response
        
    }
}
