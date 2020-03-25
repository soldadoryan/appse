import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CButton from '../CButton';

import { Backdrop, Wrap } from './styles';

export default function Sistema({ close, questoes }) {
  const [index, setIndex] = useState(0);
  const [questao, setQuestao] = useState({ label: '' });
  const [showResultado, setShowResultado] = useState(false);

  const [resultados, setResultados] = useState([]);
  const [solucoes, setSolucoes] = useState([]);

  useEffect(() => {
    if (questoes !== [])
      setQuestao(questoes[index]);
  }, [questoes, index]);

  const responder = async resposta => {
    const response = (await api.put(`/variaveis/${questao['variavel.id']}`, {
      value: resposta === 'sim' ? 1 : 0
    }));

    if (index < questoes.length - 1) {
      setIndex(index + 1);
    } else {
      setShowResultado(true);
      const response = (await api.get('/gerar-resultado')).data;
      setResultados(response.resultadosGerados);
      setSolucoes(response.solucoes);
    }
  };

  return (
    <>
      <Backdrop />
      <Wrap>
        {showResultado ? (
          <>
            <h3>Sistema Especialista</h3>
            <h2>Resultados</h2>
            {resultados.length < 1 && (
              <h4>Nenhum resultado foi encontrado.</h4>
            )}

            {resultados.map(resultado => (
              <div className='resultado'>
                <h4>{resultado.text}</h4>
                <p>
                  {solucoes.filter(v => v.id_resultado === resultado.id).map(s => s.label)}
                </p>
              </div>
            ))}
          </>
        ) : (
            <>
              <h3>Sistema Especialista</h3>
              <h2>{(questao !== { label: '' }) && questao.label}</h2>
              <div className='wrapbuttons'>
                <CButton click={() => responder('sim')} cstyle='primary' title='Sim' />
                <CButton click={() => responder('nao')} cstyle='danger' title='Não' />
              </div>
            </>
          )}
        <button onClick={() => close()}>Parar execução do sistema</button>
      </Wrap>
    </>
  );
}
