import { RegisterRepository } from "../../repositories/registerRepository";
import { RegisterUserUsecase } from "../../use-cases/registerUser-usecase";
import { Request, Response } from "express";
import { authschema, schemaDatauser } from "./types/schema";
import { UserAreadyExist } from "../../use-cases/errors/UserAreadyExist"
import { FindUserRepository } from "../../repositories/FindUserRepository";
import { listuserusecase, registerusecase } from "../../use-cases/factories/FactoriesPatterns";
import { registerrepository } from "../../use-cases/factories/FactoriesPatterns";
import { findUser } from "../../use-cases/factories/FactoriesPatterns";
import { AuthUseCase} from "../../use-cases/factories/FactoriesPatterns";
import { InvalidCredentialError } from "../../use-cases/errors/InvalidCredentialError";
import bcrypt from "bcrypt"
export const createUser = async (req: Request, res: Response) => {
   try {

      const data = schemaDatauser.parse(req.body)

      const password_hashed = await bcrypt.hash(data.password, 6)
      data.password = password_hashed
      const response = await registerusecase.execute(data)

      return res.status(201).json({
         message: "usuario criado com sucesso!",
         data: response
      })
   } catch (error) {
      if (error instanceof UserAreadyExist) {
         return res.status(409).json({
            messege: error.message,
         })
      }
   }
}
export const listUser = async (req: Request, res: Response) => {
   try {

      const response = await listuserusecase.execute()

      return res.status(200).json({
         message: "usuario criado com sucesso!",
         data: response
      })
   } catch (error) {
      if (error instanceof UserAreadyExist) {
         return res.status(409).json({
            messege: error.message,
         })
      }
   }
}

export const AuthUser=   async(req:Request, res:Response)=>{
   try {
      const data = authschema.parse(req.body)
      const response = await AuthUseCase.execute(data)

      return res.status(200).json({
         message: "Login realizado com sucesso",
         data: response
      })
   } catch (error) {
      if (error instanceof InvalidCredentialError){
         return res.status(404).json({
            messege: error.message,
         })
      }
   }
}