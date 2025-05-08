import { UserDeleteRepositoryCopy } from "../repositories/UserDeleteRepositoryCopy";

export class UserDeleteUsescase {

    constructor(private usedeleteRepositoryCopy: UserDeleteRepositoryCopy) { }
    async execute(id: string) {
        const response = await this.usedeleteRepositoryCopy.delete(id)
        return response
    }
}