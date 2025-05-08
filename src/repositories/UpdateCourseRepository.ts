import { course } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { UpdateCourseRepositoryCopy } from "./UpdateCourseRepositoryCopy";

export class UpdateCourseRepository implements UpdateCourseRepositoryCopy {
    async update(data: course): Promise<course> {
        const response = await prisma.course.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                vacancies: data.vacancies,
                status: data.status,
                schoolership_id: data.schoolership_id,
            },
            include: {
                schoolership: true
            }
        })
        return response
    }
}