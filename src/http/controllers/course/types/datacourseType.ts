import { z }  from "zod"

const schema = z.object({
  name: z.string().nonempty(),
  vacancies: z.string().nonempty(),
  schoolership_id: z.string().nonempty(),
})

export { schema }