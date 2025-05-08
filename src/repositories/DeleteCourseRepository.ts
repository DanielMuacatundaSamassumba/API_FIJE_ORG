import { course } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { DeleteCourseRepositoryCopy } from "./DeleteCourseRepositoryCopy";

export class DeleteCourseRepository implements DeleteCourseRepositoryCopy {
    async delete(id: string): Promise<course> {
        const response = await prisma.course.update({
            where: {
                id: id
            },
            data: {
                status: "0"
            },
            include: {
                schoolership: true
            }
        })
        return response
    }
}