import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Variaveis from './pages/Variaveis';
import Questoes from './pages/Questoes';
import Resultados from './pages/Resultados';
import Solucoes from './pages/Solucoes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/variaveis" exact component={Variaveis} />
      <Route path="/questoes" exact component={Questoes} />
      <Route path="/resultados" exact component={Resultados} />
      <Route path="/solucoes" exact component={Solucoes} />
    </Switch>
  );
}