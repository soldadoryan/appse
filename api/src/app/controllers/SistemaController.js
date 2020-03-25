import Variavel from '../models/Variavel';
import Resultado from '../models/Resultado';
import Regra from '../models/Regra';
import Solucao from '../models/Solucao';

class SistemaController {
  async gerarResultado(req, res) {
    const resultados = await Resultado.findAll();
    const regras = await Regra.findAll();
    const variaveis = await Variavel.findAll();

    var resultadosGerados = [];

    resultados.map(async resultado => {
      regras.map(async regra => {

        const content = JSON.parse(regra.content);

        if (content.resultado === resultado.label) {
          var isTrue = true;

          await content.condicoes.map(async condicao => {
            let variavel;

            variaveis.map(v => {
              if (v.label === condicao.variavel) {
                variavel = v;
              }
            });

            if (String(condicao.resposta) !== String(variavel.value)) {
              isTrue = false;
            }
          });

          if (isTrue === true) {
            resultadosGerados.push(resultado);
          }

        }
      });
    });

    const solucoes = await Solucao.findAll();

    res.json({ resultadosGerados, solucoes });

  }
}

export default new SistemaController();