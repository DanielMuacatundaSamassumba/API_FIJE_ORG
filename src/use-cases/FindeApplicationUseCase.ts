import { FindeApplicationRepositoryCopy } from "../repositories/FindeApplicationRepositoryCopy";

export class FindeApplicationUseCase {

    constructor(private findAplicationRepository:FindeApplicationRepositoryCopy){}

    async execute(id:string){
     const response = await this.findAplicationRepository.findApplication(id)
     return response
    }
}