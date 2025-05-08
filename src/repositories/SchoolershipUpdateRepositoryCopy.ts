import { schoolership } from "../generated/prisma"
export interface SchoolershipUpdateRepositoryCopy {
    update(data: schoolership): Promise<schoolership>
}