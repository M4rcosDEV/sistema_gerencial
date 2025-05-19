import {Request, Response} from 'express';
import { ProdutosService } from './produtos.service';

const produtosService = new ProdutosService();

export class ProdutosController {
    async criarProduto(request: Request, response: Response) {
        const data = request.body;

        try {
            const novoProduto = await produtosService.criarProduto(data);
            response.status(201).json(novoProduto);
        } catch (error: any) {
            response.status(400).json({ message: 'Erro ao criar produto', error: error.message });
        }
    }
}