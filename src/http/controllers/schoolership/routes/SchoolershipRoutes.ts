import { Router } from "express";
import { createschoolership } from "../schoolershipController";

const SchoolershipRoutes = Router()

SchoolershipRoutes.post("/api/admin/schoolership/create", createschoolership)

export { SchoolershipRoutes }