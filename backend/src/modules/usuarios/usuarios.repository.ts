import {prisma, PrismaTypes} from "../../config/database";
import { Prisma } from "../../generated/prisma";

export class UsuariosRepository {

    async findAll(){
        return prisma.usuario.findMany();
    }

    async create(data: PrismaTypes.UsuarioCreateInput) {
        return prisma.usuario.create({data});
    }

    async findByEmail(email: string){
        return prisma.usuario.findUnique({
            where: {email}
        });
    }
}