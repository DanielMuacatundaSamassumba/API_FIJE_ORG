import { applyment } from "../generated/prisma";

export interface CreateApplymentRepositoryCopy {
    create(data: Omit<applyment, "id" | "crateAt" | "updateAt"  >): Promise<applyment>
}