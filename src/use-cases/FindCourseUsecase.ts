import { FindCouresRepositoryCopy } from "../repositories/FindCouresRepositoryCopy";
import { CourseNotFoundedError } from "./errors/CourseNotFoundedErro";

export class FindCourseUseCase {
    constructor(private findcourserepository: FindCouresRepositoryCopy) { }

    async execute(id: string) {
        const response = await this.findcourserepository.findCourse(id)
        if (response == null) {
            throw new CourseNotFoundedError()
        }
        return response
    }
}