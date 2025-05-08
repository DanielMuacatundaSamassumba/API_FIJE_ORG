import { applymentCourse } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { CreateApplymentCourseCopy } from "./CreateApplymentCourseRepositoryCopy";

export class CreateApplymentCourse implements CreateApplymentCourseCopy {
    async create(data: Omit<applymentCourse, "id">): Promise<applymentCourse > {
        const response = await prisma.applymentCourse.create({
            data: data
        })
        return response 
    }

}