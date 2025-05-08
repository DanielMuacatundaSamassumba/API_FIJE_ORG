import { applyment } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindNumberApplymentRepositoryCopy } from "./FindNumberApplymentRepositoryCopy";

export class FindNumberApplymentRepository implements FindNumberApplymentRepositoryCopy {

    async findNumberApplication(numbe: string): Promise<applyment | null> {
        const response = await prisma.applyment.findUnique({
            where: {
                number: numbe
            }
        })

        return  response ? response : null
    }



}