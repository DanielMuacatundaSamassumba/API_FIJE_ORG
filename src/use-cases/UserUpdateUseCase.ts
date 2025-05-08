import { user } from "../generated/prisma";
import { Omit } from "../generated/prisma/runtime/library";
import { UserUpdateRepositoryCopy } from "../repositories/UserUpdateRepositoryCopy";

export class UserUpdateUsecase {

    constructor( private  userUpdateRepositoryCopy:UserUpdateRepositoryCopy){}

    async execute(data:Omit< user,  "roles" | "permitions" | "password">){
      const response = await this.userUpdateRepositoryCopy.update(data)
      return response
    }
}