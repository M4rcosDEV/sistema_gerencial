import express, {Request, Response} from 'express';
import {UsuariosService} from './usuarios.service';

const usuarioService = new UsuariosService();

export class UsuariosController {
    async criarUsuario(request: Request, response: Response){
        const data = request.body;
        try {
            const usuario = await usuarioService.criarUsuario(data);

            response.status(201).json(usuario);
        } catch (error: any) {
            response.status(400).json({ mensagem: 'Erro ao criar usuário', error: error.message });
        }
    }

    async buscarTodosUsuarios(request: Request, response: Response){
        try {
            response.status(200).json(await usuarioService.buscarTodosUsuarios());
        } catch (error: any) {
            response.status(400).json({ mensagem: 'Erro ao buscar usuários', error: error });
        }
    }
}


