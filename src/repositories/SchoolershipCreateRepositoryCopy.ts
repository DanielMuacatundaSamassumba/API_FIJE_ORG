import { schoolership } from "../generated/prisma";
import { schemaDataSchoolershipType } from "../use-cases/types/schemaDataSchoolershipType";

export interface SchoolershipCreateRepositoryCopy {
    createscoolership(data:schemaDataSchoolershipType):Promise<schoolership>
}