import { course } from "../generated/prisma";

export  interface ListCourseRepositoryCopy {
     list():Promise<course[]>
}