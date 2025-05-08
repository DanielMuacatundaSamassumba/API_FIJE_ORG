import { course } from "../generated/prisma";

export interface DeleteCourseRepositoryCopy{
     delete(id:string):Promise<course>
}