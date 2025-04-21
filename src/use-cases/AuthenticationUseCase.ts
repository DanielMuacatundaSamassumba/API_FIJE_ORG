import { response } from "express";
import { FindUserRepositoryCopy } from "../repositories/FindUserRepositoryCopy";
import { InvalidCredentialError } from "./errors/InvalidCredentialError";
import { DataUserAuthType } from "./types/DataUserAuth";
import bcrypt from "bcrypt"
export class Authentication {
    constructor(private finduser: FindUserRepositoryCopy) { }

    async execute(data: DataUserAuthType) {
        const response = await this.finduser.findUser(data.email)
        if (!response){
            throw new InvalidCredentialError()
        }

        const passwordCheck = await bcrypt.compare(data.password, response.password)

        if (!passwordCheck){
            throw new InvalidCredentialError()
        }

        return response

    }
}