import { user } from "../generated/prisma";

export interface FindUserByIdRepositoryCopy {
  findUserById(id:string): Promise< Omit<user, "password"> | null>
}