import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindUserByIdRepositoryCopy } from "./FindUserByIdRepositoryCopy";

export class FindUserByIdRepository implements FindUserByIdRepositoryCopy {
    async findUserById(id: string): Promise<Omit<user, "password"> | null> {
        const response = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                password: false,
                name: true,
                id: true,
                status: true,
                email: true,
                bi_number: true,
                date_birth: true,
                address: true,
                permitions: true,
                roles: true,
            }
        })

        return response
    }
}