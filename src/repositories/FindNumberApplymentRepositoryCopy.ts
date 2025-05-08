import { applyment } from "../generated/prisma";

export interface FindNumberApplymentRepositoryCopy {
     findNumberApplication(numbe:string):Promise<applyment | null>
}