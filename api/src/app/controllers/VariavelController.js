import Variavel from '../models/Variavel';

class VariavelController {
    async store(req, res) { // Insert
        const { label } = req.body;

        const variavel = await Variavel.create({
            label
        });

        res.json({ variavel, message: 'Variável criada com sucesso', success: true });
    };

    async index(req, res) { // Read
        const variaveis = await Variavel.findAll();

        res.json(variaveis);
    };

    async update(req, res) { // update
        const { id } = req.params;
        const { label } = req.body;

        const variavel = await Variavel.findByPk(id);

        variavel.label = label;

        variavel.save();

        res.json({ variavel, message: 'Variável editada com sucesso', success: true });
    };

    async destroy(req, res) { // delete
        const { ids } = req.params;

        const array_ids = ids.split(`,`);

        array_ids.map(async id => {
            const variavel = await Variavel.findByPk(id);

            variavel.destroy();
        });

        res.json({ message: 'Variável(is) excluída(s) com sucesso!', success: true });
    };
}

export default new VariavelController();