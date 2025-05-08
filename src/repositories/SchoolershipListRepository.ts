import { schoolership } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { SchoolershipListRepositoryCopy } from "./SchoolershipListRepositoryCopy";
export class SchoolershipListRepository implements SchoolershipListRepositoryCopy {
    
    async list(): Promise<schoolership[]> {
        const response = await prisma.schoolership.findMany()
        const filtereData = response.filter(item => item.status != "0")
        return filtereData
    }
}