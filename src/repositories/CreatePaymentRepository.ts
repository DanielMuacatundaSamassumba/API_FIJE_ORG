import { payment } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { CreatePaymentRepositoryCopy } from "./CreatePaymentRepositoryCopy";

export class CreatePaymentRepository implements CreatePaymentRepositoryCopy {
    async create(data: Omit<payment, "id">): Promise<payment> {
        const response = await prisma.payment.create({
            data: data
        })
        return response
    }
}