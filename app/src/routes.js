import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Variaveis from './pages/Variaveis';
import Questoes from './pages/Questoes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/variaveis" exact component={Variaveis} />
      <Route path="/questoes" exact component={Questoes} />
    </Switch>
  );
}