import { PrismaTypes } from "../../config/database";
import { ClientesRepository } from "./clientes.repository";

const clientesRepository = new ClientesRepository();

export class ClientesService {
    async criarCliente(data: PrismaTypes.ClienteCreateInput){
        return clientesRepository.create(data);
    }
}