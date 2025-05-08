import { SchoolershipListRepositoryCopy } from "../repositories/SchoolershipListRepositoryCopy";

export class SchoolershipListUsecase {
    constructor(private schoolershiplist: SchoolershipListRepositoryCopy) { }

    async excute() {
        const response = await this.schoolershiplist.list()
        return response
    }
}