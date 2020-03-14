import { Router } from 'express';

import VariavelController from './app/controllers/VariavelController';
import QuestaoController from './app/controllers/QuestaoController';

const routes = new Router();

routes.post('/variaveis', VariavelController.store);
routes.get('/variaveis', VariavelController.index);
routes.put('/variaveis/:id', VariavelController.update);
routes.delete('/variaveis/:ids', VariavelController.destroy);

routes.post('/questoes', QuestaoController.store);
routes.get('/questoes', QuestaoController.index);
routes.put('/questoes/:id', QuestaoController.update);
routes.delete('/questoes/:ids', QuestaoController.destroy);

export default routes;
