import { Router } from "express";
import { createUser, listUser } from "../UserController";
import { AuthUser } from "../UserController";
const UserRoutes = Router()

UserRoutes.post("/api/user/create", createUser)
UserRoutes.get("/api/admin/users/list", listUser)
UserRoutes.post("/api/user/auth", AuthUser)
export { UserRoutes }