import { Router } from "express";
import {
    createUser,
    listUsers,
    AuthUser,
    findUser,
    UpdateUser,
    UpdatePasswrd,
    DeleteUser
    
} from "../UserController";
const UserRoutes = Router()

UserRoutes.post("/api/user/create", createUser)
UserRoutes.get("/api/admin/users/list", listUsers)
UserRoutes.get("/api/user/show/:id", findUser)
UserRoutes.put("/api/user/update/:id", UpdateUser)  
UserRoutes.put("/api/user/delete/:id", DeleteUser)
UserRoutes.put("/api/user/update/reset/password/:id", UpdatePasswrd)
UserRoutes.post("/api/user/auth", AuthUser)
export { UserRoutes }