import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CSelect from '../../CSelect';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(item.label);
  }, [item]);

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {
      response = (await api.put(`/variaveis/${item.id}`, {
        label,
      })).data;
    } else {
      response = (await api.post('/variaveis', {
        label,
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
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de variável`}</h2>
      <CInput val={label} required={true} change={e => setLabel(e)} type='text' label='Label' />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
