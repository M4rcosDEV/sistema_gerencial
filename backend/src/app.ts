//config rotas, cors, parsers, middlewares
import express, { Request, Response} from 'express';
import cors from 'cors';

//importações de rotas
import usuariosRoutes from './modules/usuarios/usuarios.routes';
import empresaRoutes from './modules/empresa/empresa.routes';
import filialRoutes from './modules/filial/filial.routes';

const app = express();

// Middlewares
//app.use(cors());
app.use(express.json());
app.use('/usuario', usuariosRoutes);
app.use('/empresa', empresaRoutes);
app.use('/filial', filialRoutes);

// Rota status
app.get('/', (req: Request, res: Response) => {
  res.send('API rodando');
});

export default app;