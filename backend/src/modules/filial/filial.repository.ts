import {prisma, PrismaTypes} from "../../config/database";
import { Prisma } from "../../generated/prisma";

export class FilialRepository {

    async create(data: PrismaTypes.FilialCreateInput) {
        return prisma.filial.create({data});
    }

    async findAllFilialEmpresa(id: string){
        return prisma.filial.findMany({where: {empresaId: id}})
    }
}