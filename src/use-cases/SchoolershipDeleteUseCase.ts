import { SchoolershipDeleteRepositoryCopy } from "../repositories/SchoolershipDeleteRepositoryCopy";

export class SchoolershipDeleteUseCase {
    constructor(private schoolershipDeleteRepositoryCopy: SchoolershipDeleteRepositoryCopy) { }

    async execute(id: string) {
        const response = await this.schoolershipDeleteRepositoryCopy.delete(id)
        return response
    }
}

