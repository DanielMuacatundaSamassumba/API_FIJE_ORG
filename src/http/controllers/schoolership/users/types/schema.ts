import z from "zod"

const schemaDatauser = z.object({
    id:z.string(),
    name: z.string().nonempty(),
    email:  z.string().email().nonempty(),
    bi_number: z.string().nonempty(),
    date_birth:  z.string().nonempty(),
    status:z.string(),
    address:  z.string().nonempty(),
    password:  z.string().nonempty(),
    roles:z.array(z.string()).nonempty(),
    permitions:z.array(z.string()).nonempty(),
})

const authschema =  z.object({
    email:z.string().nonempty(),
    password:z.string().nonempty()
})

const recoverDataType = z.object({
     newPassword: z.string().nonempty(),
     confNewPassword: z.string().nonempty()
})


export { schemaDatauser , authschema, recoverDataType }