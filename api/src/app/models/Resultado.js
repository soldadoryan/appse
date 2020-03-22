import Sequelize, { Model } from 'sequelize';

class Resultado extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'resultados'
      }
    );
    return this;
  }
}
export default Resultado;