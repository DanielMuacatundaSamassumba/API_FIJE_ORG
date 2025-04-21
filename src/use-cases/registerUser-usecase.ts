import { user } from "../generated/prisma";
import { RegisterRepositoryCopy } from "../repositories/RegisterRepository-copy";
import { UserAreadyExist } from "./errors/UserAreadyExist";
import { FindUserRepositoryCopy } from "../repositories/FindUserRepositoryCopy";
export class RegisterUserUsecase {

    constructor(private registerrepositorycopy: RegisterRepositoryCopy, private findUserrepositorycopy:FindUserRepositoryCopy) { }

    async execute(data: user) {
        const userExist = await this.findUserrepositorycopy.findUser(data.email)
        if(userExist){
            throw new UserAreadyExist()
        }
        const response = await this.registerrepositorycopy.create(data)
     
        return response
    }
}