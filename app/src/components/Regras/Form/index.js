import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {
  const [variavel, setVariavel] = useState('');
  const [resposta, setResposta] = useState('');
  const [resultado, setResultado] = useState('');

  const [variaveis, setVariaveis] = useState([]);
  const [resultados, setResultados] = useState([]);

  const [condicao, setCondicao] = useState({});

  const [regra, setRegra] = useState({
    condicoes: [],
    resultado: '',
  });

  const [booleans] = useState([
    {
      id: true,
      label: 'Sim'
    },
    {
      id: false,
      label: 'Não'
    },
  ]);

  useEffect(() => {
    if (item.content) {
      setRegra(JSON.parse(item.content));
      setResultado(JSON.parse(item.content).resultado);
    }
    getVariaveis();
    getResultados();
  }, [item]);

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {


      response = (await api.put(`/regras/${item.id}`, {
        content: JSON.stringify(regra),
      })).data;
    } else {
      response = (await api.post('/regras', {
        content: JSON.stringify(regra),
      })).data;
    }

    if (response.success) {
      toast.success(response.message);
      success();
      close();
    } else {
      toast.error(response.message);
    }
  };

  const getVariaveis = async () => {
    const response = (await api.get('/variaveis')).data;

    setVariaveis(response);
  };

  const getResultados = async () => {
    const response = (await api.get('/resultados')).data;

    setResultados(response);
  };

  const adicionarCondicoes = () => {
    let auxRegra = regra;

    auxRegra.condicoes = [...auxRegra.condicoes, { variavel, resposta }];

    setRegra(auxRegra);
    setVariavel(' ');
  };

  const adicionarResultado = (result) => {
    let auxRegra = regra;

    auxRegra.resultado = result;

    setRegra(auxRegra);
  };

  const retirarCondicao = index => {
    let auxRegra = regra;

    console.log('excluir condicao');

    auxRegra.condicoes.splice(index, 1);

    setRegra(auxRegra);
    setVariavel(' ');
  };

  return (
    <>
      <WrapForm onSubmit={submitForm}>
        <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de regra`}</h2>
        <div className='previewregra'>
          <strong>SE</strong>

          {(regra.condicoes) && regra.condicoes.map((condicao, index) => (
            <>
              <span>{condicao.variavel} <strong>{'='}</strong> {condicao.resposta} <button onClick={() => retirarCondicao(index)}>x</button></span>
            </>
          ))}
          <strong>ENTAO</strong>
          <span>{resultado}</span>
        </div>
        <CSelect label='Variável' islabel={true} val={variavel} change={e => setVariavel(e)} required={true} items={variaveis} />
        <strong>{'= '}</strong>
        <CSelect label='Resposta' val={resposta} change={e => setResposta(e)} required={true} items={booleans} />
        <div onClick={() => adicionarCondicoes()}>
          <CButton ctype='button' title='Adicionar condição' cstyle='primary small' />
        </div>
        <div className='separator'></div>
        <CSelect label='Resultado' islabel={true} val={resultado} change={e => { setResultado(e); adicionarResultado(e); }} required={true} items={resultados} />
        <CButton ctype='submit' title='Salvar' cstyle='primary small' />
      </WrapForm>
    </>
  );
}
