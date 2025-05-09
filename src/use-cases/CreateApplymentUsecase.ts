import { CreateApplymentRepositoryCopy } from "../repositories/CreateApplymentRepositoryCopy";
import { FindNumberApplymentRepositoryCopy } from "../repositories/FindNumberApplymentRepositoryCopy";
import { CreateApplymentCourseCopy } from "../repositories/CreateApplymentCourseRepositoryCopy";
import { applymentDataType } from "./types/applymetDataType";
import { CreatePaymentRepositoryCopy } from "../repositories/CreatePaymentRepositoryCopy";
import { FindPaymentRepositoryCopy } from "../repositories/FindPaymentRepositoryCopy";

export class CreateApplymentUseCase {
    constructor(private createapplymentrepository: CreateApplymentRepositoryCopy,
        private findNumberAplicatio: FindNumberApplymentRepositoryCopy,
        private createCourseaplication: CreateApplymentCourseCopy,
        private createPayment: CreatePaymentRepositoryCopy,
        private findPaymentBynumber: FindPaymentRepositoryCopy
    ) { }

    async axecute(data: applymentDataType) {
        const { user_id, course_id, price } = data

        let number = ""
        let checkNumberAplication = null
        let numberPayment = ""
        let checkNumberPyament = null

        do {
            number = String(Math.floor(Math.random() * Math.pow(10, 7)))
            checkNumberAplication = await this.findNumberAplicatio.findNumberApplication(number)
        } while (checkNumberAplication != null)

        do {
            numberPayment = String(Math.floor(Math.random() * Math.pow(10, 7)))
            checkNumberPyament = await this.findPaymentBynumber.findByNumber(number)
        } while (checkNumberAplication != null)

        const response = await this.createapplymentrepository.create(
            {
                user_id: user_id,
                number: String(number),
                status: "0",

            }
        ).then(async (res) => {
            return await this.createCourseaplication.create({
                course_id: course_id,
                applyment_id: res.id
            })
        }).then(async(res)=>{
            const payementResponse =   await this.createPayment.create({
                applyment_id: res[0].applyment_id,
                number: numberPayment,
                status: "0",
                price: price
            })
            console.log(payementResponse)
        })
        return response
    }
}