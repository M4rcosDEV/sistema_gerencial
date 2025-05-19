import express, {Router} from 'express';
import { UsuariosController } from './usuarios.controller';
const router: Router = express.Router();

const usuarioController = new UsuariosController();

router.post('/adicionar', usuarioController.criarUsuario);

export default router;