import {prisma, PrismaTypes} from "../../config/database";
import { Prisma } from "../../generated/prisma";

export class UsuariosRepository {

    async findAll(){
        return prisma.usuarios.findMany();
    }

    async create(data: PrismaTypes.UsuariosCreateInput) {
        return prisma.usuarios.create({data});
    }

    async findByEmail(email: string){
        return prisma.usuarios.findUnique({
            where: {email}
        });
    }
}