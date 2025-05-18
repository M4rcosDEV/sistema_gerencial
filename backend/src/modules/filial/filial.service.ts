import { PrismaTypes } from '../../config/database';
import { FilialRepository } from './filial.repository';

const filialRepository = new FilialRepository();

export class FilialService {
    async criarFilial(data: PrismaTypes.FilialCreateInput){
        return filialRepository.create(data);
    }

    async buscarFiliaisEmpresa(idEmpresa: string){
        return filialRepository.findAllFilialEmpresa(idEmpresa);
    }
}