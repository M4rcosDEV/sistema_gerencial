import express, {Router, Request, Response} from 'express';
import { UsuariosController } from './usuarios.controller';
const router: Router = express.Router();

const usuarioController = new UsuariosController();

router.get('/', usuarioController.buscarTodosUsuarios);
router.post('/add', usuarioController.criarUsuario);

export default router;