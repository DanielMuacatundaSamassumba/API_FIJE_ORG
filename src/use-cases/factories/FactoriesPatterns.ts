import { ListUserRepository } from "../../repositories/ListUsersRepository"
import { ListUsersUseCase } from "../ListUsersUSeCase"
import { FindUserRepository } from "../../repositories/FindUserRepository"
import { RegisterRepository } from "../../repositories/registerRepository"
import { Authentication } from "../AuthenticationUseCase"
import { RegisterUserUsecase } from "../registerUser-usecase"
import { SchoolershipCreateRepository } from "../../repositories/SchoolershipCreateRepository"
import { SchoolershipCreateUsecase } from "../SchoolershipCreateUseCase"
const listuserrepository = new ListUserRepository()
const listuserusecase = new ListUsersUseCase(listuserrepository)
const registerrepository = new RegisterRepository()
const findUser = new FindUserRepository()
const registerusecase = new RegisterUserUsecase(registerrepository, findUser)
const AuthUseCase = new Authentication(findUser)
const schoolershipcreaterepositiry = new SchoolershipCreateRepository()
const schoolershicreate = new SchoolershipCreateUsecase(schoolershipcreaterepositiry)
export { listuserusecase, findUser, registerrepository, AuthUseCase, registerusecase, schoolershicreate}