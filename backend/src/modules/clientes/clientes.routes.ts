import express, {Router} from 'express';
import { ClientesController } from './clientes.controller';
const router: Router = express.Router();

const clientesController = new ClientesController();

router.post("/adicionar", clientesController.criarCliente);

export default router;