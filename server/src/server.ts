// Serve para definir rota
import express from 'express';

// Localhost
import cors from 'cors';

// Caminho da pasta
import path from 'path';

// routes.js onde esta as rotas
import routes from './routes';

// Criando rotas do app
const app = express();

// Usando o cors
app.use(cors());
// Usando o express para definir rota
app.use(express.json());

// O arquivo routes.js
app.use(routes);

// Rota dos arquivos statico
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Porta do servidor
app.listen(3333);