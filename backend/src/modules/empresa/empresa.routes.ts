import express, {Router} from 'express';
import { EmpresaController } from './empresa.controller';
const router: Router = express.Router();

const empresaController = new EmpresaController();

router.post("/adicionar", empresaController.criarEmpresa);

export default router;