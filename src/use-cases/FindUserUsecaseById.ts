import { user } from "../generated/prisma";
import { FindUserByIdRepositoryCopy } from "../repositories/FindUserByIdRepositoryCopy";
export class FindUserUsecaseById {
    constructor(private findUserbyId: FindUserByIdRepositoryCopy) { }

    async execute(id: string) {
        const response = await this.findUserbyId.findUserById(id)
        return response
    }
}