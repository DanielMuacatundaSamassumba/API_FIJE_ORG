import { DeleteCourseRepositoryCopy } from "../repositories/DeleteCourseRepositoryCopy";

export class DeleteCourseUseCase {

    constructor( private deleteCourseRepositoryCoy:DeleteCourseRepositoryCopy){}
    async execute(id:string){
        const response = await this.deleteCourseRepositoryCoy.delete(id)
        return response
    }
}