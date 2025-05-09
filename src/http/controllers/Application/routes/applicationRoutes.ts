import { Router } from "express";
import { create, find } from "../applicationController";
const applicationRoutes = Router()

applicationRoutes.post("/api/application/user/create", create)
applicationRoutes.get("/api/application/user/show/:id", find)

export { applicationRoutes }