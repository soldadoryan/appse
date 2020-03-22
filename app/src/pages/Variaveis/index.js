import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormVariaveis from '../../components/Variaveis/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Variaveis() {
  const [variaveis, setVariaveis] = useState([]);

  useEffect(() => {
    getVariaveis();
  }, []);

  const getVariaveis = async () => {
    const response = (await api.get('/variaveis')).data;
    setVariaveis(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containervariavel">

        <TitlePage>Lista de Variáveis</TitlePage>

        <Painel className="painelvariavel">
          <CTable
            titles={['#', 'Label']}
            values={variaveis}
            indexes={['id', 'label']}
            indexesSearch={['label']}
            load={getVariaveis}
            FormCustom={FormVariaveis}
            actionDelete='/variaveis'
          />
        </Painel>

      </Container>
    </Page>
  );
}
