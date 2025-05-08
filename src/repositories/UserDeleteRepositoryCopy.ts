import { user } from "../generated/prisma";

export interface UserDeleteRepositoryCopy {
     delete(id:string):Promise< Omit<user ,"password">>
}