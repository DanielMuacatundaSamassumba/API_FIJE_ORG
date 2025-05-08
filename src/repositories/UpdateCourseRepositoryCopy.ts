import { course } from "../generated/prisma";

export interface UpdateCourseRepositoryCopy{
    update(data:course):Promise<course>
}