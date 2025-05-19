import {prisma, PrismaTypes} from "../../config/database";

export class ClientesRepository{
    async create(data: PrismaTypes.ClienteCreateInput){
        return prisma.cliente.create({data})
    }
}