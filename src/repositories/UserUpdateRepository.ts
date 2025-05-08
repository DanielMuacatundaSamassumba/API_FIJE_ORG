import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { UserUpdateRepositoryCopy } from "./UserUpdateRepositoryCopy";

export class UserUpdateRepository implements UserUpdateRepositoryCopy {
    
    async update(data: user): Promise<user> {
        const response = await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                address: data.address,
                status: data.status,
                email: data.email,
                bi_number: data.bi_number,
                date_birth: data.date_birth
            }
        })
        return response
    }
}