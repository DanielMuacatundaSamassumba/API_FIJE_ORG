import { applyment } from "../generated/prisma";

export interface CreateApplymentRepositoryCopy {
    create(data: Omit<applyment, "id">): Promise<applyment>
}