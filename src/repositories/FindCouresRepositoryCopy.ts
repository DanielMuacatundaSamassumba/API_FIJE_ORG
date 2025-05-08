import { course } from "../generated/prisma";

export interface FindCouresRepositoryCopy {
     findCourse(id:string):Promise<course | null>
}