import { PrismaTypes } from "../../config/database";
import { ProdutosRepository } from "./produtos.repository";

const produtosRepository = new ProdutosRepository();

export class ProdutosService{
    async criarProduto(data: PrismaTypes.ProdutoCreateInput){
        return produtosRepository.create(data);
    }
}