import express, {Router} from 'express';
import { ProdutosController } from './produtos.controller';
const router: Router = express.Router();

const produtosController = new ProdutosController();

router.post('/adicionar', produtosController.criarProduto);

export default router;