import { user } from "../generated/prisma"
export interface RegisterRepositoryCopy {
     create(data:user): Promise<{ name: string; id: string; email: string; bi_number: string; date_birth: string; address: string; password: string; status: string; }>
}