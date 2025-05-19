import {prisma, PrismaTypes} from '../../config/database';

export class ProdutosRepository{
    async create(data : PrismaTypes.ProdutoCreateInput){
        return prisma.produto.create({data})
    }
}