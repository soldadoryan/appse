import Solucao from '../models/Solucao';
import Resultado from '../models/Resultado';

class SolucaoController {
  async store(req, res) { // Insert
    const { label, id_resultado } = req.body;

    const solucao = await Solucao.create({
      label, id_resultado
    });

    res.json({ solucao, message: 'Solução criada com sucesso', success: true });
  };

  async index(req, res) { // Read
    const solucoes = await Solucao.findAll({
      raw: true,
      include: [
        { model: Resultado, as: 'resultado' }
      ]
    });

    res.json(solucoes);
  };

  async update(req, res) { // update
    const { id } = req.params;
    const { label, id_resultado } = req.body;

    const solucao = await Solucao.findByPk(id);

    solucao.label = label;
    solucao.id_resultado = id_resultado;

    solucao.save();

    res.json({ solucao, message: 'Solução editada com sucesso', success: true });
  };

  async destroy(req, res) { // delete
    const { ids } = req.params;

    const array_ids = ids.split(`,`);

    array_ids.map(async id => {
      const solucao = await Solucao.findByPk(id);

      solucao.destroy();
    });

    res.json({ message: 'Solução(ões) excluída(s) com sucesso!', success: true });
  };
}

export default new SolucaoController();