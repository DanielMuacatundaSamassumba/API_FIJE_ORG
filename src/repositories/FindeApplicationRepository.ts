import { prisma } from "../lib/prisma";
import { FindeApplicationRepositoryCopy } from "./FindeApplicationRepositoryCopy";

export class FindeApplicationRepository implements FindeApplicationRepositoryCopy {
    async findApplication(id: string): Promise<[]> {
        const response = await prisma.applyment.findUnique({
            where: {
                id: id
            },
            include: {
                User: true,
                ApplymentCourse: {
                    include: {   
                        Course: {
                            include: {
                                schoolership: true
                            }
                        }
                    }
                }
            }
        })

        return response
    }
}