import { Router } from "express";
import { create } from "../applicationController";
const applicationRoutes = Router()

applicationRoutes.post("/api/application/user/create", create)

export { applicationRoutes }