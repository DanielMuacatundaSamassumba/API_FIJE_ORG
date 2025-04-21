import z from "zod"

const dataSchoolershipType = z.object({
    name: z.string().nonempty(),
    coutry:  z.string().nonempty(),
    start_at:z.string().nonempty(),
    end_at: z.string().nonempty()
})

export { dataSchoolershipType } 