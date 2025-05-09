import { payment } from "../generated/prisma";

export interface CreatePaymentRepositoryCopy {
    create(data:Omit<payment, "id">): Promise<payment>
}