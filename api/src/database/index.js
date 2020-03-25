import Sequelize from 'sequelize';

import Variavel from '../app/models/Variavel';
import Questao from '../app/models/Questao';
import Resultado from '../app/models/Resultado';
import Solucao from '../app/models/Solucao';
import Regra from '../app/models/Regra';

import databaseConfig from '../config/database';

const models = [Variavel, Questao, Resultado, Solucao, Regra];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}


export default new Database();