import { Router } from 'express';

import VariavelController from './app/controllers/VariavelController';
import QuestaoController from './app/controllers/QuestaoController';
import ResultadoController from './app/controllers/ResultadoController';
import SolucaoController from './app/controllers/SolucaoController';

const routes = new Router();

routes.post('/variaveis', VariavelController.store);
routes.get('/variaveis', VariavelController.index);
routes.put('/variaveis/:id', VariavelController.update);
routes.delete('/variaveis/:ids', VariavelController.destroy);

routes.post('/questoes', QuestaoController.store);
routes.get('/questoes', QuestaoController.index);
routes.put('/questoes/:id', QuestaoController.update);
routes.delete('/questoes/:ids', QuestaoController.destroy);

routes.post('/resultados', ResultadoController.store);
routes.get('/resultados', ResultadoController.index);
routes.put('/resultados/:id', ResultadoController.update);
routes.delete('/resultados/:ids', ResultadoController.destroy);

routes.post('/solucoes', SolucaoController.store);
routes.get('/solucoes', SolucaoController.index);
routes.put('/solucoes/:id', SolucaoController.update);
routes.delete('/solucoes/:ids', SolucaoController.destroy);

export default routes;
