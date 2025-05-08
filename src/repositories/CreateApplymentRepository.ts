import { applyment } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { CreateApplymentRepositoryCopy } from "./CreateApplymentRepositoryCopy";

export class CreateApplymentRepository implements CreateApplymentRepositoryCopy {
    async create(data: Omit<applyment, "id">): Promise<applyment> {

        const response = await prisma.applyment.create({
            data: data
        })
        return response

    }
}