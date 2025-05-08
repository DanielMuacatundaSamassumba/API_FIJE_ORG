import { user } from "../generated/prisma";

export interface UserUpdateRepositoryCopy {
     update(data:Omit< user,  "roles" | "permitions" | "password" >): Promise<user>
}