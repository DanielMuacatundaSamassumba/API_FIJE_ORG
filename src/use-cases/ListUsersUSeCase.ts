import { ListUserRepositoryCopy } from "../repositories/ListUserRepositoryCopy";

export class ListUsersUseCase {
    constructor(private listrepositorycopy:ListUserRepositoryCopy){}
 async execute(){
   const response = await this.listrepositorycopy.list()

   return response
 }
} 