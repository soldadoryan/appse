import Sequelize, { Model } from 'sequelize';

class Solucao extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        id_resultado: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'solucoes'
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Resultado, { foreignKey: 'id_resultado', as: 'resultado' });
  }
}

export default Solucao;