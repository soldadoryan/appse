import Sequelize, { Model } from 'sequelize';

class Questao extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        id_variavel: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'questoes'
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Variavel, { foreignKey: 'id_variavel', as: 'variavel' });
  }
}

export default Questao;