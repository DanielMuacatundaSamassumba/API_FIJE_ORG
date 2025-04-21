import { schoolershicreate } from "../../../use-cases/factories/FactoriesPatterns";
import { dataSchoolershipType } from "./types/schema";
import { Request, Response } from "express"
export async function createschoolership(req: Request, res: Response) {
    try {
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