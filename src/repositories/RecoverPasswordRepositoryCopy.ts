import { user } from "../generated/prisma";
import { RecoverPasswordDataType } from "../use-cases/types/RecoverPasswordDataType";
export interface RecoverPasswordRepositoryCopy {
    recover(data:Omit<RecoverPasswordDataType , "confNewPassword">): Promise<user>
}