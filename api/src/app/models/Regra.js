import Sequelize, { Model } from 'sequelize';

class Regra extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'regras'
      }
    );
    return this;
  }
}
export default Regra;