import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { WrapForm } from './styles';

import CInput from '../../CInput';
import CButton from '../../CButton';

export default function Form({ item, success, close }) {

  const [label, setLabel] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setLabel(item.label);
    setText(item.text);
  }, [item]);

  const submitForm = async e => {
    e.preventDefault();

    let response;

    if (item.id) {
      response = (await api.put(`/resultados/${item.id}`, {
        label,
        text
      })).data;
    } else {
      response = (await api.post('/resultados', {
        label,
        text
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
      <h2>{`${(item.id) ? 'Edição' : 'Cadastro'} de resultado`}</h2>
      <CInput val={label} required={true} change={e => setLabel(e)} type='text' label='Label' />
      <CInput val={text} required={true} change={e => setText(e)} type='text' label='Mensagem' />
      <CButton title='Salvar' cstyle='primary small' />
    </WrapForm>
  );
}
