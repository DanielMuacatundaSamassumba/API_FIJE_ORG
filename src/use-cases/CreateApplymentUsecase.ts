import { CreateApplymentRepositoryCopy } from "../repositories/CreateApplymentRepositoryCopy";
import { FindNumberApplymentRepositoryCopy } from "../repositories/FindNumberApplymentRepositoryCopy";
import { CreateApplymentCourseCopy } from "../repositories/CreateApplymentCourseRepositoryCopy";
import { applymentDataType } from "./types/applymetDataType";

export class CreateApplymentUseCase {
    constructor(private createapplymentrepository: CreateApplymentRepositoryCopy,
        private findNumberAplicatio: FindNumberApplymentRepositoryCopy,
        private createCourseaplication: CreateApplymentCourseCopy) { }

    async axecute(data: applymentDataType) {
        const { user_id, course_id } = data

        let number = ""
        let checkNumberAplication = null
        
        do {
            number = String(Math.floor(Math.random() * Math.pow(10, 7)))
            checkNumberAplication = await this.findNumberAplicatio.findNumberApplication(number)
            console.log(checkNumberAplication)
        } while (checkNumberAplication != null)


        const response = await this.createapplymentrepository.create(
            {
                user_id: user_id,
                number: String(number),
            }
        ).then(async (res) => {
            const aplicationId = res.id

            for (const element of course_id) {
                await this.createCourseaplication.create({
                    course_id: element,
                    applyment_id: aplicationId
                })
            }

        })
        return response
    }
}