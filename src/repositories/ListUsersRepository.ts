import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { ListUserRepositoryCopy } from "./ListUserRepositoryCopy";
export class ListUserRepository implements ListUserRepositoryCopy {
    async list(): Promise<{ name: string; id: string; email: string; bi_number: string; date_birth: string; address: string; status: string; }[]> {
        const response = await prisma.user.findMany(
            {
                select: {
                    password: false,
                    name: true,
                    id: true,
                    email: true,
                    bi_number: true,
                    date_birth: true,
                    address:true,
                    status:true,
                }
            }
        );
        return response

    }
}