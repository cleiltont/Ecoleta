import express from 'express';

// Importando os controles
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// Usando as rotas do express
const routes = express.Router();

// Instancias dos constroles
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Mostra em listagem os itens
routes.get('/items', itemsController.index);

// Cria novos pontos
routes.post('/points', pointsController.create);

// Mostra a listagem dos pontos
routes.get('/points/', pointsController.index);

// Exibi detalhes de um unico ponto
routes.get('/points/:id', pointsController.show);

export default routes;