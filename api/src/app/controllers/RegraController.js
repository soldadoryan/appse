import Regra from '../models/Regra';

class RegraController {
  async store(req, res) { // Insert
    const { content } = req.body;

    const regra = await Regra.create({
      content
    });

    res.json({ regra, message: 'Regra criada com sucesso', success: true });
  };

  async index(req, res) { // Read
    const regras = await Regra.findAll();

    res.json(regras);
  };

  async update(req, res) { // update
    const { id } = req.params;
    const { content } = req.body;

    const regra = await Regra.findByPk(id);

    regra.content = content;

    regra.save();

    res.json({ regra, message: 'Regra editada com sucesso', success: true });
  };

  async destroy(req, res) { // delete
    const { ids } = req.params;

    const array_ids = ids.split(`,`);

    array_ids.map(async id => {
      const regra = await Regra.findByPk(id);

      regra.destroy();
    });

    res.json({ message: 'Regra(as) excluída(s) com sucesso!', success: true });
  };
}

export default new RegraController();