import { schoolership } from "../generated/prisma";
import { SchoolershipCreateRepositoryCopy } from "../repositories/SchoolershipCreateRepositoryCopy";
import { schemaDataSchoolershipType } from "./types/schemaDataSchoolershipType";

export class SchoolershipCreateUsecase {
    constructor(private schoolershipcreaterepositoryCopy: SchoolershipCreateRepositoryCopy) { }

    async execute(data: schemaDataSchoolershipType){
        const response = await this.schoolershipcreaterepositoryCopy.createscoolership(data)
        return response
    }
} 