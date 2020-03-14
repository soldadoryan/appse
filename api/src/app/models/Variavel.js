import Sequelize, { Model } from 'sequelize';

class Variavel extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        value: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'variaveis'
      }
    );
    return this;
  }
}
export default Variavel;