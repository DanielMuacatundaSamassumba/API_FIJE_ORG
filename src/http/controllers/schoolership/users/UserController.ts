import { Request, response, Response } from "express";
import { authschema, schemaDatauser, recoverDataType } from "./types/schema";
import { UserAreadyExist } from "../../../../use-cases/errors/UserAreadyExist"
import { FindUserRepository } from "../../../../repositories/FindUserRepository";
import { listuserusecase, recoverPasswordUsecase, registerusecase, userDeleteuseCase } from "../../../../use-cases/factories/FactoriesPatterns";
import { registerrepository } from "../../../../use-cases/factories/FactoriesPatterns";
import { AuthUseCase } from "../../../../use-cases/factories/FactoriesPatterns";
import { InvalidCredentialError } from "../../../../use-cases/errors/InvalidCredentialError";
import { finduserByIdUsecase } from "../../../../use-cases/factories/FactoriesPatterns";
import { updateUseCase } from "../../../../use-cases/factories/FactoriesPatterns";
import { user } from "../../../../generated/prisma";
import bcrypt from "bcrypt"
import { MininalEightCharamts } from "../../../../use-cases/errors/MinimalEightCharamits";
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


export const listUsers = async (req: Request, res: Response) => {
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



export const findUser = async (req: Request, res: Response) => {
   try {
      const id: string = req.params.id
      const response = await finduserByIdUsecase.execute(id)

      return res.status(200).json({
         message: "usuario encotrado com sucesso!",
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


export const AuthUser = async (req: Request, res: Response) => {
   try {
      const data = authschema.parse(req.body)
      const response = await AuthUseCase.execute(data)

      return res.status(200).json({
         message: "Login realizado com sucesso",
         data: response
      })
   } catch (error) {
      if (error instanceof InvalidCredentialError) {
         return res.status(404).json({
            messege: error.message,
         })
      }
   }
}

export const UpdateUser = async (req: Request, res: Response) => {
   try {
      const id: string = req.params.id
      const {
         name,
         email,
         bi_number,
         date_birth,
         address,
         password,
         status,
      } = req.body

      const data = {
         id: id,
         name: name,
         email: email,
         bi_number: bi_number,
         date_birth: date_birth,
         address: address,
         status: status,
      }
      const response = await updateUseCase.execute(data)
      return res.status(200)
         .json({
            message: "user updated sucessfully",
            data: response
         })
   } catch (error) {
      return res.status(400)
         .json({
            message: "user not updated!",
            error: error
         })
   }
}


export const UpdatePasswrd = async (req: Request, res: Response) => {
   try {
      const id = String(req.params.id)
      const { newPassword, confNewPassword } = recoverDataType.parse(req.body)

      const data = {
         id: id,
         newPassword: newPassword,
         confNewPassword: confNewPassword
      }
      const response = await recoverPasswordUsecase.execute(data)
      return res.status(200)
         .json({
            message: "password change sucessfuly",
            data: response
         })
   } catch (error) {
      if (error instanceof MininalEightCharamts) {
         return res.status(400)
            .json({
               message: error.message,
               error: error
            })
      }
      return res.status(409)
         .json({
            message: error?.message,
            error: error
         })
   }
}
export const DeleteUser = async (req: Request, res: Response) => {
   try {
      const id = String(req.params.id)
      const response = await userDeleteuseCase.execute(id)
      return res.status(200)
         .json({
            message: " user was deleted successfully!",
            data: response
         })
   } catch (error) {
      return res.status(400)
         .json({
            message: "something want wrong",
            error: error
         })
   }
}