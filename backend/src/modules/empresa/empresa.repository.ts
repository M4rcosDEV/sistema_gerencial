import {prisma, PrismaTypes} from "../../config/database";

export class EmpresaRepository{
    async findById(id: string){
        return prisma.empresa.findUnique({where: {id: id}})
    }

    async findAll(){
        return prisma.empresa.findMany()
    }

    async create(data:PrismaTypes.EmpresaCreateInput){
        return prisma.empresa.create({data});
    }

    async update(id: string, data: PrismaTypes.EmpresaUpdateInput){
        return prisma.empresa.update({where: {id: id}, data: data})
    }

    async delete(id: string){
        return prisma.empresa.delete({where: {id: id}})
    }
}