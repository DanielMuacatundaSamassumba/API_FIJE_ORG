import { payment } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindPaymentRepositoryCopy } from "./FindPaymentRepositoryCopy";

export class FindPaymentRepository implements FindPaymentRepositoryCopy {
    async findByNumber(id: string): Promise<payment | null> {
        const response = await prisma.payment.findUnique({
            where: {
                number: id
            }
        })
        return response
    }
}