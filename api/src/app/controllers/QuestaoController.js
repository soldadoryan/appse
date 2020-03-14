import Questao from '../models/Questao';
import Variavel from '../models/Variavel';

class QuestaoController {
  async store(req, res) { // Insert
    const { label, id_variavel } = req.body;

    const questao = await Questao.create({
      label, id_variavel
    });

    res.json({ questao, message: 'Questão criada com sucesso', success: true });
  };

  async index(req, res) { // Read
    const questoes = await Questao.findAll({
      raw: true,
      include: [
        { model: Variavel, as: 'variavel' }
      ]
    });

    res.json(questoes);
  };

  async update(req, res) { // update
    const { id } = req.params;
    const { label, id_variavel } = req.body;

    const questao = await Questao.findByPk(id);

    questao.label = label;
    questao.id_variavel = id_variavel;

    questao.save();

    res.json({ questao, message: 'Questão editada com sucesso', success: true });
  };

  async destroy(req, res) { // delete
    const { ids } = req.params;

    const array_ids = ids.split(`,`);

    array_ids.map(async id => {
      const questao = await Questao.findByPk(id);

      questao.destroy();
    });

    res.json({ message: 'Questão(ões) excluída(s) com sucesso!', success: true });
  };
}

export default new QuestaoController();