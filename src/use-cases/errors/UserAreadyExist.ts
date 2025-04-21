export class UserAreadyExist extends Error{
    constructor(){
        super("Usuario Já Cadastrado! ")
    }
}