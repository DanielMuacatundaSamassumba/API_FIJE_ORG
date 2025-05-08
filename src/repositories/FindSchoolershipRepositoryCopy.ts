import { schoolership } from "../generated/prisma";

export interface FindSchoolershipRepositoryCopy{
    findSchoolershi(id:string): Promise<schoolership | null>
}