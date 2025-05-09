import { payment } from "../generated/prisma";

export interface FindPaymentRepositoryCopy {
    findByNumber(id:string):Promise<payment | null>
}