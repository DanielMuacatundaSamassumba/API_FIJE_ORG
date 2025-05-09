import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindUserRepositoryCopy } from "./FindUserRepositoryCopy";

export class FindUserRepository implements FindUserRepositoryCopy {
    async findUser(email: string): Promise< Omit<user, "password"> | null>{
        const response = await prisma.user.findUnique({
            where: {
                email: email,
            },
            select:{
                name: true,
                id: true,
                email: true,
                bi_number: true,
                date_birth: true,
                address: true,
                password: false,
                status: true,
                permitions: true,
                roles: true
            }
        });

        if (!response) {
            return null
        }

        return response
        
    }
}
