import { schoolership } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { schemaDataSchoolershipType } from "../use-cases/types/schemaDataSchoolershipType";
import { SchoolershipCreateRepositoryCopy } from "./SchoolershipCreateRepositoryCopy";

export class SchoolershipCreateRepository implements SchoolershipCreateRepositoryCopy {

    async createscoolership(data: schemaDataSchoolershipType): Promise<schoolership> {
        const response = await prisma.schoolership.create({
            data: {
                name: data.name,
                start_at: data.start_at,
                end_at: data.end_at,
                coutry: data.coutry,
                status: "1"
            }
        })

        return response
    }
}
