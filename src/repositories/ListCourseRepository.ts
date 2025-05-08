import { course } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { ListCourseRepositoryCopy } from "./ListCourseRepositoryCopy";

export class ListCourseRepository implements ListCourseRepositoryCopy {

    async list(): Promise<course[]> {
        const response = await prisma.course.findMany({
            include: {
                schoolership: true
            }
        })
        const filterDate = response.filter(item=>item.status != "0")
        return filterDate
    }
}