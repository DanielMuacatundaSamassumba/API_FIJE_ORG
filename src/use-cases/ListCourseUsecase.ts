import { ListCourseRepositoryCopy } from "../repositories/ListCourseRepositoryCopy";

export class ListCouseUseCase {
    constructor(private listcourse: ListCourseRepositoryCopy) { }

    async execute() {
        const response = await this.listcourse.list()
        return response
    }
}