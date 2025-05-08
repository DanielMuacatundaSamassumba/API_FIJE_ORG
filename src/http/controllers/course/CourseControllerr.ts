import { Request, Response } from "express"
import {
    createcourseUsecase,
    findCourseusecase,
    ListCourseUsecase,
    Updatecouseusecase,
    deleteCourseUsecase

} from "../../../use-cases/factories/FactoriesPatterns"
import { schema } from "./types/datacourseType"
import { CourseNotFoundedError } from "../../../use-cases/errors/CourseNotFoundedErro"
import { course } from "../../../generated/prisma"
export const create = async (req: Request, res: Response) => {
    try {
        const data = schema.parse(req.body)
        const response = await createcourseUsecase.execute(data)
        return res.status(201).json({
            message: "course was created successfully!",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message: "course wasn´t created!",
            error: error
        })
    }
}

export const list = async (req: Request, res: Response) => {
    try {
        const data = schema.parse(req.body)
        const response = await ListCourseUsecase.execute()
        return res.status(201).json({
            message: "course took with sucess!",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message: " wasn´t course took with sucess!",
            error: error
        })
    }
}
export const show = async (req: Request, res: Response) => {
    try {
        const id = String(req.params.id)
        const response = await findCourseusecase.execute(id)
        return res.status(201).json({
            message: "course took with sucess!",
            data: response
        })
    } catch (error) {
        if (error instanceof CourseNotFoundedError) {
            return res.status(400).json({
                message: error.message,
            })
        }
        return res.status(404).json({
            message: "course wasn´t founded",
            error: error
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = String(req.params.id)
        const data = req.body
        const dataUpdate: course = {
            id: id,
            name: data?.name,
            vacancies: data?.vacancies,
            schoolership_id: data?.schoolership_id,
            status: data?.status
        }
        const response = await Updatecouseusecase.execute(dataUpdate)
        return res.status(200).json({
            message: "course was update with success!",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message: "course wasn´t update with success!",
            error: error
        })
    }
}


export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const id = String(req.params.id)
       
        const response = await deleteCourseUsecase.execute(id)
        return res.status(200).json({
            message: "course was delete with success!",
            data: response
        })
    } catch (error) {
        return res.status(400).json({
            message: "course wasn´t delete with success",
            error: error
        })
    }
}
