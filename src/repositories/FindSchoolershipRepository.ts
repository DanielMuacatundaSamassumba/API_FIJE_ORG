import { schoolership } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindSchoolershipRepositoryCopy } from "./FindSchoolershipRepositoryCopy";

export class FindSchoolershipRepository implements FindSchoolershipRepositoryCopy {

    async findSchoolershi(id: string): Promise<schoolership | null> {
        const response = await prisma.schoolership.findUnique(
            {
                where: {
                    id: id
                }
            }
        )
        const filterData = response?.status != "0" ? response : null
        return filterData
    }

}