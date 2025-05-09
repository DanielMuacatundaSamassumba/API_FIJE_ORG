import { applymentCourse } from "../generated/prisma";
export interface DataApplicationCourse {
    course_id: string[];
    id: string;
    applyment_id: string;
    
}
export interface CreateApplymentCourseCopy{
    create(data:Omit<DataApplicationCourse, "id">):Promise<applymentCourse[]>
}
