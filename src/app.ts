import express from "express"
import { UserRoutes } from "./http/users/routes/UserRoutes"
import { SchoolershipRoutes } from "./http/controllers/schoolership/routes/SchoolershipRoutes"
const app = express()
app.use(express.json())
app.use(UserRoutes)
app.use(SchoolershipRoutes)
export { app }

