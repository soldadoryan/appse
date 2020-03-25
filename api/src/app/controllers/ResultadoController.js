import Resultado from '../models/Resultado';

class ResultadoController {
    async store(req, res) { // Insert
        const { label, text } = req.body;

        const resultado = await Resultado.create({
            label,
            text
        });

        res.json({ resultado, message: 'Resultado criado com sucesso', success: true });
    };

    async index(req, res) { // Read
        const resultados = await Resultado.findAll();

        res.json(resultados);
    };

    async update(req, res) { // update
        const { id } = req.params;
        const { label, text } = req.body;

        const resultado = await Resultado.findByPk(id);

        resultado.label = label;
        resultado.text = text;

        resultado.save();

        res.json({ resultado, message: 'Resultado editado com sucesso', success: true });
    };

    async destroy(req, res) { // delete
        const { ids } = req.params;

        const array_ids = ids.split(`,`);

        array_ids.map(async id => {
            const resultado = await Resultado.findByPk(id);

            resultado.destroy();
        });

        res.json({ message: 'Resultado(s) excluído(s) com sucesso!', success: true });
    };
}

export default new ResultadoController();