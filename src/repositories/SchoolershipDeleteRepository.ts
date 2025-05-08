import { schoolership } from "../generated/prisma";
import { SchoolershipDeleteRepositoryCopy } from "./SchoolershipDeleteRepositoryCopy";
import { prisma } from "./../lib/prisma"
export class SchoolershipDeleteRepository implements SchoolershipDeleteRepositoryCopy {
    async delete(id: string): Promise<schoolership> {
        const response = await prisma.schoolership.update({
            where: {
                id: id
            },
            data: {
                status: "0"
            }
        })
        const deletecourses = await prisma.course.updateMany({
            where: {
                schoolership_id: response.id
            },
            data: {
                status: "0"
            }
        })
        return response
    }
}