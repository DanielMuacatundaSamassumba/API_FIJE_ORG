import { schoolership } from "../generated/prisma";
import { SchoolershipUpdateRepositoryCopy } from "../repositories/SchoolershipUpdateRepositoryCopy";

export class SchoolershipUpdateUsecase {
    constructor(private schoolershipUpdaterepositorycopy: SchoolershipUpdateRepositoryCopy) { }

    async execute(data: schoolership) {
        const response = await this.schoolershipUpdaterepositorycopy.update(data)
        return response
    }
}