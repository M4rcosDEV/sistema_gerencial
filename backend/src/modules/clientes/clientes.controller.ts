import { Request, Response } from "express";

import { ClientesService } from "./clientes.service";

const clientesService = new ClientesService();

export class ClientesController {
    
    async criarCliente(request: Request,response: Response) {
        const data = request.body;

        try {
            const novoCliente = await clientesService.criarCliente(data);
            response.status(201).json(novoCliente);
        } catch (error: any) {
            response.status(400).json({ message: "Erro ao criar cliente", error: error.message });
        }
    }
}