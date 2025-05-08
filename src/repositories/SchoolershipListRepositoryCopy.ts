import { schoolership, user } from "../generated/prisma";

export interface SchoolershipListRepositoryCopy {
     list():Promise< schoolership[]>
}