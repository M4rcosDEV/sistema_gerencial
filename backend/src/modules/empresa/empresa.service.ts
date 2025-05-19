import { EmpresaRepository } from "./empresa.repository";
import { PrismaTypes } from "../../config/database";

const empresaRepository = new EmpresaRepository();


export class EmpresaService {
    async criarEmpresa(data: PrismaTypes.EmpresaCreateInput) {
        return empresaRepository.create(data);
    }
}