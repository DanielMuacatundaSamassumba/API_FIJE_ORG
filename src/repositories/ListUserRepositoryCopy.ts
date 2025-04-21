import { user } from "../generated/prisma";

export interface ListUserRepositoryCopy{
    list(): Promise<{name:string}[]>
}