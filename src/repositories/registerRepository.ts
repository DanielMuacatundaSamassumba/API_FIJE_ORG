import { user } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import { RegisterRepositoryCopy } from "./RegisterRepository-copy";
export class RegisterRepository implements RegisterRepositoryCopy {

    async create(data: user): Promise<{ name: string; id: string; email: string; bi_number: string; date_birth: string; address: string; password: string; status: string; }> {
        const rolescheck = data.roles
        if (rolescheck == "normal-user") {
            data.permitions = [
                "create applyment",
                "list schoolership",
                "list course",
                "edit own profile",
                "show applyment",
                "create payment",
                "show payment",
                "show own payments"
            
            ]
        } else {
            if (rolescheck == "admin") {
                data.permitions = [
                    "create applyment",
                    "delete applyment",
                    "update applyment",
                    "list applyment",
                    "show applyment",
                    "create course",
                    "delete course",
                    "update course",
                    "show course",
                    "edit own profile",
                    "list users",
                    "edit user",
                    "show user",
                    "delete user",
                    "update user",
                    "create payment",
                    "show payment",
                    "list payment",
                    "create schoolership",
                    "update schoolership",
                    "delete schoolership",
                    "show scholership"
                ]
            }
        }
        const response = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                bi_number: data.date_birth,
                password: data.password,
                status: "1",
                date_birth: data.date_birth,
                address: data.address,
                roles: [data.roles],
                permitions: [data.permitions]
            }
        })
        return response
    }

}