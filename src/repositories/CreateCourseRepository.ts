import { course } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { CreateCourseRepositoryCopy } from "./CreateCourseRepositoryCopy";

export class CreateCourseRepository implements CreateCourseRepositoryCopy {
    async create(data: Omit<course, "id" | "status">): Promise<course> {
        const response = await prisma.course.create({
            data: {
                name: data.name,
                vacancies: data.vacancies,
                status: "1",
                schoolership_id: data.schoolership_id
            }
        })
        return response
    }
}