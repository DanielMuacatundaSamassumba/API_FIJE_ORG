import express from "express"
import { UserRoutes } from "./http/controllers/schoolership/users/routes/UserRoutes"
import { SchoolershipRoutes } from "./http/controllers/schoolership/routes/SchoolershipRoutes"
import { courseRoutes } from "./http/controllers/course/routes/CourseRoutes"
import { applicationRoutes } from "./http/controllers/Application/routes/applicationRoutes"
const app = express()
app.use(express.json())
app.use(UserRoutes)
app.use(SchoolershipRoutes)
app.use(courseRoutes)
app.use(applicationRoutes)
export { app }

