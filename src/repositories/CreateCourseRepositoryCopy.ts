import { course } from "../generated/prisma";

export interface CreateCourseRepositoryCopy {
     create(data:Omit<course,"id" | "status">): Promise<Omit<course, "id>">>
}