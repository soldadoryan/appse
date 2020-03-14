import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

  const [label, setLabel] = useState('');
  const [variavel, setVariavel] = useState('');
  const [variaveis, setVariaveis] = useState([]);


  useEffect(() => {
    setLabel(item.label);
    setVariavel(item['variavel.id']);
    getVariaveis();
  }, [item]);

  const getVariaveis = async () => {
    const response = (await api.get('/variaveis')).data;

    setVariaveis(response);
  };

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {
      response = (await api.put(`/questoes/${item.id}`, {
        label,
        id_variavel: variavel
      })).data;
    } else {
      response = (await api.post('/questoes', {
        label,
        id_variavel: variavel
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
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de questão`}</h2>
      <CInput val={label} required={true} change={e => setLabel(e)} type='text' label='Pergunta' />
      <CSelect label='Variavel' val={variavel} change={e => setVariavel(e)} required={true} items={variaveis} />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
