import { FindUserRepositoryCopy } from "../repositories/FindUserRepositoryCopy";

export class FindUserUseCase {
    constructor(private findUserrepositorycopy: FindUserRepositoryCopy) { }

    async execute(email: string) {
        const response = await this.findUserrepositorycopy.findUser(email)
        return response
    }
}

