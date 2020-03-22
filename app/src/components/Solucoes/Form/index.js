import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

  const [label, setLabel] = useState('');
  const [resultado, setResultado] = useState('');
  const [resultados, setresultados] = useState([]);


  useEffect(() => {
    setLabel(item.label);
    setResultado(item['resultado.id']);
    getResultados();
  }, [item]);

  const getResultados = async () => {
    const response = (await api.get('/resultados')).data;

    setresultados(response);
  };

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {
      response = (await api.put(`/solucoes/${item.id}`, {
        label,
        id_resultado: resultado
      })).data;
    } else {
      response = (await api.post('/solucoes', {
        label,
        id_resultado: resultado
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

  return (
    <WrapForm onSubmit={submitForm}>
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de solução`}</h2>
      <CInput val={label} required={true} change={e => setLabel(e)} type='text' label='Solução' />
      <CSelect label='Resultado' val={resultado} change={e => setResultado(e)} required={true} items={resultados} />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
