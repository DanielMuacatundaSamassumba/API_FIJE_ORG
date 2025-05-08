import { course } from "../generated/prisma";
import { CreateCourseRepositoryCopy } from "../repositories/CreateCourseRepositoryCopy";

export class CreateCourseUsecase {

    constructor(private createcourserepositorycopy: CreateCourseRepositoryCopy) { }
    async execute(data:  Omit<course, "id"  | "status">) {
        const response = await this.createcourserepositorycopy.create(data)
        return response
    }
}