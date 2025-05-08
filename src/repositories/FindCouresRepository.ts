import { course } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { FindCouresRepositoryCopy } from "./FindCouresRepositoryCopy";

export class FindCouresRepository implements FindCouresRepositoryCopy {
    async findCourse(id: string): Promise<course | null> {
        const response = await prisma.course.findFirst({
            where: {
                id: id
            }
        })
        return response?.status != "0" ? response : null
    }
}