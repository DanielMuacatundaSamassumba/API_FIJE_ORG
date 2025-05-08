import { course } from "../generated/prisma";
import { UpdateCourseRepositoryCopy } from "../repositories/UpdateCourseRepositoryCopy";

export class UpdateCourseUsescase {

    constructor(private updatecourserepositorycopy: UpdateCourseRepositoryCopy) { }

    async execute(data: course) {
        const response = await this.updatecourserepositorycopy.update(data)
        return response
    }
}