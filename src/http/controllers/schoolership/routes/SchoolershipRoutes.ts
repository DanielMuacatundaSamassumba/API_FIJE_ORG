import { Router } from "express";
import {
    createschoolership,
    FindSchoolership,
    DeleteSchoolership,
    UpdateSchoolership,
    ListSchoolership
} from "../schoolershipController";

const SchoolershipRoutes = Router()

SchoolershipRoutes.post("/api/admin/schoolership/create", createschoolership)
SchoolershipRoutes.get("/api/admin/schoolership/show/:id", FindSchoolership)
SchoolershipRoutes.delete("/api/admin/schoolership/delete/:id", DeleteSchoolership)
SchoolershipRoutes.put("/api/admin/schoolership/update/:id", UpdateSchoolership)
SchoolershipRoutes.get("/api/admin/schoolership/list/", ListSchoolership)

export { SchoolershipRoutes }