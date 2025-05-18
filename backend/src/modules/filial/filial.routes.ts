import express, {Router} from 'express';
import { FilialController } from './filial.controller';
const router: Router = express.Router();

const filialController = new FilialController();

router.get('/:idEmpresa', filialController.buscarFiliaisEmpresa);
router.post('/adicionar', filialController.criarFilial);

export default router;