import { Router } from "express";
import { 
    create,
    list,
    show,
    update,
    deleteCourse
} from "../CourseControllerr";
const courseRoutes = Router()

courseRoutes.post("/api/admin/course/create", create )
courseRoutes.get("/api/admin/course/list", list )
courseRoutes.get("/api/admin/course/show/:id", show )
courseRoutes.put("/api/admin/course/update/:id", update )
courseRoutes.put("/api/admin/course/delete/:id/", deleteCourse)

export { courseRoutes }