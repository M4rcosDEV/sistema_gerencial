import { Request, Response } from "express";
import { EmpresaService } from "./empresa.service";

const empresaService = new EmpresaService();

export class EmpresaController {
    async criarEmpresa(request: Request, response: Response) {
        try {
            
            const data = request.body;
            const novaEmpresa = await empresaService.criarEmpresa(data);
            response.status(201).json(novaEmpresa);
        } catch (error) {
            console.error("Erro ao criar empresa:", error);
            response.status(500).json({ error: "Erro ao criar empresa" });
        }
    }
}