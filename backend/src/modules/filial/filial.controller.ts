import {Request, Response} from 'express';
import { FilialService } from './filial.service';

const filialService = new FilialService();

export class FilialController {
    async criarFilial(request: Request, response: Response) {
        const data = request.body;
        try {
            const novaFilial = await filialService.criarFilial(data);
            response.status(201).json(novaFilial);
        } catch (error: any) {
            response.status(400).json({ mensagem: 'Erro ao criar filial', error: error.message });
        }
    }

    async buscarFiliaisEmpresa(request: Request, response: Response) {
        const idEmpresa = request.params.idEmpresa;

        try {
            const resultado = await filialService.buscarFiliaisEmpresa(idEmpresa);
            response.status(200).json(resultado);
        } catch (error: any) {
            response.status(400).json({ mensagem: 'Erro ao buscar filiais da empresa', error: error.message });
        }
    }
}