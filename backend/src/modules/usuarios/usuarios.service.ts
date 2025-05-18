import { PrismaTypes } from '../../config/database';
import {UsuariosRepository} from './usuarios.repository';
import bcrypt from 'bcrypt';

const usuarioRepository = new UsuariosRepository();

export class UsuariosService {

    async buscarTodosUsuarios() {
        return usuarioRepository.findAll();
    }

    async buscarUsuario(email: string){
        return usuarioRepository.findByEmail(email);
    }

    async criarUsuario(data: PrismaTypes.UsuariosCreateInput) {
        if (!data.nome || !data.email || !data.senha) {
            throw new Error("nome, email e senha é obrigatório.");
        }

        const validarExistenciaEmail = await usuarioRepository.findByEmail(data.email);

        if (validarExistenciaEmail) {
            throw new Error('Email já existe.');
        }

        const senhaHash = bcrypt.hashSync(data.senha, 5);

        return usuarioRepository.create({
            nome: data.nome,
            email: data.email,
            senha: senhaHash,
            permissao: data.permissao ?? "FUNCIONARIO",
            empresa: data.empresa!,
        });
    }
}