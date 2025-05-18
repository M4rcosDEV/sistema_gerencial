import { EmpresaRepository } from "./empresa.repository";
import {UsuariosRepository} from '../usuarios/usuarios.repository';
import bcrypt from 'bcrypt';
import { PrismaTypes } from "../../config/database";

const empresaRepository = new EmpresaRepository();
const usuarioRepository = new UsuariosRepository();

export class EmpresaService {
    async criarEmpresa(
        data: {
            empresa: PrismaTypes.EmpresaCreateInput,
            usuario: {
                nome : string;
                email: string;
                senha: string;
            };
        } 
    ){
        const novaEmpresa = await empresaRepository.create(data.empresa);

        const validarExistenciaEmail = await usuarioRepository.findByEmail(data.usuario.email);

        if (validarExistenciaEmail) {
            throw new Error('Email já existe.');
        }

        const senhaHash = bcrypt.hashSync(data.usuario.senha, 5);

        const novoUsuario = await usuarioRepository.create({
            nome: data.usuario.nome,
            email: data.usuario.email,
            senha: senhaHash,
            permissao : 'ADMIN',
            empresa: {
                connect: {
                    id: novaEmpresa.id
                }
            }
        });

        return {
            empresa: novaEmpresa,
            usuario: novoUsuario,
        };
    }
}