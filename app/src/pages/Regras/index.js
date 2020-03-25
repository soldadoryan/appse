import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormRegras from '../../components/Regras/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Regras() {
  const [regras, setRegras] = useState([]);

  useEffect(() => {
    getRegras();
  }, []);

  const getRegras = async () => {
    const response = (await api.get('/regras')).data;
    setRegras(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containerregra">

        <TitlePage>Lista de Regras</TitlePage>

        <Painel className="painelregra">
          <CTable
            titles={['#', 'Regra']}
            values={regras}
            indexes={['id', 'content']}
            indexesSearch={['content']}
            load={getRegras}
            FormCustom={FormRegras}
            actionDelete='/regras'
          />
        </Painel>

      </Container>
    </Page>
  );
}
