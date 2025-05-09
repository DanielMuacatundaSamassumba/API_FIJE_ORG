import { Request, Response } from "express";
import { createaplicationusecase, findAplicationUsecase } from "../../../use-cases/factories/FactoriesPatterns";
import { applymentDataType } from "../../../use-cases/types/applymetDataType";
const create = async (req: Request, res: Response) => {
    try {
        const { user_id, course_id, price }:applymentDataType = req.body
        const response = await createaplicationusecase.axecute({
            user_id: user_id,
            course_id: course_id,
            price:price
        })
        return res.status(200).json({
            data: response

        })
    } catch (error) {
        return res.status(400).json({
            data: error

        })
    }
}
const find = async (req: Request, res: Response) => {
    try {
        const id = String(req.params.id)
        const response = await findAplicationUsecase.execute(id)
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            data: error

        })
    }
}

export { create, find }