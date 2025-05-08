import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { RecoverPasswordDataType } from "../use-cases/types/RecoverPasswordDataType";
import { RecoverPasswordRepositoryCopy } from "./RecoverPasswordRepositoryCopy";

export class RecoverPasswordRepository implements RecoverPasswordRepositoryCopy {
    async recover(data: Omit<RecoverPasswordDataType, "confNewPassword">): Promise<user> {
        const response = await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                password: data.newPassword
            }
        })
        return response
    }
}