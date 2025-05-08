import { FindSchoolershipRepositoryCopy } from "../repositories/FindSchoolershipRepositoryCopy";

export class FindSchoolershipUsecase {
    constructor(private FindSchoolershipCopy: FindSchoolershipRepositoryCopy) { }

    async execute(id: string) {
        const response = await this.FindSchoolershipCopy.findSchoolershi(id)
        return response
    }
}

