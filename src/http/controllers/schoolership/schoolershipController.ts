import { schoolershicreate, schoolershipListUsecase } from "../../../use-cases/factories/FactoriesPatterns";
import { dataSchoolershipType } from "./types/schema";
import { findSchoolershipUsecase } from "../../../use-cases/factories/FactoriesPatterns";
import { schoolershipdeleteusecase, schoolershipUpdateUsecase } from "../../../use-cases/factories/FactoriesPatterns";

import { Request, Response } from "express"
export async function createschoolership(req: Request, res: Response) {
    try {
        const token = req.headers.token
        console.log(token)
        const data = dataSchoolershipType.parse(req.body)
        const response = await schoolershicreate.execute(data)
        return res.status(201).json({
            message: "Bolsa cadastrada com sucesso",
            data: response
        })

    } catch (error) {
        return res.status(400).json({
            message: "bolsa não cadastrada ",
            error: error
        })
    }
}

export async function FindSchoolership(req: Request, res: Response) {
    try {
        const id = req.params.id
        const response = await findSchoolershipUsecase.execute(id)
        return res.status(200)
            .json({
                message: "Bolsa Encotrada com sucesso!",
                data: response
            })
    } catch (error) {
        return res.status(404).json({
            message: "Bolsa não encotrada! ",
            error: error
        })
    }
}

export async function DeleteSchoolership(req: Request, res: Response) {
    try {

        const id: string = req.params.id
        const data = await schoolershipdeleteusecase.execute(id)
        return res.status(200)
            .json({
                message: "Schoolership deleted sucessfully",
                data: data
            })
    } catch (error) {
        return res.status(400).json({
            message: "Error to delete schoolership",
            error: error
        })
    }
}

export async function UpdateSchoolership(req: Request, res: Response) {
    try {
        const {
            name,
            coutry,
            start_at,
            end_at,
            status,
        } = req.body
        const id: string = req.params.id
        const data = {
            id: id,
            name: name,
            coutry: coutry,
            start_at: start_at,
            end_at: end_at,
            status: status,
        }
        const response = await schoolershipUpdateUsecase.execute(data)
        return res.status(200).
            json({
                message: "schooleship updeated successfully",
                data: response
            })
    } catch (error) {
        return res.status(400)
            .json({
                message: "schoolership not updated sucessfully",
                error: error
            })
    }
}


export async function ListSchoolership(req: Request, res: Response) {
    try {
        const data = await schoolershipListUsecase.excute()
        return res.status(200)
            .json({
                messegae: "list  take sucessfully",
                data: data
            })

    } catch (error) {
        return res.status(400)
                        .json({
                            messegae: "list  take sucessfully",
                            error: error
                        })
    }
}