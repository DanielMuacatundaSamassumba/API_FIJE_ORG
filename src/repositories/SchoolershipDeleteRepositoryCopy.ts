import { schoolership } from "../generated/prisma"
export interface SchoolershipDeleteRepositoryCopy {
    delete(id: string): Promise<schoolership>
}