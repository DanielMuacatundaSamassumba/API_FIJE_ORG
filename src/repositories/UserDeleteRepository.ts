import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { UserDeleteRepositoryCopy } from "./UserDeleteRepositoryCopy";

export class UserDeleteRepository implements UserDeleteRepositoryCopy {

    async delete(id: string): Promise< Omit<user ,"password">> {
        const response = await prisma.user.update({
            where: {
                id: id
            }, 
            data: {
                status: "0"
            },
            select:{
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