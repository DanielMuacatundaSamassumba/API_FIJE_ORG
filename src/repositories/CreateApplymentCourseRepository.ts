import { applymentCourse } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { CreateApplymentCourseCopy } from "./CreateApplymentCourseRepositoryCopy";
import { DataApplicationCourse } from "./CreateApplymentCourseRepositoryCopy";
export class CreateApplymentCourse implements CreateApplymentCourseCopy {
    async create(data: DataApplicationCourse): Promise<applymentCourse[]> {
        const response = await Promise.all(data.course_id.map(async (item,) => {
            const res = await prisma.applymentCourse.create({
                data: {
                    course_id: item,
                    applyment_id: data.applyment_id
                },
                include:{
                    Course:true,
                }
            })
            return res
        }))
        return response
    }

}