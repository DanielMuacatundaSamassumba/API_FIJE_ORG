import { ListUserRepository } from "../../repositories/ListUsersRepository"
import { ListUsersUseCase } from "../ListUsersUSeCase"
import { FindUserRepository } from "../../repositories/FindUserRepository"
import { RegisterRepository } from "../../repositories/registerRepository"
import { Authentication } from "../AuthenticationUseCase"
import { RegisterUserUsecase } from "../registerUser-usecase"
import { SchoolershipCreateRepository } from "../../repositories/SchoolershipCreateRepository"
import { SchoolershipCreateUsecase } from "../SchoolershipCreateUseCase"
import { FindSchoolershipRepository } from "../../repositories/FindSchoolershipRepository"
import { FindSchoolershipUsecase } from "../FindSchoolershipUsecase"
import { SchoolershipDeleteRepository } from "../../repositories/SchoolershipDeleteRepository"
import { SchoolershipDeleteUseCase } from "../SchoolershipDeleteUseCase"
import { SchoolershipUpdateRepository } from "../../repositories/SchoolershipUpdateRepository"
import { SchoolershipUpdateUsecase } from "../SchoolershipUpdateUsecase"
import { FindUserByIdRepository } from "../../repositories/FindUserByIdRepository"
import { FindUserUsecaseById } from "../FindUserUsecaseById"
import { UserUpdateUsecase } from "../UserUpdateUseCase"
import { UserUpdateRepository } from "../../repositories/UserUpdateRepository"
import { RecoverPasswordRepository } from "../../repositories/RecoverPasswordRepository"
import { RecoverUsecase } from "../RecoverUsecase"
import { SchoolershipListRepository } from "../../repositories/SchoolershipListRepository"
import { SchoolershipListUsecase } from "../SchoolershipListUsecase"
import { UserDeleteRepository } from "../../repositories/UserDeleteRepository"
import { UserDeleteUsescase } from "../UserDeleteUsecase"
import { CreateCourseRepository } from "../../repositories/CreateCourseRepository"
import { CreateCourseUsecase } from "../CreateCourseUsecase"
import { ListCourseRepository } from "../../repositories/ListCourseRepository"
import { ListCouseUseCase } from "../ListCourseUsecase"
import { FindCouresRepository } from "../../repositories/FindCouresRepository"
import { FindCourseUseCase } from "../FindCourseUsecase"
import { UpdateCourseRepository } from "../../repositories/UpdateCourseRepository"
import { UpdateCourseUsescase } from "../UpdateCourseUsecase"
import { DeleteCourseRepository } from "../../repositories/DeleteCourseRepository"
import { DeleteCourseUseCase } from "../DeleteCourseUseCase"
import { CreateApplymentCourse } from "../../repositories/CreateApplymentCourseRepository"
import { CreateApplymentRepository } from "../../repositories/CreateApplymentRepository"
import { FindNumberApplymentRepository } from "../../repositories/FindNumberApplymentRepository"
import { CreateApplymentUseCase } from "../CreateApplymentUsecase"
const listuserrepository = new ListUserRepository()
const listuserusecase = new ListUsersUseCase(listuserrepository)
const registerrepository = new RegisterRepository()
const findUser = new FindUserRepository()
const registerusecase = new RegisterUserUsecase(registerrepository, findUser)
const AuthUseCase = new Authentication(findUser)
const schoolershipcreaterepositiry = new SchoolershipCreateRepository()
const schoolershicreate = new SchoolershipCreateUsecase(schoolershipcreaterepositiry)
const findSchoolershipRepository = new FindSchoolershipRepository()
const findSchoolershipUsecase = new FindSchoolershipUsecase(findSchoolershipRepository)
const schoolershipDeleterepository = new SchoolershipDeleteRepository()
const schoolershipdeleteusecase = new SchoolershipDeleteUseCase(schoolershipDeleterepository)
const schoolershipUpdateRepository = new SchoolershipUpdateRepository()
const schoolershipUpdateUsecase = new SchoolershipUpdateUsecase(schoolershipUpdateRepository)
const findUserbyidrepository = new FindUserByIdRepository()
const finduserByIdUsecase = new FindUserUsecaseById(findUserbyidrepository)
const UpdateuserRepository = new UserUpdateRepository()
const updateUseCase = new UserUpdateUsecase(UpdateuserRepository)
const recoverPasswordRepository = new RecoverPasswordRepository()
const recoverPasswordUsecase = new RecoverUsecase(recoverPasswordRepository)
const schoolershipListRepository = new SchoolershipListRepository()
const schoolershipListUsecase = new SchoolershipListUsecase(schoolershipListRepository)
const userDeleteRepository = new UserDeleteRepository()
const userDeleteuseCase = new UserDeleteUsescase(userDeleteRepository)
const createcoureseRepsitory = new CreateCourseRepository()
const createcourseUsecase = new CreateCourseUsecase(createcoureseRepsitory)
const listcourserepository = new ListCourseRepository()
const ListCourseUsecase = new ListCouseUseCase(listcourserepository)
const findcourserepository = new FindCouresRepository()
const findCourseusecase = new FindCourseUseCase(findcourserepository)
const Updatecourserepository = new UpdateCourseRepository()
const Updatecouseusecase = new UpdateCourseUsescase(Updatecourserepository)
const deleteCourserepository = new DeleteCourseRepository()
const deleteCourseUsecase = new DeleteCourseUseCase(deleteCourserepository)
const createapplyment = new CreateApplymentRepository()
const findNumberaplication = new FindNumberApplymentRepository()
const createcourseaplication = new CreateApplymentCourse()
const createaplicationusecase = new CreateApplymentUseCase(
    createapplyment,
    findNumberaplication,
    createcourseaplication
)
export {
    listuserusecase,
    findUser,
    registerrepository,
    AuthUseCase,
    registerusecase,
    schoolershicreate,
    findSchoolershipUsecase,
    schoolershipdeleteusecase,
    schoolershipUpdateUsecase,
    finduserByIdUsecase,
    updateUseCase,
    recoverPasswordUsecase,
    schoolershipListUsecase,
    userDeleteuseCase,
    createcourseUsecase,
    ListCourseUsecase,
    findCourseusecase,
    Updatecouseusecase,
    deleteCourseUsecase,
    createaplicationusecase
}