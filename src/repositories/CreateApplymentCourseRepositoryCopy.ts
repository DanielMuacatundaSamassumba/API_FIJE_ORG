import { applymentCourse } from "../generated/prisma";

export interface CreateApplymentCourseCopy{
    create(data:Omit<applymentCourse, "id">):Promise<applymentCourse>
}
