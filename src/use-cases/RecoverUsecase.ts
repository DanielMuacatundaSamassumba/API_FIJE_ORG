import { RecoverPasswordRepositoryCopy } from "../repositories/RecoverPasswordRepositoryCopy";
import { MininalEightCharamts } from "./errors/MinimalEightCharamits";
import { RecoverPasswordDataType } from "./types/RecoverPasswordDataType";
import bcrypt from "bcrypt"
export class RecoverUsecase {
    constructor(private recoverpassword: RecoverPasswordRepositoryCopy) { }

    async execute(data: RecoverPasswordDataType) {
        const { newPassword, confNewPassword, id } = data
        if (newPassword == confNewPassword) {
            if (newPassword.length >= 8) {

                const passwordHashed = await bcrypt.hash(newPassword, 6)
                const response = await this.recoverpassword.recover({
                    newPassword: passwordHashed,
                    id: data.id
                })
                return response
                
            } else {
                throw new MininalEightCharamts()
            }
        }
        throw new Error("the passwords must  be the same!")
    }
}