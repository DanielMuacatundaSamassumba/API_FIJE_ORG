import { schoolership } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { SchoolershipUpdateRepositoryCopy } from "./SchoolershipUpdateRepositoryCopy";

export class SchoolershipUpdateRepository implements SchoolershipUpdateRepositoryCopy {
  async update(data: schoolership): Promise<schoolership> {
        const response = await prisma.schoolership.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                start_at: data.start_at,
                end_at: data.end_at,
                status: data.status,
                coutry: data.coutry
            }
        })
        return response
    }
}